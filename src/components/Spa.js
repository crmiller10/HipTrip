/* COMPONENT TO DISPLAY INDIVIDUAL SPA RESULT */

import React, { Component } from 'react';

//import redux stuff
import { connect } from 'react-redux';
import { updateTrip } from '../actions';

class Spa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      spa: {},
    };
  }

  handleSpaAdd() {
    this.setState({
      spa: this.props.spa,
    })

    // console.log(this.props.currentTrip)
    let spa = this.props.spa;

    // put request to send hotel info to Chris
    fetch('https://hip-trip.herokuapp.com/save/spa', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // yourinfo: 'your info goes here'
        trip: this.props.currentTrip,
        businessDetails: this.props.spa,
      }),
    })
      .then( resp => resp.json())
      .then( resp => {
        console.log(resp)
        this.props.addSpa(resp)
      })
  }

  // toggleModal = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  render(){
    const spa = this.props.spa;

     let cardMargin = {
      marginBottom: "30px",
    }
    return(
      <div className="col-md-6 col-lg-4">
        <div className="card" style={cardMargin}>
            <a href={spa.url} className="">
            <div className="card-img-wrap">
              <img className="card-img-top img-fluid" src={spa.image_url} alt="" />
              </div>
            </a>
          <div className="card-body">
            <p className="card-text">{spa.price}</p>
            <p className="card-text">{spa.rating} Stars</p>
            <p className="card-text">{spa.name}</p>
            <p className="card-text">{spa.display_phone}</p>
            <div>
              <p className="card-text">{spa.location.address1}</p>
              <p className="card-text">{spa.location.city}, {spa.location.state} {spa.location.zip_code}</p>
            </div>
          </div>
          <div className="card-footer clearfix">
            <a href={spa.url} className="btn btn-secondary btn-block">Visit Site</a>
            <button className="btn btn-secondary btn-block" onClick={ () => this.handleSpaAdd() }>Add</button>
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
    addSpa: function (trip) {
      dispatch(updateTrip(trip))
    }
  }
}


export default connect(mapS2P, mapD2P)(Spa);
