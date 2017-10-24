/* COMPONENT TO DISPLAY INDIVIDUAL ARTS & ENTERTAINMENT RESULT */

import React, { Component } from 'react';

//import redux stuff
import { connect } from 'react-redux';
import { updateTrip } from '../actions';

class AE extends Component {
  render() {
    return(
      <div>
      </div>
    )
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
    addRestaurant: function (trip) {
      dispatch(updateTrip(trip))
    }
  }
}


export default connect(mapS2P, mapD2P)(AE);
