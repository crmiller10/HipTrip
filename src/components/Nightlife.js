/* COMPONENT TO DISPLAY INDIVIDUAL NIGHTLIFE RESULT */

import React, { Component } from 'react';

//import redux stuff
import { connect } from 'react-redux';
import { updateTrip } from '../actions';

class Nightlife extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      nightlife: {},
    };
  }

  handleNightlifeAdd() {
    this.setState({
      nightlife: this.props.nightlife,
    })

    // console.log(this.props.currentTrip)
    let nightlife = this.props.nightlife;

    // put request to send hotel info to Chris
    fetch('https://hip-trip.herokuapp.com/save/nightlife', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // yourinfo: 'your info goes here'
        trip: this.props.currentTrip,
        businessDetails: this.props.nightlife,
      }),
    })
      .then( resp => resp.json())
      .then( resp => {
        console.log(resp)
        this.props.addNightlife(resp)
      })
  }

  // toggleModal = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  render(){
    const nightlife = this.props.nightlife

     let cardMargin = {
      marginBottom: "30px",
    }
    return(
      <div className="col-md-6 col-lg-4">
        <div className="card" style={cardMargin}>
            <a href={nightlife.url} className="">
            <div className="card-img-wrap">
              <img className="card-img-top img-fluid" src={nightlife.image_url} alt="" />
              </div>
            </a>
          <div className="card-body">
            <p className="card-text">{nightlife.price}</p>
            <p className="card-text">{nightlife.rating} Stars</p>
            <p className="card-text">{nightlife.name}</p>
            <p className="card-text">{nightlife.display_phone}</p>
            <div>
              <p className="card-text">{nightlife.location.address1}</p>
              <p className="card-text">{nightlife.location.city}, {nightlife.location.state} {nightlife.location.zip_code}</p>
            </div>
          </div>
          <div className="card-footer clearfix">
            <a href={nightlife.url} className="btn btn-secondary btn-block">Visit Site</a>
            <button className="btn btn-secondary btn-block" onClick={ () => this.handleNightlifeAdd() }>Add</button>
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
    addNightlife: function (trip) {
      dispatch(updateTrip(trip))
    }
  }
}


export default connect(mapS2P, mapD2P)(Nightlife);
