import React, { Component } from 'react';

import { Link, withRouter, NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

class NavTabs extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      active: false
    })
  }
  handleActiveTab = () => {
    this.setState({
      active: !this.state.active
    });
  }

  handleDetailsRoute() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;

    fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
      .then( resp => resp.json())
      .then( resp => this.props.history.push('/trip-details/' + resp.id) )
  }

  handleHotelSearch() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;

    fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
      .then( resp => resp.json())
      .then( resp => this.props.history.push('/hotel-search/' + resp.id) )
  }

  handleRestaurantSearch() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;

    fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
      .then( resp => resp.json())
      .then( resp => this.props.history.push('/restaurant-search/' + resp.id) )
  }

  render(){
    //  let TabStyles = {

    // }
    return(
      <nav className="nav-tabs navbar-light">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button onClick={ () => this.handleDetailsRoute() } className="nav-link" to="/trip-details">Trip Details</button>
          </li>
          <li className="nav-item">
            <button onClick={ () => this.handleHotelSearch() } className="nav-link" to="/hotel-search">Hotels</button>
          </li>
          <li className="nav-item">
            <button onClick={ () => this.handleRestaurantSearch() } className="nav-link" to="/restaurant-search">Restaurants</button>
          </li>
          <li className="nav-item">
            <button onClick={ () => this.handleRestaurantSearch() } className="nav-link" to="/restaurant-search">Find Restaurants</button>
          </li>
        </ul>
      </nav>
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

export default withRouter(connect(mapS2P, null)(NavTabs));
