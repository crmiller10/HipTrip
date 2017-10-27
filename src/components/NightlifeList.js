/* COMPONENT TO DISPLAY NIGHTLIFE SEARCH RESULTS */

import React, { Component } from 'react';

import { connect } from 'react-redux';

import Nightlife from './Nightlife';

class NightlifeList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        businesses: []
      }
    }

    componentDidMount() {
      console.log(this.props.currentTrip)
      fetch('https://hip-trip.herokuapp.com/search/nightlife', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            budget: this.props.currentTrip.budget,
            destination: this.props.currentTrip.destination
        }),
      })
      .then(results => results.json())
      .then(responseData => {
        this.setState({
          businesses: responseData.businesses ? responseData.businesses : [],
      });
      })
      .catch((error) => {
        console.log("Error with Fetching : ", error);
      });
    }


    render() {

      console.log(this.state.businesses)

      const nightlives = this.state.businesses.map((nightlife, index) => {
        return(
          <Nightlife key={index}
          nightlife={nightlife}
          />
          );
        }
      );

      return (
        <div className="row">
          {nightlives}
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

export default connect(mapS2P, null)(NightlifeList);
