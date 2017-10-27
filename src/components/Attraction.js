/* COMPONENT TO DISPLAY INDIVIDUAL ATTRACTION RESULT */

import React, { Component } from 'react';

import Modal from './Modal';

//import redux stuff
import { connect } from 'react-redux';
import { updateTrip } from '../actions';

class Attraction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      attraction: {},
    };
  }

  handleAttractionAdd() {
    this.setState({
      attraction: this.props.attraction,
    })

    // console.log(this.props.currentTrip)
    let art = this.props.attraction

    // put request to send hotel info to Chris
    fetch('https://hip-trip.herokuapp.com/save/attraction', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // yourinfo: 'your info goes here'
        trip: this.props.currentTrip,
        businessDetails: this.props.attraction,
      }),
    })
      .then( resp => resp.json())
      .then( resp => {
        console.log(resp)
        this.props.addAttraction(resp)
      })
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    const attraction = this.props.attraction

     let cardMargin = {
      marginBottom: "30px",
    }
    return(
      <div className="col-md-6 col-lg-4">
        <div className="card" style={cardMargin}>
            <a href={attraction.url} className="">
            <div className="card-img-wrap">
              <img className="card-img-top img-fluid" src={attraction.image_url} alt="" />
              </div>
            </a>
          <div className="card-body">
            <p className="card-text">{attraction.price}</p>
            <p className="card-text">{attraction.rating} Stars</p>
            <p className="card-text">{attraction.name}</p>
            <p className="card-text">{attraction.display_phone}</p>
            <div>
              <p className="card-text">{attraction.location.address1}</p>
              <p className="card-text">{attraction.location.city}, {attraction.location.state} {attraction.location.zip_code}</p>
            </div>
          </div>
          <div className="card-footer clearfix">
            <a href={attraction.url} className="btn btn-secondary btn-block">Visit Site</a>
            <button className="btn btn-secondary btn-block" onClick={ () => this.handleAttractionAdd() }>Add</button>
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
    addAttraction: function (trip) {
      dispatch(updateTrip(trip))
    }
  }
}


export default connect(mapS2P, mapD2P)(Attraction);
