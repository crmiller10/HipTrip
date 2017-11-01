/* PAGE TO DISPLAY SHOPPING SEARCH RESULTS */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBar from "../TopBar";
import StoreList from "../StoreList";
import NavTabs from "../NavTabs";

class ShoppingSearch extends Component {
  render() {
    return(
      <div className="wrapper search-wrapper">
        <TopBar />
        <NavTabs />
        <div className="page-content">
          <StoreList />
        </div>
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

export default connect(mapS2P, null)(ShoppingSearch);
