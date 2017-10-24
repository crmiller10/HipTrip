/* COMPONENT TO DISPLAY NIGHTLIFE SEARCH RESULTS */

import React, { Component } from 'react';

import { connect } from 'react-redux';

import Nightlife from './Nightlife';

class NightlifeList extends Component {
  render() {
    return(
      <div>
        <Nightlife />
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

export default connect(mapS2P, null)(NightlifeList);
