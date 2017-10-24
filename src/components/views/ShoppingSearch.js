/* PAGE TO DISPLAY SHOPPING SEARCH RESULTS */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoreList from "../ShoppingList";
import NavTabs from "../NavTabs";

class ShoppingSearch extends Component {
  render() {
    return(
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
          <div>
            <select>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option selected>Select Budget</option>
            </select>
            <button>Antiques</button>
            <button>Fashion</button>
            <button>Jewelry</button>
            <button>Outlet Stores</button>
            <button>Pop-up Shops</button>
          </div>
          <StoreList />
        </div>
      </div>
    )
  }
}

// import state
function mapS2P(state) {
  return {
    currentTrip: state.currentTrip,
    trips: state.trips,
  }
}

export default connect(mapS2P, null)(ShoppingSearch);
