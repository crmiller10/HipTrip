import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';

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

  // handleAddItem() {
  //   if (this.state.destination !== "" && this.state.selectBudget !== "") {
  //     this.props.add(this.state.destination, this.state.selectBudget)
  //     this.setState({
  //       "destination": "",
  //       "selectBudget": ""
  //     })
  //   }
  // }

  handleAddItem() {
    // if both fields are filled out (validating the form)
    if (this.state.destination !== "" && this.state.selectBudget !== "") {
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
      }).then(
        function () {
          console.log('success!')
        }
      ).catch(
        function () {
          console.log('error')
        }
      )
    }
  }

  render(){
    return(
      <div className="row">
        <div className="col-lg-5">
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Destination" value={this.state.Destination}
            onChange={event => this.handleDestination(event)}/>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="form-group">
            <select className="form-control"
              onChange={event => this.handleSelectBudget(event)}>
              <option selected="" value="">Budget</option>
              <option value="1" >$</option>
              <option value="2" >$$</option>
              <option value="3" >$$$</option>
              <option value="4" >$$$$</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <button className="btn btn-primary w-50 mr-2" onClick={() => this.handleAddItem()}> Submit </button>
          <NavLink className="btn btn-success" to="/trip-details">Trip Details</NavLink>
        </div>
      </div>
    )
  }
}

export default FormInputs;
