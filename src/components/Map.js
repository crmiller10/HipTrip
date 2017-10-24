import React, { Component } from 'react';

//import redux stuff
import { connect } from 'react-redux';
import { createTrip, updateTrip, addPlace } from '../actions';

import Hotel from './Hotel'
import HotelList from './HotelList'


class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      destination: '',
      map: null,
      hotels: [],
      businesses: []
    };
  }

  initMap() {
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

      const hotels = this.state.businesses;
      console.log(this.state.businesses);
      const map = new window.google.maps.Map(document.querySelector('#map'), {
        zoom: 12,
        center: new window.google.maps.LatLng(hotels[0].coordinates.latitude, hotels[0].coordinates.longitude)
      });
      this.setState({ map: map });
    })
    .catch((error) => {
      console.log("Error with Fetching : ", error);
    });


    const map = new window.google.maps.Map(document.querySelector('#map'), {
      zoom: 11,
      center: new window.google.maps.LatLng(35.194, -80.849)
    });
    this.setState({ map: map });
  }
  /* Wait until the component mounts, otherwise #map won't exist in the DOM yet */
  componentDidMount() {
    this.initMap();
  }

  render() {
    const destination = this.props.currentTrip.destination;
    console.log("Destination:", destination);

    const hotels = this.state.businesses;
    console.log("MapHotels", this.state.businesses);

    // Loop over all of the places in the store, adding a marker for each.
    for (let i = 0; i < hotels.length ; i++) {
      new window.google.maps.Marker({
        position: {
          lat: hotels[i].coordinates.latitude,
          lng: hotels[i].coordinates.longitude,
        },
        map: this.state.map,      // map object we created in initMap
      });
    }
    return (
      <div className="map pb-4">
        {/* Display our map */}
        <div id="map"></div>
        {/* <header className="px-3 pt-3 form-group row">
          <input type="text" className="form-control col-sm-3" value={this.state.text} onChange={ev => this.handleText(ev)} placeholder="I've been..." />
          <button className="btn btn-info col-sm-1 ml-2" onClick={() => this.handleSubmit()}>Add</button>
          <h5>{destination}</h5>
          <hr/>
        </header> */}
      </div>
    );
  }
}

function mapS2P(state) {
  return {
    currentTrip: state.currentTrip,
    trips: state.trips,
    places: state.places, // so we can render all of the markers
  };
}

function mapD2P(dispatch) {
  return {
    newPlace: function (place) {
      dispatch(addPlace(place));  // import addPlace @ the top
    }
  };
}

export default connect(mapS2P, mapD2P)(Map); // import connect from react-redux






// const destination = this.props.currentTrip.destination;
// console.log("Destination:", destination);
// // const places = this.props.places;
// // const hotels = this.props.hotels;
// // console.log(this.props.hotel);
// const hotels = this.state.businesses;
// console.log("MapHotels", this.state.businesses);
// // const hotels = this.state.businesses;
// // console.log({hotels});
