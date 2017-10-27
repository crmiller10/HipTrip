/* COMPONENT TO DISPLAY INDIVIDUAL STORE RESULT */

import React, { Component } from 'react';

import Modal from './Modal';

//import redux stuff
import { connect } from 'react-redux';
import { updateTrip } from '../actions';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      shop: {},
    };
  }

  handleShopAdd() {
    this.setState({
      shop: this.props.shop,
    })

    // console.log(this.props.currentTrip)
    let shop = this.props.shop

    // put request to send hotel info to Chris
    fetch('https://hip-trip.herokuapp.com/save/shopping', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // yourinfo: 'your info goes here'
        trip: this.props.currentTrip,
        businessDetails: this.props.shop,
      }),
    })
      .then( resp => resp.json())
      .then( resp => {
        console.log(resp)
        this.props.addShop(resp)
      })
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    const shop = this.props.shop

     let cardMargin = {
      marginBottom: "30px",
    }
    return(
      <div className="col-md-6 col-lg-4">
        <div className="card" style={cardMargin}>
            <a href={shop.url} className="">
            <div className="card-img-wrap">
              <img className="card-img-top img-fluid" src={shop.image_url} alt="" />
              </div>
            </a>
          <div className="card-body">
            <p className="card-text">{shop.price}</p>
            <p className="card-text">{shop.rating} Stars</p>
            <p className="card-text">{shop.name}</p>
            <p className="card-text">{shop.display_phone}</p>
            <div>
              <p className="card-text">{shop.location.address1}</p>
              <p className="card-text">{shop.location.city}, {shop.location.state} {shop.location.zip_code}</p>
            </div>
          </div>
          <div className="card-footer clearfix">
            <a href={shop.url} className="btn btn-secondary btn-block">Visit Site</a>
            <button className="btn btn-secondary btn-block" onClick={ () => this.handleShopAdd() }>Add</button>
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
    addShop: function (trip) {
      dispatch(updateTrip(trip))
    }
  }
}


export default connect(mapS2P, mapD2P)(Store);
