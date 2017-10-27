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

  render() {

    if (this.props.currentTrip.attractions === null || this.props.currentTrip.attractions.length === 0) {
      return(
        <div>
          <h3>Attractions:</h3>
          <button onClick={ () => this.handleAttractionSearch() } >Discover Attractions</button>
        </div>
      )
    } else {

      const attractions = this.props.currentTrip.attractions.map( (attraction, index) => {
        return(
          <a href={attraction.url}>
            <div>
              <img src={attraction.image_url} alt="" />
              <p>{attraction.price}</p>
              <p>{attraction.rating}</p>
            </div>
            <div>
              <p>{attraction.name}</p>
              <p>{attraction.display_phone}</p>
              <p>{attraction.address1}</p>
              <p>{attraction.city}, {attraction.state} {attraction.zip_code}</p>
            </div>
          </a>
        )
      })

    return (
      <div>
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

export default withRouter(connect(mapS2P, null)(AttractionDetails));
