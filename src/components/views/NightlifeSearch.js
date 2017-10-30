/* PAGE TO DISPLAY NIGHTLIFE SEARCH RESULTS */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import NightlifeList from "../NightlifeList";
import NavTabs from "../NavTabs";
import TopBar from "../TopBar";

class NightlifeSearch extends Component {
  render() {
    return(
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
          <div>
            <select>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option selected>Select Budget</option>
            </select>
            <button>Bars</button>
            <button>Beer Gardens</button>
            <button>Comedy Clubs</button>
            <button>Karaoke</button>
            <button>Music Venues</button>
          </div>
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
