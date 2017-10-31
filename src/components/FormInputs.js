import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip } from '../actions';

class FormInputs extends Component{
  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      selectBudget: null,
    }
  }
  handleDestination(event) {
    this.setState({
      destination: event.target.value,
    });
  }

  handleSelectBudget(event) {
    this.setState({
      selectBudget: parseInt(event.target.value),
    }, () => console.log(typeof(this.state.selectBudget)));
  }

  // Handle Submit
  handleAddItem() {
    // if both fields are filled out (validating the form)
    if (this.state.destination !== "" && this.state.selectBudget !== null) {
      // give that info to Chris
      fetch('https://hip-trip.herokuapp.com/newTrip', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            budget: this.state.selectBudget,
            destination: this.state.destination
        }),
      })
        // turn the response into JSON so we can get the ID
        .then( resp => resp.json())
        // fetch the response by the ID
        // return the entire trip object
        .then( resp => {
          // console.log(resp.id)
          this.props.newTrip(resp)
          this.props.history.push('/trip-details/' + resp.id)
          // fetch('https://hip-trip.herokuapp.com/trip/details/' + resp.id)
          // .then( resp => resp.json())
          // .then( resp => console.log(resp))
      })
    }
  }

  render(){
    return(
      <div className="row justify-content-lg-center">
        <div className="col-md-12 col-lg-12 panel home-wrapper">

        <div className="row justify-content-sm-center home-form-container">
          <div className="col-md-6 col-lg-6">
            <div className="form-group has-feedback has-feedback-left">
              <input type="text" className="form-control home-form" placeholder="Destination" value={this.state.Destination}
              onChange={event => this.handleDestination(event)}></input>
              <div className="form-control-feedback">
                <i className="ion-search"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
            <div className="form-group">
              <select className="form-control home-form" onChange={event => this.handleSelectBudget(event)}>
                <option value="" disabled selected>Select Budget</option>
                <option value="1" >$</option>
                <option value="2" >$$</option>
                <option value="3" >$$$</option>
                <option value="4" >$$$$</option>
              </select>
            </div>
          </div>

          <div className="col-md-2 col-lg-2">
            <button className="btn btn-success w-100 home-form-btn" onClick={() => this.handleAddItem()} to="/trip-details">Search</button>
          </div>

        </div>
        </div>

      </div>
    )
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

    newTrip: function (trip) {
          dispatch(createTrip(trip))
    }
  }
}

export default withRouter(connect(mapS2P, mapD2P)(FormInputs));
