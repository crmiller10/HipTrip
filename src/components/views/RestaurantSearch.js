/* PAGE TO DISPLAY RESTAURANT SEARCH RESULTS */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantList from "../RestaurantList";
import NavTabs from "../NavTabs";
import Map from "../Map";
import TopBar from "../TopBar";

class RestaurantSearch extends Component {
  render() {
    return (
      <div className="wrapper search-wrapper">
        <TopBar />
        <NavTabs />
        <div className="page-content">
          <Map />
          <RestaurantList />
        </div>
      </div>
    );
  }
}

// import state
function mapS2P(state) {
  return {
    currentTrip: state.currentTrip,
    trips: state.trips,
  }
}

export default connect(mapS2P, null)(RestaurantSearch);
