/* COMPONENT TO DISPLAY SHOPPING SEARCH RESULTS */

import React, { Component } from 'react';

import { connect } from 'react-redux';

import Store from './Store';

class StoreList extends Component {
  render() {
    return(
      <div>
        <Store />
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

export default connect(mapS2P, null)(StoreList);
