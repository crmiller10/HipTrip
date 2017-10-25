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

    render() {

      if (this.props.currentTrip.spas === null || this.props.currentTrip.spas.length === 0) {
        return(
          <div>
            <h3>Beauty & Spas:</h3>
            <button onClick={ () => this.handleSpaSearch() } >Discover Beauty & Spas</button>
          </div>
        )
      } else {

        const spas = this.props.currentTrip.spas.map( (spa, index) => {
          return(
            <a href={spa.url}>
              <div>
                <img src={spa.image_url} alt="" />
                <p>{spa.price}</p>
                <p>{spa.rating}</p>
              </div>
              <div>
                <p>{spa.name}</p>
                <p>{spa.display_phone}</p>
                <p>{spa.address1}</p>
                <p>{spa.city}, {spa.state} {spa.zip_code}</p>
              </div>
            </a>
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

export default withRouter(connect(mapS2P, null)(SpaDetails));
