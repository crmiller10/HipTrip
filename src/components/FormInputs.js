import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';

class FormInputs extends Component{
  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      selectBudget: ""
    }
  }
  handleDestination(event) {
    this.setState({
      destination: event.target.value,
    });
  }

  handleSelectBudget(event) {
    this.setState({
      selectBudget: event.target.value,
    });
  }

  // Handle Submit
  handleAddItem() {
    this.props.add(this.state.destination, this.state.selectBudget)
    this.setState({
      "destination": '',
      "selectBudget": ''
    })
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
              <option>$</option>
              <option>$$</option>
              <option>$$$</option>
              <option>$$$$</option>
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
