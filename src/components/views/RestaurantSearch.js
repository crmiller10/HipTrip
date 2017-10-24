import React, { Component } from 'react';
import RestaurantList from "../RestaurantList";
import NavTabs from "../NavTabs";
import Map from "../Map";

class RestaurantSearch extends Component {
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
          <div className="map-container py-4">
            <Map />
          </div>
          <RestaurantList />
        </div>
      </div>
    );
  }
}

export default RestaurantSearch;
