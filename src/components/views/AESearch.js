/* PAGE TO DISPLAY ARTS & ENTERTAINMENT SEARCH RESULTS */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import AEList from "../AEList";
import NavTabs from "../NavTabs";
import TopBar from "../TopBar";

class AESearch extends Component {
  render() {
    return(
      <div className="wrapper search-wrapper">
        <TopBar />
        <NavTabs />
        <div className="page-content">
          <AEList />
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

export default connect(mapS2P, null)(AESearch);
