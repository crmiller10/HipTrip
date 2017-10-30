/* COMPONENT TO VIEW ARTS & ENTERTAINMENT OPTIONS THAT HAVE BEEN FAVORITED */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

class AttractionDetails extends Component {

  // get request to bring in the trip id
  handleAttractionSearch() {
  console.log(this.props.currentTrip)

  let id = this.props.currentTrip.id;

  fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
    .then( resp => resp.json())
    .then( resp => this.props.history.push('/attraction-search/' + resp.id) )
  }

  deleteAttraction(id) {
    console.log(id);

    fetch('https://hip-trip.herokuapp.com/attraction/' + id, {
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

    if (this.props.currentTrip.attractions === null || this.props.currentTrip.attractions.length === 0) {
      return(
        <div className="details-section col-lg-8 mb-4 mt-4">
          <h3>Attractions:</h3>
          <button className="details-find-btn col-lg-4 col-lg-offset-4" onClick={ () => this.handleAttractionSearch() } >Discover Attractions</button>
        </div>
      )
    } else {

      const attractions = this.props.currentTrip.attractions.map( (attraction, index) => {
        return(
          <div className="tripdetails-biz">
            <img className="img-fluid col-lg-6" src={attraction.image_url} alt="" />
            <div className="tripdetails-biz-info col-lg-4">
              <p className="tripdetails-biz-name">{attraction.name}</p>
              <p className="tripdetails-biz-phone">{attraction.display_phone}</p>
              <p className="tripdetails-biz-address">{attraction.address1}</p>
              <p className="tripdetails-biz-address">{attraction.city}, {attraction.state} {attraction.zip_code}</p>
            </div>
            <div className="tripdetails-biz-info col-lg-2">
              <i class="fa fa-heart" onClick={ () => this.deleteAttraction(index) }></i>
              <p className="tripdetails-biz-price">{attraction.price}</p>
              <p className="tripdetails-biz-rating">{attraction.rating}</p>
            </div>
          </div>
        )
      })

    return (
      <div className="details-section col-lg-8 mb-4 mt-4">
        <h3>Attractions:</h3>
        {attractions}
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

export default withRouter(connect(mapS2P, mapD2P)(AttractionDetails));
