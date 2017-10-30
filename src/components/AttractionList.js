/* COMPONENT TO DISPLAY ATTRACTION SEARCH RESULTS */

import React, { Component } from 'react';

import { connect } from 'react-redux';

import Attraction from './Attraction';

class AttractionList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        businesses: []
      }
    }

    componentDidMount() {
      console.log(this.props.currentTrip)
      fetch('https://hip-trip.herokuapp.com/search/attraction', {
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

      const attractions = this.state.businesses.map((attraction, index) => {
        return(
          <Attraction key={index}
          attraction={attraction}
          />
          );
        }
      );

      return (
        <section className="section">
          <div className="container">
            <div className="row">
              {attractions}
            </div>
          </div>
        </section>
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

export default connect(mapS2P, null)(AttractionList);
