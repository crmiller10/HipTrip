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
      infoWindowOptions: '',
      businesses: []
    };
  }

// ============= Map Init ===========
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

      const hotels = responseData.businesses;
      const map = new window.google.maps.Map(document.querySelector('#map'), {
        zoom: 9,
        center: new window.google.maps.LatLng(hotels[0].coordinates.latitude, hotels[0].coordinates.longitude)
      });
      for (let i = 0; i < hotels.length ; i++) {
        var marker = new window.google.maps.Marker({
          position: {
            lat: hotels[i].coordinates.latitude,
            lng: hotels[i].coordinates.longitude,
          },
          map: map, // map object we created in initMap

        });
        marker.addListener('click', function() {
        var infowindow = new window.google.maps.InfoWindow({
          position: {
            lat: hotels[i].coordinates.latitude + .01,
            lng: hotels[i].coordinates.longitude,
          },
          content: `
            <img class="img-fluid" src=${hotels[i].image_url} alt="" height="42" width="42" />
            <p>${hotels[i].price}</p>
            <p>${hotels[i].rating} Stars </p>
            <h6>${hotels[i].name}</h6>
            <p>${hotels[i].display_phone}</p>
            <p>${hotels[i].location.address1}</p>
            <p>${hotels[i].location.city}, ${hotels[i].location.state}, ${hotels[i].location.zip_code}</p>
            <p><a href=${hotels[i].url}>Visit Site</a></p>
            `,
          map: map, // map object we created in initMap
        });

        });
      }
      this.setState({ map: map });
    })
    .catch((error) => {
      console.log("Error with Fetching : ", error);
    });
    // const map = new window.google.maps.Map(document.querySelector('#map'), {
    //   zoom: 11,
    //   center: new window.google.maps.LatLng(35.194, -80.849),
    // });

    // this.setState({ map: map });
  }


/*=============================================
=            Test Map Marker            =
=============================================*/

 // initMap() {
 //  var usRoadMapType = new window.google.maps.StyledMapType([
 //        {
 //          featureType: 'all',
 //          elementType: 'all',
 //          stylers: [
 //            {invert_lightness: 'true'},
 //            {hue: '#335158'},
 //            {saturation: 40},
 //            {lightness: 30},
 //            {gamma: 0.5}
 //          ]
 //        }
 //      ], {name: 'Dark Style'});
 //    var uluru = {lat: 42.316725, lng: -75.392093};
 //    var map = new window.google.maps.Map(document.getElementById('map'), {
 //      zoom: 10,
 //      center: uluru,
 //      // mapTypeControlOptions: {
 //      //   position: new window.google.maps.ControlPosition.TOP_LEFT,
 //      //   mapTypeIds: [new window.google.maps.MapTypeId.ROADMAP,
 //      //     new window.google.maps.MapTypeId.SATELLITE, new window.google.maps.MapTypeId.HYBRID,
 //      //     new window.google.maps.MapTypeId.TERRAIN, 'usroadatlas']
 //      // },
 //      // zoomControlOptions: {
 //      //     position: new window.google.maps.ControlPosition.LEFT_TOP
 //      // },
 //      // streetViewControlOptions: {
 //      //     position: new window.google.maps.ControlPosition.LEFT_TOP
 //      // }
 //    });
 //  // map.mapTypes.set('usroadatlas', usRoadMapType);
 //  // map.setMapTypeId('usroadatlas');
 //    var contentString = '<div class="map-info-box">'+
 //       '<div class="map-head">'+
 //       '<h3>Launch</h3></div>'+
 //       '<p class="map-address"><i class="fa fa-map-marker"></i> Lorem ipsum dolor sit amet <br><i class="fa fa-phone"></i> 800-8765-4321<br><span class="map-email"><i class="fa fa-envelope"></i> info@yoursite.com</span></p>'+
 //       '<p><a href="https://www.google.com/maps/place/8+Bridge+St,+Sidney,+NY+13838,+Birle%C5%9Fik+Devletler/@42.31647,-75.392079,19z/data=!3m1!4b1!4m5!1m2!2m1!1s60+MAIN+ST.+SIDNEY,+NY+13838+ABD!3m1!1s0x89dba3d449a51193:0x4e86a4772df5fa8f" target="_blank">Open on Google Maps</a></p></div>';

 //    var infowindow = new window.google.maps.InfoWindow({
 //      content: contentString
 //    });
 //    var image = 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/48/map-marker-icon.png';
 //    var marker = new window.google.maps.Marker({
 //      position: uluru,
 //      map: map,
 //      icon: image,
 //      title: 'Uluru (Ayers Rock)'
 //    });
 //    marker.addListener('click', function() {
 //      infowindow.open(map, marker);
 //    });
 //     marker.addListener('click', function() {
 //      map.setZoom(14);
 //      map.setCenter(marker.getPosition());
 //    });
 //  }
  /*=====  End of Test Map Marker  ======*/


  // event.addDomListener(window, "load", initMap);
 //  // window.onorientationchange = function(){window.location.reload();}

  /* Wait until the component mounts, otherwise #map won't exist in the DOM yet */
  componentDidMount() {
    this.initMap();
  }

  render() {
    const destination = this.props.currentTrip.destination;
    console.log("Destination:", destination);

    // const hotels = this.state.businesses;
    // console.log("MapHotels", this.state.businesses);



    return (
      <div className="map pb-4">
        {/* Display our map */}
        <div id="map">

        </div>
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
