/* COMPONENT TO DISPLAY ARTS & ENTERTAINMENT SEARCH RESULTS */

import React, { Component } from 'react';

import { connect } from 'react-redux';

import AE from './AE';

class AEList extends Component {
  render() {
    return(
      <div>
        <AE />
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

export default connect(mapS2P, null)(AEList);
