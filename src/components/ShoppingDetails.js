/* COMPONENT TO VIEW SHOPPING OPTIONS THAT HAVE BEEN FAVORITED */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

class ShoppingDetails extends Component {
  // get request to bring in the trip id
  handleShopSearch() {
    console.log(this.props.currentTrip)

    let id = this.props.currentTrip.id;

    fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
      .then( resp => resp.json())
      .then( resp => this.props.history.push('/shopping-search/' + resp.id) )
    }

    render() {

      if (this.props.currentTrip.shopping === null || this.props.currentTrip.shopping.length === 0) {
        return(
          <div>
            <h3>Shopping:</h3>
            <button onClick={ () => this.handleShopSearch() } >Discover Shopping</button>
          </div>
        )
      } else {

        const shops = this.props.currentTrip.shopping.map( (shop, index) => {
          return(
            <a href={shop.url}>
              <div>
                <img src={shop.image_url} alt="" />
                <p>{shop.price}</p>
                <p>{shop.rating}</p>
              </div>
              <div>
                <p>{shop.name}</p>
                <p>{shop.display_phone}</p>
                <p>{shop.address1}</p>
                <p>{shop.city}, {shop.state} {shop.zip_code}</p>
              </div>
            </a>
          )
        })

      return (
        <div>
          <h3>Shopping:</h3>
          {shops}
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

export default withRouter(connect(mapS2P, null)(ShoppingDetails));
