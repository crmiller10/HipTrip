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
        <div>
          <h3>Hotel Details:</h3>
          <button onClick={ () => this.handleHotelSearch() } >Find Hotels</button>
        </div>
      )
    } else {

      const hotels = this.props.currentTrip.hotels.map( (hotel, index) => {
        return(
          <div>
            <div>
              <img src={hotel.image_url} alt="" />
              <p>{hotel.price}</p>
              <p>{hotel.rating}</p>
            </div>
            <div>
              <p>{hotel.name}</p>
              <p>{hotel.display_phone}</p>
              <p>{hotel.address1}</p>
              <p>{hotel.city}, {hotel.state} {hotel.zip_code}</p>
              <button onClick={ () => this.deleteHotel(index) }>Delete</button>
            </div>
          </div>
        )
      })

      return (
        <div>
          <h3>Hotel Details:</h3>
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
