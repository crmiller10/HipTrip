/* COMPONENT TO DISPLAY ARTS & ENTERTAINMENT SEARCH RESULTS */

import React, { Component } from 'react';

import { connect } from 'react-redux';

import AE from './AE';
import SearchCard from './SearchCard';

class AEList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        businesses: [],
        businessType: 'art'
      }
    }

    componentDidMount() {
      console.log(this.props.currentTrip)
      fetch('https://hip-trip.herokuapp.com/search/art', {
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

      const arts = this.state.businesses.map((art, index) => {
        return(
          <SearchCard key={index}
          business={art} businessType={this.state.businessType}
          />
          );
        }
      );

      return (
        <section className="section">
          <div className="container">
            <div className="row">
              {arts}
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

export default connect(mapS2P, null)(AEList);
