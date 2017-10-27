import React, {Component} from 'react';


import Modal from './Modal';

//import redux stuff
import { connect } from 'react-redux';
import { updateTrip } from '../actions';

class Hotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      hotel: {},
    };
  }

  handleHotelAdd() {
    this.setState({
      hotel: this.props.hotel,
    })

    // console.log(this.props.currentTrip)
    let hotel = this.props.hotel

    // put request to send hotel info to Chris
    fetch('https://hip-trip.herokuapp.com/save/hotel', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // yourinfo: 'your info goes here'
        trip: this.props.currentTrip,
        businessDetails: this.props.hotel,
      }),
    })
      .then( resp => resp.json())
      .then( resp => {
        console.log(resp)
        this.props.addHotel(resp)
      })
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    const hotel = this.props.hotel

     let cardMargin = {
      // marginBottom: "30px",
    }
    return(
      <div className="container">

      <div className="row">

      <div className="col-md-4 col-lg-4">
        <div className="card" style={cardMargin}>
          <a href={hotel.url}>
            <div className="card-img-wrap">
              <img className="card-img-top img-fluid" src={hotel.image_url} alt="" />
            </div>
          </a>
          <div className="card-body">
            <p className="price">{hotel.price}</p>
            <p className="rating">{hotel.rating} Stars</p>
            <p className="name">{hotel.name}</p>
            <p className="phone">{hotel.display_phone}</p>
            <div>
              <p className="address1">{hotel.location.address1}</p>
              <p className="address2">{hotel.location.city}, {hotel.location.state} {hotel.location.zip_code}</p>
            </div>
          </div>
          <div className="card-footer clearfix">
            <a href={hotel.url} className="btn btn-secondary btn-block">Visit Site</a>
            <button className="btn btn-secondary" onClick={ () => this.handleHotelAdd() }>Add</button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="post-module">
          <div className="thumbnail">
            <div className="date">

            </div>
            <img src={hotel.image_url} />
          </div>
         <div className="post-content">
           <h5 className="category">{hotel.price}</h5>
           <h1 className="title">{hotel.name}</h1>
           <h2 className="sub_title">The city that never sleeps.</h2>
           <p className="sub_title">The city that never sleeps.</p>
           <p className="description">{hotel.location.address1}</p>
           <p className="description">{hotel.location.city}, {hotel.location.state} {hotel.location.zip_code}</p>
           <div className="post-meta"><span className="timestamp"><i className="fa fa-clock-"></i>{hotel.display_phone}</span><span className="comments"><i className="fa fa-comments"></i><a href="#"> 39 comments</a></span></div>
         </div>
        </div>
      </div>


        </div>
      </div>
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

// do all of the API/updating stuff here
function mapD2P(dispatch) {
  return {
    addHotel: function (trip) {
      dispatch(updateTrip(trip))
    }
  }
}


export default connect(mapS2P, mapD2P)(Hotel);
