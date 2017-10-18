import React, { Component } from 'react';
import { connect } from 'react-redux';

// import hotels from '../data/hotels.js'
// import Hotel from './Hotel';
import Modal from './Modal';



/*=============================================
=            Hotel List            =
=============================================*/
// class HotelList extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       hotels: hotels,
//     }
//   }
//   render(){
//     const hotels = this.state.hotels.map((hotel, index) =>
//       <Hotel key={index}
//       id={hotel.id}
//       title={hotel.name}
//       rating={hotel.rating}
//       price={hotel.price}
//       image={hotel.image_url}
//       url={hotel.url}
//       display_phone={hotel.display_phone}
//       />);

//     console.log(hotels);

//     return(
//       <div className="container-fluid">
//         <h1>Hotels</h1>
//         <div className="row">
//           {hotels}
//         </div>
//       </div>
//     );
//   }
// }


class Hotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
     let cardMargin = {
      marginBottom: "60px",
    }
    return(
      <div className="col-md-6 col-lg-4">
        <div className="card" style={cardMargin}>
            <a href={this.props.url} className="">
            <div className="img">
              <img className="card-img-top img-fluid" src={this.props.image} alt="" />
              </div>
            </a>
          <div className="card-body">
            <p className="card-text price">{this.props.price}</p>
            <p className="card-text rating">{this.props.rating} Stars</p>
            <p className="card-text title">{this.props.title}</p>
            <p className="card-text phone">{this.props.display_phone}</p>
          </div>
          <div className="card-footer clearfix">
            <a href={this.props.url} className="btn btn-secondary btn-block">Visit Site</a>
            <button className="btn btn-secondary btn-block">Add</button>
            <div>
              <button className="btn btn-link btn-block" onClick={this.toggleModal}>
                Open the modal
              </button>

              <Modal show={this.state.isOpen}
                onClose={this.toggleModal}>
                Here's some content for the modal
              </Modal>
            </div>
          </div>

        </div>
      </div>
    );
  }
}


/*----------  Subsection comment block  ----------*/
class HotelListTest extends Component {
  constructor(props) {
      super(props);
      this.state = {
        businesses: []
      }
    }

    componentDidMount() {
      console.log(this.props.currentTrip)
      fetch('https://hip-trip.herokuapp.com/search/hotels/', {
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
      // fetch('https://hip-trip.herokuapp.com/search/hotel')
      .then(results => results.json())
      .then(responseData => {
        this.setState({
          businesses: responseData.businesses
      });
      })
      .catch((error) => {
        console.log("Error with Fetching : ", error);
      });
    }


    render() {

    //   console.log(this.state.businesses)
    //   return('<div></div>')
    // }
      const hotels = this.state.businesses.map((hotel, index) => {

        return(
          <Hotel key={index}
          id={hotel.id}
          title={hotel.name}
          rating={hotel.rating}
          price={hotel.price}
          image={hotel.image_url}
          url={hotel.url}
          display_phone={hotel.display_phone}
          />
          );
        }
      );

      console.log("hotel", this.state.businesses);
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

export default connect(mapS2P, null)(HotelListTest);



