/* COMPONENT TO DISPLAY RESTAURANT SEARCH RESULTS */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchCard from './SearchCard';

class HotelList extends Component {

  constructor(props) {
      super(props);
      this.state = {
        businesses: [],
        businessType: 'hotel',
      }
    }

    componentDidMount() {
      console.log(this.props.currentTrip)
      fetch('https://hip-trip.herokuapp.com/search/hotel', {
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

      const hotels = this.state.businesses.map((hotel, index) => {
        return(
          <SearchCard key={index}
          business={hotel} businessType={this.state.businessType}
          />
          );
        }
      );

      console.log("hotels", this.state.businesses);
      return (
        <section className="section">
          <div className="container">
            <div className="row">
              {hotels}
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

  export default connect(mapS2P, null)(HotelList);
