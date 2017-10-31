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
            <button className="details-find-btn col-lg-4 col-lg-offset-4" onClick={ () => this.handleNightlifeSearch() } >Discover Nightlife</button>
          </div>
        )
      } else {

        const nightlives = this.props.currentTrip.nightlife.map( (nightlife, index) => {
          let stars = symbolsDisplay(nightlife.rating, <i className="fa fa-star"></i>, <i className="fa fa-star-half-o" aria-hidden="true"></i>)

          return(
            <div className="tripdetails-biz">
              <div className="row">
                <div className="col-md-4">
                  <div className="img-wrap">
                    <div className="img-overlay">
                      <span className="tripdetails-biz-rating">{stars}</span>
                    </div>
                    <img className="img-fluid" src={nightlife.image_url} alt="" />
                  </div>

                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="tripdetails-biz-name">{nightlife.name}</h4>

                    <p className="tripdetails-biz-address1">{nightlife.address1}</p>
                    <p className="tripdetails-biz-address2">{nightlife.city}, {nightlife.state} {nightlife.zip_code}</p>
                    <p className="">{nightlife.display_phone}</p>
                    <i className="fa fa-heart" onClick={ () => this.deleteNightlife(index) }></i>
                    <span className="tripdetails-biz-price">{nightlife.price}</span>

                  </div>
                </div>
              </div>
            </div>
          )
        })

      return (
        <div className="details-section col-lg-10 mb-4 mt-4">
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