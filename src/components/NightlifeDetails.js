/* COMPONENT TO VIEW ARTS & ENTERTAINMENT OPTIONS THAT HAVE BEEN FAVORITED */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

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
          <div>
            <h3>Nightlife:</h3>
            <button onClick={ () => this.handleNightlifeSearch() } >Discover Nightlife</button>
          </div>
        )
      } else {

        const nightlives = this.props.currentTrip.nightlife.map( (nightlife, index) => {
          return(
            <div>
              <div>
                <img src={nightlife.image_url} alt="" />
                <p>{nightlife.price}</p>
                <p>{nightlife.rating}</p>
              </div>
              <div>
                <p>{nightlife.name}</p>
                <p>{nightlife.display_phone}</p>
                <p>{nightlife.address1}</p>
                <p>{nightlife.city}, {nightlife.state} {nightlife.zip_code}</p>
                <button onClick={ () => this.deleteNightlife(index) }>Delete</button>
              </div>
            </div>
          )
        })

      return (
        <div>
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
