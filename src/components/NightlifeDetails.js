/* COMPONENT TO VIEW ARTS & ENTERTAINMENT OPTIONS THAT HAVE BEEN FAVORITED */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

import { symbolsDisplay } from '../utilities';

class NightlifeDetails extends Component {
  // get request to bring in the trip id
  handleNightlifeSearch() {
    console.log(this.props.currentTrip)

    let id = this.props.currentTrip.id;

    fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
      .then( resp => resp.json())
      .then( resp => this.props.history.push('/nightlife-search/' + resp.id) )
    }

    deleteNightlife(id) {
      console.log(id);

      fetch('https://hip-trip.herokuapp.com/nightlife/' + id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.props.currentTrip),
      })
        .then( resp => resp.json())
        .then( resp => {
          console.log('success')
          console.log(resp)
          this.props.fixTrip(resp)
        })
        .catch( () => console.log('error'))
    }

    render() {

      if (this.props.currentTrip.nightlife === null || this.props.currentTrip.nightlife.length === 0) {
        return(
          <div className="details-section col-lg-12 mb-4 mt-4">
            <h3>Nightlife:</h3>
            <button className="details-find-btn btn btn-info" onClick={ () => this.handleNightlifeSearch() } ><i className="fa fa-search" aria-hidden="true"></i> Discover Nightlife</button>
          </div>
        )
      } else {

        const nightlives = this.props.currentTrip.nightlife.map( (business, index) => {
          let stars = symbolsDisplay(business.rating, <i className="fa fa-star"></i>, <i className="fa fa-star-half-o" aria-hidden="true"></i>)

          return(
            <div className="tripdetails-biz">
              <img className="img-fluid col-sm-12 col-lg-4" src={business.image_url} alt="" />
              <div className="tripdetails-biz-info col-sm-12 col-lg-4">
                <p className="tripdetails-biz-name">{business.name}</p>
                <p className="tripdetails-biz-phone">{business.display_phone}</p>
                <p className="tripdetails-biz-address">{business.address1}</p>
                <p className="tripdetails-biz-address">{business.city}, {business.state} {business.zip_code}</p>
              </div>
              <div className="tripdetails-biz-info col-lg-2">
                <p className="tripdetails-biz-price">{business.price}</p>
                <div className="star-container">
                {stars}
                </div>
                <button className="delete-btn btn btn-info" onClick={ () => this.deleteHotel(index) }><i className="fa fa-trash"></i> Delete</button>
              </div>
            </div>
          )
        })

      return (
        <div className="details-section col-lg-12 mb-4 mt-4">
          <h3>Nightlife:</h3>
          {nightlives}
        </div>
      )
    }
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
    // need to do the get request here
    fixTrip: function (trip) {
      dispatch(updateTrip(trip))
    }
  }
}

export default withRouter(connect(mapS2P, mapD2P)(NightlifeDetails));


// <div className="div card tripdetails-biz">
//   <div className="row">
//     <div className="col-md-4">
//       <div className="img-wrap">
//         <img className="img-fluid" src={nightlife.image_url} alt="" />
//       </div>
//     </div>
//     <div className="col-md-8">
//       <div className="tripdetails-biz-info">
//         <p className="tripdetails-biz-name">{nightlife.name}</p>
//         <p className="tripdetails-biz-phone">{nightlife.display_phone}</p>
//         <p className="address1">{nightlife.address1}</p>
//         <p className="address2">{nightlife.city}, {nightlife.state} {nightlife.zip_code}</p>
//         <i className="fa fa-heart" onClick={ () => this.deleteNightlife(index) }></i>
//         <p className="tripdetails-biz-price">{nightlife.price}</p>
//         <p className="tripdetails-biz-rating">{stars}</p>
//       </div>
//     </div>
//   </div>
// </div>
