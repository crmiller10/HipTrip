/* PAGE TO DISPLAY ARTS & ENTERTAINMENT SEARCH RESULTS */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import AEList from "../AEList";
import NavTabs from "../NavTabs";
import TopBar from "../TopBar";

class AESearch extends Component {
  render() {
    return(
      <div className="wrapper">

        <TopBar />
        <NavTabs />
        <div className="page-content">
          {/*<div>
            <select>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option selected>Select Budget</option>
            </select>
            <button>Art Galleries</button>
            <button>Festivals</button>
            <button>Museums</button>
            <button>Performing Arts</button>
            <button>Wineries</button>
          </div>*/}
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
