import React, { Component } from 'react';
import { connect } from 'react-redux';
import TripDetails from "./TripDetails";
import HotelList from "../HotelList";
import NavTabs from "../NavTabs";
import Map from "../Map";


// import { addPlace } from '../../actions';

class HotelSearch extends Component {
  render() {
    // console.log('getTrip', this.props.currentTrip)
    return (
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
          <Map />
          <HotelList />
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

export default connect(mapS2P, null)(HotelSearch);
