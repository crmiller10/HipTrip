/* COMPONENT TO DISPLAY INDIVIDUAL RESTAURANT RESULT */

import React, {Component} from 'react';
// import Map from "./Map";
import Modal from './Modal';

//import redux stuff
import { connect } from 'react-redux';
import { updateTrip } from '../actions';

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      restaurant: {},
    };
  }

  handleRestaurantAdd() {
    this.setState({
      restaurant: this.props.restaurant,
    })

    // console.log(this.props.currentTrip)
    let restaurant = this.props.restaurant

    // put request to send hotel info to Chris
    fetch('https://hip-trip.herokuapp.com/save/restaurant', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // yourinfo: 'your info goes here'
        trip: this.props.currentTrip,
        businessDetails: this.props.restaurant,
      }),
    })
      .then( resp => resp.json())
      .then( resp => {
        console.log(resp)
        this.props.addRestaurant(resp)
      })
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    const restaurant = this.props.restaurant

     let cardMargin = {
      marginBottom: "30px",
    }
    return(
      <div className="col-md-4 col-lg-4">
        <div className="card" style={cardMargin}>
          <div className="card-img-wrap">
            <div className="card-img-overlay">
              <p className="badge badge-bottom-left card-text price">{restaurant.price}</p>
              <p className="badge badge-bottom-right card-text rating">{restaurant.rating} Stars</p>
            </div>
            <a href={restaurant.url}>
              <img className="card-img-top img-fluid" src={restaurant.image_url} alt="" />
            </a>
          </div>
          <div className="card-body">
            <p className="card-text name">{restaurant.name}</p>
            <div>
              <p className="card-text address1">
                {restaurant.location.address1},
              </p>
              <p className="card-text address2">
                {restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}</p>
              <p className="card-text display_phone">{restaurant.display_phone}</p>
            </div>
          </div>
          <div className="card-footer clearfix">
            <a href={restaurant.url} className="btn btn-link">Visit Site</a>
            <button className="btn btn-info" onClick={ () => this.handleRestaurantAdd() }>Add</button>
            <div>
            </div>
          </div>
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

// do all of the API/updating stuff here
function mapD2P(dispatch) {
  return {
    addRestaurant: function (trip) {
      dispatch(updateTrip(trip))
    }
  }
}


export default connect(mapS2P, mapD2P)(Restaurant);


