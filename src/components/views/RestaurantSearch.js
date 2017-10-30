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
      <div className="container">
        {/*<div className="top-bar">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="title">{this.props.currentTrip.destination}</h3>
            </div>
            <div className="col-sm-6">
             <div className="text-right"><h2>{this.props.currentTrip.budget}</h2></div>
            </div>
          </div>
        </div>*/}
        <TopBar />
        <NavTabs />
        <div className="page-content">
          <div className="map-container py-4">
            <Map />
          </div>
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
