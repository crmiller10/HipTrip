/* COMPONENT TO DISPLAY ARTS & ENTERTAINMENT SEARCH RESULTS */

import React, { Component } from 'react';

import { connect } from 'react-redux';

import Spa from './Spa';
import SearchCard from './SearchCard';

class SpaList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        businesses: [],
        businessType: 'spa',
      }
    }

    componentDidMount() {
      console.log(this.props.currentTrip)
      fetch('https://hip-trip.herokuapp.com/search/spa', {
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

      const spas = this.state.businesses.map((spa, index) => {
        return(
          <SearchCard key={index}
          business={spa} businessType={this.state.businessType}
          />
          );
        }
      );

      return (
        <div className="row">
          {spas}
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

export default connect(mapS2P, null)(SpaList);
