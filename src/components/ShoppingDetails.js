/* COMPONENT TO VIEW SHOPPING OPTIONS THAT HAVE BEEN FAVORITED */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

class ShoppingDetails extends Component {
  render() {
    return(
      <div>
        <h3>Shopping:</h3>
        <button>Discover Shopping</button>
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

export default withRouter(connect(mapS2P, null)(ShoppingDetails));
