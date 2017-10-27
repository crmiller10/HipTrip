/* PAGE TO VIEW THE SUMMARY OF THE TRIP */

import React, { Component } from 'react';

//import redux stuff
import { connect } from 'react-redux';

import NavTabs from "../NavTabs";
import TripDates from '../TripDates';
import TripGuests from '../TripGuests';
import HotelDetails from '../HotelDetails';
import RestaurantDetails from '../RestaurantDetails';
import AEDetails from '../AEDetails';
import ShoppingDetails from '../ShoppingDetails';
import AttractionDetails from '../AttractionDetails';
import NightlifeDetails from '../NightlifeDetails';
import SpaDetails from '../SpaDetails';

class TripDetails extends Component {

  render() {
    console.log(this.props.currentTrip)
    return (
      <div className="page-content">

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
          <RestaurantDetails />
          <AEDetails />
          <ShoppingDetails />
          <AttractionDetails />
          <NightlifeDetails />
          <SpaDetails />
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

export default connect(mapS2P, null)(TripDetails);


// export default TripDetails;
