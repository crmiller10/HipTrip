import React, { Component } from 'react';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

class TripGuests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      childGuests: 0,
      adultGuests: 1,
      guestsSubmitted: false,
    }
  }

  // function to update number of child guests
  updateKids(kids) {
    this.setState({
      childGuests: kids.target.value,
    }, () => console.log('there are ' + this.state.childGuests + ' kids on the trip'))
  }

  // function to update the number of adult guests
  updateAdults(adults) {
    this.setState({
      adultGuests: adults.target.value,
    }, () => console.log('there are ' + this.state.adultGuests + ' adults on the trip'))
  }

  // function to update the number of guests
  // will eventually be used to send to database
  updateGuests() {
    this.setState({
      guestsSubmitted: true,
    }, () => console.log('there are ' + this.state.childGuests + ' kids on the trip and ' + this.state.adultGuests + ' adults on the trip'))

    console.log(this.props.currentTrip.id)
    let id = this.props.currentTrip.id
    //need to do the put request here
    fetch('https://hip-trip.herokuapp.com/trip/details/' + id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // yourinfo: 'your info goes here'
        childCount: this.state.childGuests,
        adultCount: this.state.adultGuests,
      }),
    })
      .then( resp => resp.json())
      .then( resp => {
        console.log(resp)
        this.props.fixTrip(resp)
      })
  }

  // function to edit the number of guests
  editGuests() {
    this.setState({
      guestsSubmitted: false,
    })
  }

  render() {

    // if this.state.guestsSubmitted is false
    // meaning that no guest data has been submitted

    if (this.state.guestsSubmitted === false) {
      return(
        <div className="mt-4 mb-4">
          <h4>Guests:</h4>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <p>Adults</p>
                <input className="form-control" type="text" placeholder={this.state.adultGuests} onChange={ (adults) => this.updateAdults(adults)}/>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <p>Children</p>
                <input className="form-control" type="text" placeholder="0" onChange={ (kids) => this.updateKids(kids)}/>
              </div>
            </div>
            <div className="col-md-2 d-flex">
              <button className="btn btn-info align-self-end" onClick={ () => this.updateGuests() }>Submit</button>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="mt-4 mb-4">
          <h4>Guests:</h4>
          <div><p>Children: <span>{this.state.childGuests}</span>, Adults: <span>{this.state.adultGuests}</span></p></div>
          <button className="btn btn-info align-self-end" onClick={ () => this.editGuests() }>Edit</button>
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

export default connect(mapS2P, mapD2P)(TripGuests);

// export default TripGuests;
