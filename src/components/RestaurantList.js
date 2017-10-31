/* COMPONENT TO DISPLAY RESTAURANT SEARCH RESULTS */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Restaurant from './Restaurant';
import SearchCard from './SearchCard';

class RestaurantList extends Component {

  constructor(props) {
      super(props);
      this.state = {
        businesses: [],
        businessType: 'restaurant',
      }
    }

    componentDidMount() {
      console.log(this.props.currentTrip)
      fetch('https://hip-trip.herokuapp.com/search/restaurant', {
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

      const restaurants = this.state.businesses.map((restaurant, index) => {
        return(
          <SearchCard key={index}
          business={restaurant} businessType={this.state.businessType}
          />
          );
        }
      );

      console.log("restaurants", this.state.businesses);
      return (
        <section className="section">
          <div className="container">
            <div className="row">
              {restaurants}
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

  export default connect(mapS2P, null)(RestaurantList);
