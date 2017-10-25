import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hotel from './Hotel';

/*----------  Subsection comment block  ----------*/
class HotelList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        businesses: []
      }
      if(!this.state) {
        return null;
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

      // console.log(this.state.businesses)
    //   return('<div></div>')
    // }

    console.log(this.props.currentTrip);

      const hotels = this.state.businesses.map((hotel, index) => {
        return(
          <Hotel key={index} hotel={hotel}/>
          );
        }
      );

      console.log(this.props.currentTrip);
      console.log("hotels", this.state.businesses);
      return (

        <div className="row">
          {hotels}
        </div>
      );
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
