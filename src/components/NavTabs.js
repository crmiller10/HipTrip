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

  handleAESearch() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;

    fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
      .then( resp => resp.json())
      .then( resp => this.props.history.push('/art-search/' + resp.id) )
    // this.props.history.push('/art-search/' + id)
  }

  handleShoppingSearch() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;

    // fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
    //   .then( resp => resp.json())
    //   .then( resp => this.props.history.push('/ae-search/' + resp.id) )
    this.props.history.push('/shopping-search/' + id)
  }

  handleAttractionSearch() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;

    // fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
    //   .then( resp => resp.json())
    //   .then( resp => this.props.history.push('/ae-search/' + resp.id) )
    this.props.history.push('/attraction-search/' + id)
  }

  handleNightlifeSearch() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;

    // fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
    //   .then( resp => resp.json())
    //   .then( resp => this.props.history.push('/ae-search/' + resp.id) )
    this.props.history.push('/nightlife-search/' + id)
  }

  handleSpaSearch() {
    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id;


    // fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
    //   .then( resp => resp.json())
    //   .then( resp => this.props.history.push('/ae-search/' + resp.id) )
    this.props.history.push('/spa-search/' + id);
  }



  render(){
    //  let TabStyles = {

    // }
    return(
      <section className="section pt-4">
        <nav className="nav-tabs navbar-light">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink onClick={ () => this.handleDetailsRoute() } className="nav-link" to="/trip-details/:id">
                Trip Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={ () => this.handleHotelSearch() } className="nav-link" to="/hotel-search/:id">
                Hotels
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={ () => this.handleRestaurantSearch() } className="nav-link" to="/restaurant-search/:id">Restaurants
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={ () => this.handleAESearch() } className="nav-link" to="/art-search/:id">
                Arts & Entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={ () => this.handleShoppingSearch() } className="nav-link" to="/shopping-search/:id">Shopping
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={ () => this.handleAttractionSearch() } className="nav-link" to="/attraction-search/:id">Attractions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={ () => this.handleNightlifeSearch() } className="nav-link" to="/nightlife-search/:id">Nightlife
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={ () => this.handleSpaSearch() } className="nav-link" to="/spa-search/:id">
                Beauty & Spas
              </NavLink>
            </li>
          </ul>
        </nav>
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


// <nav className="nav-tabs navbar-light">
//   <ul className="nav nav-tabs">
//     <li className="nav-item">
//       <button onClick={ () => this.handleDetailsRoute() } className="nav-link" to="/trip-details">Trip Details</button>
//     </li>
//     <li className="nav-item">
//       <button onClick={ () => this.handleHotelSearch() } className="nav-link" to="/hotel-search">Hotels</button>
//     </li>
//     <li className="nav-item">
//       <button onClick={ () => this.handleRestaurantSearch() } className="nav-link" to="/restaurant-search">Restaurants</button>
//     </li>
//     <li className="nav-item">
//       <button onClick={ () => this.handleAESearch() } className="nav-link" to="/art-search">Arts & Entertainment</button>
//     </li>
//     <li className="nav-item">
//       <button onClick={ () => this.handleShoppingSearch() } className="nav-link" to="/shopping-search">Shopping</button>
//     </li>
//     <li className="nav-item">
//       <button onClick={ () => this.handleAttractionSearch() } className="nav-link" to="/attraction-search">Attractions</button>
//     </li>
//     <li className="nav-item">
//       <button onClick={ () => this.handleNightlifeSearch() } className="nav-link" to="/nightlife-search">Nightlife</button>
//     </li>
//     <li className="nav-item">
//       <button onClick={ () => this.handleSpaSearch() } className="nav-link" to="/spa-search">Beauty & Spas</button>
//     </li>
//   </ul>
// </nav>