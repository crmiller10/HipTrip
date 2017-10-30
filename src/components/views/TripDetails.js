/* PAGE TO VIEW THE SUMMARY OF THE TRIP */

import React, { Component } from 'react';

//import redux stuff
import { connect } from 'react-redux';

import TopBar from "../TopBar";
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
      <div className="wrapper">
        <TopBar />
        <NavTabs />
        <div className="page-content">
          <section className="section">
            <div className="container">
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
          </section>
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
