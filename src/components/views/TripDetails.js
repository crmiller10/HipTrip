import React, { Component } from 'react';

import NavTabs from "../NavTabs";
import TripDates from '../TripDates';
import TripGuests from '../TripGuests';
import HotelDetails from '../HotelDetails';


class TripDetails extends Component {
  render() {
    return (
      <div className="container">
        <div className="top-bar">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="title">Destination</h3>
            </div>
            <div className="col-sm-6">
             <div className="text-right"><h2>$$$$$</h2></div>
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

export default TripDetails;
