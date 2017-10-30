/* COMPONENT TO VIEW RESTAURANTS THAT HAVE BEEN FAVORITED */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

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
        <div>
          <h3>Restaurants:</h3>
          <button className="btn btn-info" onClick={ () => this.handleRestaurantSearch() } >Find Restaurants</button>
        </div>
      )
    } else {

      const restaurants = this.props.currentTrip.restaurants.map( (restaurant, index) => {
        return(
          <div>
            <div>
              <img className="img-fluid" src={restaurant.image_url} alt="" />
              <p>{restaurant.price}</p>
              <p>{restaurant.rating}</p>
            </div>
            <div>
              <p>{restaurant.name}</p>
              <p>{restaurant.display_phone}</p>
              <p>{restaurant.address1}</p>
              <p>{restaurant.city}, {restaurant.state} {restaurant.zip_code}</p>
              <button className="btn btn-info" onClick={ () => this.deleteRestaurant(index) }>Delete</button>
            </div>
          </div>
        )
      })

      return (
        <div>
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
