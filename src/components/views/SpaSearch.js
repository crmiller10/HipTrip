/* PAGE TO DISPLAY SPA SEARCH RESULTS */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpaList from "../SpaList";
import NavTabs from "../NavTabs";

class SpaSearch extends Component {
  render() {
    return(
      <div className="container">
        <div className="top-bar">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="title">{this.props.currentTrip.destination}</h3>
            </div>
            <div className="col-sm-6">
             <div className="text-right"><h2>{this.props.currentTrip.budget}</h2></div>
            </div>
          </div>
        </div>
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
            <button>Barber</button>
            <button>Day Spas</button>
            <button>Hair Salon</button>
            <button>Massage</button>
            <button>Nail Salon</button>
          </div>
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
