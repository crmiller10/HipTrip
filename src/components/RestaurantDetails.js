/* COMPONENT TO VIEW RESTAURANTS THAT HAVE BEEN FAVORITED */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

import { symbolsDisplay } from '../utilities';

class RestaurantDetails extends Component {

  // get request to bring in the trip id
  handleRestaurantSearch() {
    console.log(this.props.currentTrip)

    let id = this.props.currentTrip.id;

    fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
      .then( resp => resp.json())
      .then( resp => this.props.history.push('/restaurant-search/' + resp.id) )
  }

  deleteRestaurant(id) {
    console.log(id);

    fetch('https://hip-trip.herokuapp.com/restaurant/' + id, {
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

    if (this.props.currentTrip.restaurants === null || this.props.currentTrip.restaurants.length === 0) {
      return(
        <div className="details-section col-lg-12 mb-4 mt-4">
          <h3>Restaurants:</h3>
          <button className="details-find-btn btn btn-info" onClick={ () => this.handleRestaurantSearch() } ><i className="fa fa-search" aria-hidden="true"></i> Discover Restaurants</button>
        </div>
      )
    } else {

      const restaurants = this.props.currentTrip.restaurants.map( (business, index) => {
        let stars = symbolsDisplay(business.rating, <i className="fa fa-star"></i>, <i className="fa fa-star-half-o" aria-hidden="true"></i>)

        return(
          <div className="tripdetails-biz">
            <img className="img-fluid col-sm-12 col-lg-4" src={business.image_url} alt="" />
            <div className="tripdetails-biz-info col-sm-12 col-lg-4">
              <p className="tripdetails-biz-name">{business.name}</p>
              <p className="tripdetails-biz-phone">{business.display_phone}</p>
              <p className="tripdetails-biz-address">{business.address1}</p>
              <p className="tripdetails-biz-address">{business.city}, {business.state} {business.zip_code}</p>
            </div>
            <div className="tripdetails-biz-info col-lg-2">
              <p className="tripdetails-biz-price">{business.price}</p>
              <div className="star-container">
              {stars}
              </div>
              <button className="delete-btn btn btn-info" onClick={ () => this.deleteHotel(index) }><i className="fa fa-trash"></i> Delete</button>
            </div>
          </div>
        )
      })

      return (
        <div className="details-section col-lg-12 mb-4 mt-4">
          <h3>Restaurant Details:</h3>
          {restaurants}
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

export default withRouter(connect(mapS2P, mapD2P)(RestaurantDetails));
