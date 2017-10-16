import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

class TripDates extends Component {
  constructor(props){
    super(props);

    this.state = {
      checkInDate: null,
      checkOutDate: null,
      datesSubmitted: false,
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
      datesSubmitted: true,
    })
  }

  // function to edit the dates
  editDates() {
    this.setState({
      datesSubmitted: false,
    })
  }

  render() {

    // if both dates aren't set, render the form to set dates
    // if the form has not been submitted yet, keep the form visible
    // if the form is being edited, keep the form visible
    if (this.state.checkInDate === null || this.state.checkOutDate === null || this.state.datesSubmitted === false) {
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
      if (this.state.checkInDate < this.state.checkOutDate) {
        let checkIn = this.state.checkInDate.toString().split(' ', 4).join(' ');
        let checkOut = this.state.checkOutDate.toString().split(' ', 4).join(' ');

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

export default TripDates;
