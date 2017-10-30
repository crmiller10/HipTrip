import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

class HotelDetails extends Component {

  handleHotelSearch() {
    console.log(this.props.currentTrip)

    let id = this.props.currentTrip.id;

    fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
      .then( resp => resp.json())
      .then( resp => this.props.history.push('/hotel-search/' + resp.id) )
  }

  deleteHotel(id) {
    console.log(id);

    fetch('https://hip-trip.herokuapp.com/hotel/' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.props.currentTrip),
    })
      .then( resp => resp.json())
      .then( resp => {
        console.log('success')
        console.log(resp)
        this.props.fixTrip(resp)
      })
      .catch( () => console.log('error'))
  }

  render() {

    if (this.props.currentTrip.hotels.length === 0) {
      return(
        <div className="details-section col-lg-8 mb-4 mt-4">
          <h3>Hotels:</h3>
          <button className="details-find-btn col-lg-4 col-lg-offset-4" onClick={ () => this.handleHotelSearch() } >Find Hotels</button>
        </div>
      )
    } else {

      const hotels = this.props.currentTrip.hotels.map( (hotel, index) => {
        return(
          <div className="tripdetails-biz">
            <img className="img-fluid col-lg-6" src={hotel.image_url} alt="" />
            <div className="tripdetails-biz-info col-lg-4">
              <p className="tripdetails-biz-name">{hotel.name}</p>
              <p className="tripdetails-biz-phone">{hotel.display_phone}</p>
              <p className="tripdetails-biz-address">{hotel.address1}</p>
              <p className="tripdetails-biz-address">{hotel.city}, {hotel.state} {hotel.zip_code}</p>
            </div>
            <div className="tripdetails-biz-info col-lg-2">
              <p className="tripdetails-biz-price">{hotel.price}</p>
              <p className="tripdetails-biz-rating">{hotel.rating}</p>
              <i className="fa fa-trash" onClick={ () => this.deleteHotel(index) }></i>
            </div>
          </div>
        )
      })

      return (
        <div className="details-section col-lg-8 mb-4 mt-4">
          <h3>Hotels:</h3>
          {hotels}
        </div>
      )
    }
  }
}

// import state
function mapS2P(state) {
  return {
    currentTrip: state.currentTrip,
    trips: state.trips,
  }
}

// do all of the API/updating stuff here
function mapD2P(dispatch) {
  return {
    // need to do the get request here
    fixTrip: function (trip) {
      dispatch(updateTrip(trip))
    }
  }
}

export default withRouter(connect(mapS2P, mapD2P)(HotelDetails));

// export default withRouter(HotelDetails);
