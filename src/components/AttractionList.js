/* COMPONENT TO DISPLAY ATTRACTION SEARCH RESULTS */

import React, { Component } from 'react';

import { connect } from 'react-redux';

import Attraction from './Attraction';

class AttractionList extends Component {
  render() {
    return(
      <div>
        <Attraction />
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

export default connect(mapS2P, null)(AttractionList);
