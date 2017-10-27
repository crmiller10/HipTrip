/* COMPONENT TO VIEW ARTS & ENTERTAINMENT OPTIONS THAT HAVE BEEN FAVORITED */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

class AEDetails extends Component {

  // get request to bring in the trip id
  handleArtSearch() {
    console.log(this.props.currentTrip)

    let id = this.props.currentTrip.id;

    fetch('https://hip-trip.herokuapp.com/trip/details/' + id)
      .then( resp => resp.json())
      .then( resp => this.props.history.push('/art-search/' + resp.id) )
    }

    render() {

      if (this.props.currentTrip.arts === null || this.props.currentTrip.arts.length === 0) {
        return(
          <div>
            <h3>Arts & Entertainment:</h3>
            <button onClick={ () => this.handleArtSearch() } >Discover Arts & Entertainment</button>
          </div>
        )
      } else {

        const arts = this.props.currentTrip.arts.map( (art, index) => {
          return(
            <a href={art.url}>
              <div>
                <img src={art.image_url} alt="" />
                <p>{art.price}</p>
                <p>{art.rating}</p>
              </div>
              <div>
                <p>{art.name}</p>
                <p>{art.display_phone}</p>
                <p>{art.address1}</p>
                <p>{art.city}, {art.state} {art.zip_code}</p>
              </div>
            </a>
          )
        })

      return (
        <div>
          <h3>Arts & Entertainment:</h3>
          {arts}
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

export default withRouter(connect(mapS2P, null)(AEDetails));
