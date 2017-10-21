import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

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
      .then( resp => resp.json())
      .then( resp => {
        console.log(resp)
        this.props.fixTrip(resp)
      })
  }

  // function to edit the dates
  editDates() {
    this.setState({
      edit: true,
    })
  }

  render() {

    // if both dates aren't set, render the form to set dates
    // if the form has not been submitted yet, keep the form visible
    // if the form is being edited, keep the form visible
    // if (this.state.checkInDate === null || this.state.checkOutDate === null || this.state.datesSubmitted === false) {
    if (this.state.edit === true || this.props.currentTrip.tripStartDate === null || this.props.currentTrip.tripEndDate === null) {
      return(
        <div className="mb-4">
          <h4>Dates:</h4>
          <div className='row'>
            <div className='col-md-4'>
              <div className="form-group">
                <label>Check In:</label>
                <DatePicker onChange={(date) => this.updateCheckIn(date)} value={this.state.checkInDate}/>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="form-group">
                <label>Check Out:</label>
                <DatePicker onChange={(date) => this.updateCheckOut(date)} value={this.state.checkOutDate}/>
              </div>
            </div>
            <div className='col-md-2 d-flex'>
              <button className="btn btn-info align-self-end" onClick={() => this.updateTripDates()}>Submit</button>
            </div>
          </div>
        </div>
      )
  // else render the dates of the trip
} else {
    const start = Date.parse(this.props.currentTrip.tripStartDate)
    const end = Date.parse(this.props.currentTrip.tripEndDate)

      // if (this.state.checkInDate < this.state.checkOutDate) {
      if (start < end) {

        let checkIn = this.props.currentTrip.tripStartDate.split(' ', 4).join(' ');
        let checkOut = this.props.currentTrip.tripEndDate.split(' ', 4).join(' ');

        return(
          <div className="div">
          <h4>Dates:</h4>
          <div className="">
            <p>Check In: <span>{checkIn}</span> <br></br> Check Out: <span>{checkOut}</span></p>
            <button className="btn btn-info align-self-end" onClick={() => this.editDates()}>Edit</button>

        </div>
        </div>
        )
      } else {
        return(
        <div className="mb-4">
          <h4>Dates</h4>
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> Check Out Date must come after Check In Date
          </div>
            <div className='row'>
              <div className='col-md-5'>
                <label for="exampleInputEmail1">Check In</label>
                <DatePicker onChange={(date) => this.updateCheckIn(date)} value={this.state.checkInDate}/>
              </div>
              <div className='col-md-5'>
                <label htmlFor="">Check Out</label>
                <DatePicker onChange={(date) => this.updateCheckOut(date)} value={this.state.checkOutDate}/>
              </div>

            <div className="col-md-2 d-flex">
              <button className='btn btn-info align-self-end' onClick={() => this.updateTripDates()}>Submit</button>
            </div>
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
  return {
    // need to do the get request here
    fixTrip: function (trip) {
          dispatch(updateTrip(trip))
    }
  }
  // thinking I need to update redux with the new info here??
}

export default connect(mapS2P, mapD2P)(TripDates);

// export default TripDates;
