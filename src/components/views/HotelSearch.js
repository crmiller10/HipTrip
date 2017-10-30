import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TripDetails from "./TripDetails";
import HotelList from "../HotelList";
import NavTabs from "../NavTabs";
import TopBar from "../TopBar";
import Map from "../Map";


// import { addPlace } from '../../actions';

class HotelSearch extends Component {
  render() {
    console.log('getTrip', this.props.currentTrip)
    return (
      <div>
        <TopBar />
        <div className="container">
          <NavTabs />
        </div>
        <div className="page-content">
          <div className="container">
            <Map />
          </div>
          <div className="container">
            <HotelList />
          </div>
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
