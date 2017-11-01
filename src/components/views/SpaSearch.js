/* PAGE TO DISPLAY SPA SEARCH RESULTS */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpaList from "../SpaList";
import NavTabs from "../NavTabs";
import TopBar from "../TopBar";

class SpaSearch extends Component {
  render() {
    return(
      <div className="wrapper search-wrapper">
        <TopBar />
        <NavTabs />
        <div className="page-content">
          <SpaList />
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

export default connect(mapS2P, null)(SpaSearch);
