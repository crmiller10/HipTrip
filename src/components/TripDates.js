import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

//import redux stuff
import { connect } from 'react-redux';
<<<<<<< HEAD
import { createTrip, updateTrip } from '../actions';
=======
>>>>>>> e9c2a3f1d9a3c5c82dea8b3b254e26c43ac5d53b

class TripDates extends Component {
  constructor(props){
    super(props);

    this.state = {
      checkInDate: undefined,
      checkOutDate: undefined,
      edit: false,
    }
  }

  // function to update the checkInDate
  updateCheckIn(date){
    this.setState({
      checkInDate: date,
    }, () => console.log(this.state.checkInDate))
  }

  // function to update the checkOutDate
  updateCheckOut(date){
    this.setState({
      checkOutDate: date,
    }, () => console.log(this.state.checkOutDate))
  }

  // function to update the dates of the trip
  // will eventually be used to send to database
  updateTripDates() {
    this.setState({
      edit: false,
    })

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
        tripStartDate: this.state.checkInDate.toString(),
        tripEndDate: this.state.checkOutDate.toString(),
      }),
    })
<<<<<<< HEAD
      .then( resp => resp.json())
      .then( resp => {
        console.log(resp)
        this.props.fixTrip(resp)
      })
=======

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
        tripStartDate: this.state.checkInDate.toString(),
        tripEndDate: this.state.checkOutDate.toString(),
      }),
    })
      .then( () => console.log('success'))
      .catch( () => console.log('something went wrong'))
>>>>>>> e9c2a3f1d9a3c5c82dea8b3b254e26c43ac5d53b
  }

  // function to edit the dates
  editDates() {
    this.setState({
      edit: true,
    })
    console.log('BUTTON WAS CLICKED')
    console.log(this.state.edit)
  }

  render() {

    // if both dates aren't set, render the form to set dates
    // if the form has not been submitted yet, keep the form visible
    // if the form is being edited, keep the form visible
    // if (this.state.checkInDate === null || this.state.checkOutDate === null || this.state.datesSubmitted === false) {
    if (this.state.edit === true || this.props.currentTrip.tripStartDate === null || this.props.currentTrip.tripEndDate === null) {
      return(
        <div>
          <h3>Dates:</h3>
          <div>
            <div>
              <p>Check In:</p>
              <DatePicker onChange={(date) => this.updateCheckIn(date)} value={this.state.checkInDate}/>
            </div>
            <p> - </p>
            <div>
              <p>Check Out:</p>
              <DatePicker onChange={(date) => this.updateCheckOut(date)} value={this.state.checkOutDate}/>
            </div>
            <button onClick={() => this.updateTripDates()}>Submit</button>
          </div>
        </div>
      )
  // else render the dates of the trip
} else {
      // if (this.state.checkInDate < this.state.checkOutDate) {
      if (this.props.currentTrip.tripStartDate < this.props.currentTrip.tripEndDate) {
        // let checkIn = this.state.checkInDate.toString().split(' ', 4).join(' ');
        // let checkOut = this.state.checkOutDate.toString().split(' ', 4).join(' ');

        let checkIn = this.props.currentTrip.tripStartDate.split(' ', 4).join(' ');
        let checkOut = this.props.currentTrip.tripEndDate.split(' ', 4).join(' ');

        return(
          <div>
            <h3>Dates:</h3>
            <div>
              <p>Check In: <span>{checkIn}</span> - Check Out: <span>{checkOut}</span></p>
              <button onClick={() => this.editDates()}>Edit</button>
            </div>
          </div>
        )
      } else {
        return(
          <div>
          <h3>Dates:</h3>
          <div>
            <p>Error: Check Out Date must come after Check In Date</p>
            <div>
              <p>Check In:</p>
              <DatePicker onChange={(date) => this.updateCheckIn(date)} value={this.state.checkInDate}/>
            </div>
            <p> - </p>
            <div>
              <p>Check Out:</p>
              <DatePicker onChange={(date) => this.updateCheckOut(date)} value={this.state.checkOutDate}/>
            </div>
            <button onClick={() => this.updateTripDates()}>Submit</button>
          </div>
          </div>
        )
      }
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
<<<<<<< HEAD
  return {
    // need to do the get request here
    fixTrip: function (trip) {
          dispatch(updateTrip(trip))
    }
  }
=======
  // thinking I need to update redux with the new info here??
>>>>>>> e9c2a3f1d9a3c5c82dea8b3b254e26c43ac5d53b
}

export default connect(mapS2P, mapD2P)(TripDates);

// export default TripDates;
