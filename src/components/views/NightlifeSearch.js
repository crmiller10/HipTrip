/* PAGE TO DISPLAY NIGHTLIFE SEARCH RESULTS */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import NightlifeList from "../NightlifeList";
import NavTabs from "../NavTabs";
import TopBar from "../TopBar";

class NightlifeSearch extends Component {
  render() {
    return(
      <div className="wrapper search-wrapper">
        <TopBar />
        <NavTabs />
        <div className="page-content">
          <NightlifeList />
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

export default connect(mapS2P, null)(NightlifeSearch);
