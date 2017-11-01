/* PAGE TO DISPLAY ATTRACTION SEARCH RESULTS */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import AttractionList from "../AttractionList";
import NavTabs from "../NavTabs";
import TopBar from "../TopBar";

class AttractionSearch extends Component {
  render() {
    return(
      <div className="wrapper search-wrapper">
        <TopBar />
        <NavTabs />
        <div className="page-content">
          <AttractionList />
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

export default connect(mapS2P, null)(AttractionSearch);
