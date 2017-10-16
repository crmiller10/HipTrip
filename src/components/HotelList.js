import React, { Component } from 'react';
import hotels from '../data/hotels.js'
import Hotel from './Hotel';

class HotelList extends Component {
  constructor(props){
    super(props);
    this.state = {
      hotels: hotels
    }
  }

  render(){

    const hotels = this.state.hotels.map((hotel) =>
      <Hotel key={hotel.id}
      id={hotel.id}
      title={hotel.name}
      rating={hotel.rating}
      price={hotel.price}
      image={hotel.image_url}
      url={hotel.url}
      display_address={hotel.display_address}
      display_phone={hotel.display_phone}
      location={hotel.location}
      city={hotel.city}
      state={hotel.state}
    />);

    console.log(hotels);

    return(
      <div className="row">
        {hotels}
      </div>
    );
  }
}

export default HotelList;
