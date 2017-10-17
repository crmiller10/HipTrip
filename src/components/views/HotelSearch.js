import React, { Component } from 'react';

import HotelList from "../HotelList";
import HotelListTest from "../HotelListTest";

import NavTabs from "../NavTabs";

class HotelSearch extends Component {
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
        <div className="page-content tab-content">
          <div className="map-container py-4">
          {/* JSX Comment
          //   <img className="img-fluid" src="https://developers.google.com/maps/solutions/images/storelocator_clothing.png"></img>*/}
          </div>
          <p>Hotels</p>
          <div>
            <HotelListTest />
          </div>
        </div>
      </div>
    );
  }
}

export default HotelSearch;