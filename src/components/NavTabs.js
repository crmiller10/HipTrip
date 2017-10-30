import React, { Component } from 'react';

import { Link, withRouter, NavLink } from 'react-router-dom';
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

      // .then( resp => this.props.history.push('/trip-details/' + resp.id) )
  }

  handleHotelSearch() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;

    fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
      .then( resp => resp.json())

      // .then( resp => this.props.history.push('/hotel-search/' + resp.id) )
  }

  handleRestaurantSearch() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;

    fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
      .then( resp => resp.json())

      // .then( resp => this.props.history.push('/restaurant-search/' + resp.id) )
  }

  handleAESearch() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;

    fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
      .then( resp => resp.json())

      // .then( resp => this.props.history.push('/art-search/' + resp.id) )
    // this.props.history.push('/art-search/' + id)
  }

  handleShoppingSearch() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;

    // fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
    //   .then( resp => resp.json())
    //   .then( resp => this.props.history.push('/ae-search/' + resp.id) )

    // this.props.history.push('/shopping-search/' + id)
  }

  handleAttractionSearch() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;

    // fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
    //   .then( resp => resp.json())
    //   .then( resp => this.props.history.push('/ae-search/' + resp.id) )

    // this.props.history.push('/attraction-search/' + id)
  }

  handleNightlifeSearch() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;

    // fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
    //   .then( resp => resp.json())
    //   .then( resp => this.props.history.push('/ae-search/' + resp.id) )

    // this.props.history.push('/nightlife-search/' + id)
  }

  handleSpaSearch() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;


    // fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
    //   .then( resp => resp.json())
    //   .then( resp => this.props.history.push('/ae-search/' + resp.id) )

    // this.props.history.push('/spa-search/' + id);
  }
  render(){
    return(
      <section className="section pt-4">
        <div className="container">
          <nav className="nav-tabs navbar-light">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <NavLink onClick={ () => this.handleDetailsRoute() } className="nav-link" to={"/trip-details/" + this.props.currentTrip.id}>
                  Trip Details
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={ () => this.handleHotelSearch() } className="nav-link" to={"/hotel-search/" + this.props.currentTrip.id}>
                  Hotels
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={ () => this.handleRestaurantSearch() } className="nav-link" to={"/restaurant-search/" + this.props.currentTrip.id}>Restaurants
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={ () => this.handleAESearch() } className="nav-link" to={"/art-search/" + this.props.currentTrip.id}>
                  Arts & Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={ () => this.handleShoppingSearch() } className="nav-link" to={"/shopping-search/" + this.props.currentTrip.id}>Shopping
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={ () => this.handleAttractionSearch() } className="nav-link" to={"/attraction-search/" + this.props.currentTrip.id}>Attractions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={ () => this.handleNightlifeSearch() } className="nav-link" to={"/nightlife-search/" + this.props.currentTrip.id}>Nightlife
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={ () => this.handleSpaSearch() } className="nav-link" to={"/spa-search/" + this.props.currentTrip.id}>
                  Beauty & Spas
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
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
