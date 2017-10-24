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
    fetch('https://hip-trip.herokuapp.com/hotel/save', {
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
      marginBottom: "30px",
    }
    return(
      <div className="col-md-6 col-lg-4">
        <div className="card" style={cardMargin}>
          <a href={hotel.url} className="">
            <div className="card-img-wrap">
              <img className="card-img-top img-fluid" src={hotel.image_url} alt="" />
              </div>
            </a>
          <div className="card-body">
            <p className="card-text">{hotel.price}</p>
            <p className="card-text">{hotel.rating} Stars</p>
            <p className="card-text">{hotel.name}</p>
            <p className="card-text">{hotel.display_phone}</p>
            <div>
              <p className="card-text">{hotel.location.address1}</p>
              <p className="card-text">{hotel.location.city}, {hotel.location.state} {hotel.location.zip_code}</p>
            </div>
          </div>
          <div className="card-footer clearfix">
            <a href={hotel.url} className="btn btn-secondary">Visit Site</a>
            <button className="btn btn-secondary" onClick={ () => this.handleHotelAdd() }>Add</button>
            <div>
              {/*<button className="btn btn-primary btn-cirlce btn-link btn-sm" onClick={this.toggleModal}>
                Modal
              </button>*/}

              <Modal show={this.state.isOpen}
                onClose={this.toggleModal}>
                Text
              </Modal>
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
