import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

class RestaurantDetails extends Component {

  handleRestaurantSearch() {
    console.log(this.props.currentTrip)

    let id = this.props.currentTrip.id;

    fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
      .then( resp => resp.json())
      .then( resp => this.props.history.push('/restaurant-search/' + resp.id) )
  }

  render() {

    // might need to talk to Chris about this?
    if (this.props.currentTrip.restaurants === null) {
      return(
        <div>
          <h3>Restaurant Details:</h3>
          <button onClick={ () => this.handleRestaurantSearch() } >Find Restaurants</button>
        </div>
      )
    } else {

      const restaurants = this.props.currentTrip.restaurants.map( (restaurant, index) => {
        return(
          <a href={restaurant.url}>
            <div>
              <img src={restaurant.image_url} alt="" />
              <p>{restaurant.price}</p>
              <p>{restaurant.rating}</p>
            </div>
            <div>
              <p>{restaurant.name}</p>
              <p>{restaurant.display_phone}</p>
              <p>{restaurant.address1}</p>
              <p>{restaurant.city}, {restaurant.state} {restaurant.zip_code}</p>
            </div>
          </a>
        )
      })

      return (
        <div>
          <h3>Restuarant Details:</h3>
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

export default withRouter(connect(mapS2P, null)(RestaurantDetails));
