/* COMPONENT TO VIEW ARTS & ENTERTAINMENT OPTIONS THAT HAVE BEEN FAVORITED */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

class SpaDetails extends Component {
  // get request to bring in the trip id
  handleSpaSearch() {
    console.log(this.props.currentTrip)

    let id = this.props.currentTrip.id;

    fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
      .then( resp => resp.json())
      .then( resp => this.props.history.push('/spa-search/' + resp.id) )
    }

    deleteSpa(id) {
      console.log(id);

      fetch('https://hip-trip.herokuapp.com/spa/' + id, {
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

      if (this.props.currentTrip.spas === null || this.props.currentTrip.spas.length === 0) {
        return(
          <div>
            <h3>Beauty & Spas:</h3>
            <button className="btn btn-info" onClick={ () => this.handleSpaSearch() } >Discover Beauty & Spas</button>
          </div>
        )
      } else {

        const spas = this.props.currentTrip.spas.map( (spa, index) => {
          return(
            <div>
              <div>
                <img className="img-fluid" src={spa.image_url} alt="" />
                <p>{spa.price}</p>
                <p>{spa.rating}</p>
              </div>
              <div>
                <p>{spa.name}</p>
                <p>{spa.display_phone}</p>
                <p>{spa.address1}</p>
                <p>{spa.city}, {spa.state} {spa.zip_code}</p>
                <button className="btn btn-info" onClick={ () => this.deleteSpa(index) }>Delete</button>
              </div>
            </div>
          )
        })

      return (
        <div>
          <h3>Beauty & Spas:</h3>
          {spas}
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

export default withRouter(connect(mapS2P, mapD2P)(SpaDetails));
