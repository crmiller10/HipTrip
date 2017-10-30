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

    deleteArt(id) {
      console.log(id);

      fetch('https://hip-trip.herokuapp.com/arts/' + id, {
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

      if (this.props.currentTrip.arts === null || this.props.currentTrip.arts.length === 0) {
        return(
          <div>
            <h3>Arts & Entertainment:</h3>
            <button className="btn btn-info" onClick={ () => this.handleArtSearch() } >Discover Arts & Entertainment</button>
          </div>
        )
      } else {

        const arts = this.props.currentTrip.arts.map( (art, index) => {
          return(
            <div>
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
                <button className="btn btn-info" onClick={ () => this.deleteArt(index) }>Delete</button>
              </div>
            </div>
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

// do all of the API/updating stuff here
function mapD2P(dispatch) {
  return {
    // need to do the get request here
    fixTrip: function (trip) {
      dispatch(updateTrip(trip))
    }
  }
}

export default withRouter(connect(mapS2P, mapD2P)(AEDetails));
