import React, { Component } from 'react';
import { connect } from 'react-redux';

import { symbolsDisplay } from '../utilities';

class TopBar extends Component {
  render() {
    let budget = symbolsDisplay(this.props.currentTrip.budget, <i className="fa fa-usd"></i>)
    console.log('getTrip', this.props.currentTrip)
    return (
      <section className="section py-4 top-bar">
        <div className="panel">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h6>Destination</h6>
                <h3 className="title">{this.props.currentTrip.destination}</h3>
              </div>
              <div className="col-sm-6">
                <div className="text-right">
                  <h6>Budget</h6>
                  <h2>{budget}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default connect(mapS2P, null)(TopBar);
