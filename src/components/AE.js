/* COMPONENT TO DISPLAY INDIVIDUAL ARTS & ENTERTAINMENT RESULT */

import React, { Component } from 'react';

//import redux stuff
import { connect } from 'react-redux';
import { updateTrip } from '../actions';

class AE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      art: {},
    };
  }

  handleArtAdd() {
    this.setState({
      art: this.props.art,
    })

    // console.log(this.props.currentTrip)
    let art = this.props.art;

    // put request to send hotel info to Chris
    fetch('https://hip-trip.herokuapp.com/save/art', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // yourinfo: 'your info goes here'
        trip: this.props.currentTrip,
        businessDetails: this.props.art,
      }),
    })
      .then( resp => resp.json())
      .then( resp => {
        console.log(resp)
        this.props.addArt(resp)
      })
  }

  // toggleModal = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  render(){
    const art = this.props.art;

     let cardMargin = {
      marginBottom: "30px",
    }
    return(
      <div className="col-md-6 col-lg-4">
        <div className="card" style={cardMargin}>
            <a href={art.url} className="">
            <div className="card-img-wrap">
              <img className="card-img-top img-fluid" src={art.image_url} alt="" />
              </div>
            </a>
          <div className="card-body">
            <p className="card-text">{art.price}</p>
            <p className="card-text">{art.rating} Stars</p>
            <p className="card-text">{art.name}</p>
            <p className="card-text">{art.display_phone}</p>
            <div>
              <p className="card-text">{art.location.address1}</p>
              <p className="card-text">{art.location.city}, {art.location.state} {art.location.zip_code}</p>
            </div>
          </div>
          <div className="card-footer clearfix">
            <a href={art.url} className="btn btn-secondary btn-block">Visit Site</a>
            <button className="btn btn-secondary btn-block" onClick={ () => this.handleArtAdd() }>Add</button>
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
    addArt: function (trip) {
      dispatch(updateTrip(trip))
    }
  }
}


export default connect(mapS2P, mapD2P)(AE);
