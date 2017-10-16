import React, { Component } from 'react';

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
        <div>
          <h3>Guests:</h3>
          <div>
            <div>
              <input type="text" placeholder="0" onChange={ (kids) => this.updateKids(kids)}/>
              <p> children </p>
            </div>
            <div>
              <input type="text" placeholder={this.state.adultGuests} onChange={ (adults) => this.updateAdults(adults)}/>
              <p> adults </p>
            </div>
            <button onClick={ () => this.updateGuests() }>Submit</button>
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <h3>Guests:</h3>
          <div>
            <p>Children: <span>{this.state.childGuests}</span>, Adults: <span>{this.state.adultGuests}</span></p>
          </div>
          <button onClick={ () => this.editGuests() }>Edit</button>
        </div>
      )
    }
  }
}

export default TripGuests;
