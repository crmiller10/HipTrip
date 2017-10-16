import React, { Component } from 'react';
import NavTabs from "../NavTabs";


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
          <h2>Trip Details</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, deserunt, quasi obcaecati maiores, corrupti cupiditate culpa earum error quo ab, ipsa eligendi iste adipisci tempore blanditiis voluptatem beatae deleniti incidunt.</p>
        </div>

      </div>
    );
  }
}

export default TripDetails;