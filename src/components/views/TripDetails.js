import React, { Component } from 'react';

//import redux stuff
import { connect } from 'react-redux';

import NavTabs from "../NavTabs";
import TripDates from '../TripDates';
import TripGuests from '../TripGuests';
import HotelDetails from '../HotelDetails';


class TripDetails extends Component {
  // going to need to do component did mount with get request
  // need to send the get request everytime the component is mounted

  render() {
    console.log(this.props.currentTrip)
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
          <TripDates />
          <TripGuests />
          <HotelDetails />
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

// do all of the API/updating stuff here
function mapD2P(dispatch) {
}

export default connect(mapS2P, mapD2P)(TripDetails);


// export default TripDetails;
