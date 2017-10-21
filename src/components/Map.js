import React, { Component } from 'react';
import PropTypes from 'react';
import { connect } from 'react-redux';
import { addPlace } from '../actions';

/**
 * 1. Create a text box for people to type in places.
 * 2. Use Google geocoding API to get a latlong for that place.
 * 3. Add place to redux.
 * 4. Try to display place on map (this might be hard).
 */

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      map: null,
    };
  }

  handleText(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit() {
    // const url = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA7VNg5ejtL4czB1-p9-h96EYuaVa_5b-E&address=" + this.state.text;
    // const url = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCfAl1doEqzhrXLUsog78OiWvR9w4Pw09c&address=" + this.state.text;
    const url = "https://maps.googleapis.com/maps/api/geocode/AIzaSyBEq2exLrINEtrahRI7S8Y5E46D6asUQZ4&address=" + this.state.text;
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        // Thinking through the object we'll actually want to store.
        this.props.newPlace({
          name: this.state.text,
          lat: resp.results[0].geometry.location.lat,
          long: resp.results[0].geometry.location.lng,
        });
      });
  }

  initMap() {
     // 'google not defined' because it was looking for a variable called 'google' in this
     //    file, which doesn't exist. window.google means look at the global variables for the whole
     //    page for one called 'google', which does exist once the script loads.
    const map = new window.google.maps.Map(document.querySelector('#map'), {
      zoom: 12,
      center: {lat: 35.194, lng: -80.849}
    });

    this.setState({ map: map });
  }

  /* Wait until the component mounts, otherwise #map won't exist in the DOM yet */
  componentDidMount() {
    this.initMap();
  }

  render() {
    const places = this.props.places;

    // Loop over all of the places in the store, adding a marker for each.
    for (let i = 0; i < places.length; i++) {
      new window.google.maps.Marker({
        position: {               // coordinates from geocoding
          lat: places[i].lat,
          lng: places[i].long,
        },
        map: this.state.map,      // map object we created in initMap
      });
    }

    return (
      <div className="map">
        {/* Display our map */}
        <div id="map"></div>
        <header className="px-3 pt-3 form-group row">
          <input type="text" className="form-control col-sm-3" value={this.state.text} onChange={ev => this.handleText(ev)} placeholder="I've been..." />
          <button className="btn btn-info col-sm-1 ml-2" onClick={() => this.handleSubmit()}>Add</button>
        </header>
      </div>
    );
  }
}

function mapS2P(state) {
  return {
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
