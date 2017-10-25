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
      <div className="col-md-6 col-lg-4">
        <div className="card" style={cardMargin}>
            <a href={restaurant.url} className="">
            <div className="card-img-wrap">
              <img className="card-img-top img-fluid" src={restaurant.image_url} alt="" />
              </div>
            </a>
          <div className="card-body">
            <p className="card-text">{restaurant.price}</p>
            <p className="card-text">{restaurant.rating} Stars</p>
            <p className="card-text">{restaurant.name}</p>
            <p className="card-text">{restaurant.display_phone}</p>
            <div>
              <p className="card-text">{restaurant.location.address1}</p>
              <p className="card-text">{restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}</p>
            </div>
          </div>
          <div className="card-footer clearfix">
            <a href={restaurant.url} className="btn btn-secondary btn-block">Visit Site</a>
            <button className="btn btn-secondary btn-block" onClick={ () => this.handleRestaurantAdd() }>Add</button>
            <div>
              <button className="btn btn-primary btn-cirlce btn-link btn-sm" onClick={this.toggleModal}>
                Modal
              </button>

              <Modal show={this.state.isOpen}
                onClose={this.toggleModal}>
                Text
              </Modal>
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
