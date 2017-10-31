import React, {Component} from 'react';

//import redux stuff
import { connect } from 'react-redux';
import { updateTrip } from '../actions';

import { symbolsDisplay } from '../utilities';

class SearchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      business: {},
    };
  }

  handleBusinessAdd() {
    this.setState({
      business: this.props.business,
    })

    console.log(this.props.businessType)

    // console.log(this.props.currentTrip)
    let business = this.props.business;

    // put request to send hotel info to Chris
    fetch('https://hip-trip.herokuapp.com/save/' + this.props.businessType, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // yourinfo: 'your info goes here'
        trip: this.props.currentTrip,
        businessDetails: this.props.business,
      }),
    })
      .then( resp => resp.json())
      .then( resp => {
        console.log(resp)
        this.props.addBusiness(resp)
      })
  }

  render() {
    const business = this.props.business;

     let cardMargin = {
      marginBottom: "30px",
    }

    let stars = symbolsDisplay(business.rating, <i className="fa fa-star"></i>, <i className="fa fa-star-half-o" aria-hidden="true"></i>)

    return(
      <div className="col-md-6 col-lg-4">
        <div className="card" style={cardMargin}>
          <div className="card-img-wrap">
          <div className="card-img-overlay">
          <p className="badge badge-bottom-left card-text price">{business.price}</p>
          <p className="badge badge-bottom-right card-text rating">{stars}</p>
          </div>
            <a href={business.url} className="">
              <img className="card-img-top img-fluid" src={business.image_url} alt="" />
            </a>
          </div>
          <div className="card-body">
            <p className="card-text name">{business.name}</p>
            <div>
              <p className="card-text address1">{business.location.address1}</p>
              <p className="card-text address2">{business.location.city}, {business.location.state} {business.location.zip_code}</p>
            </div>
            <p className="card-text phone">{business.display_phone}</p>
          </div>
          <div className="card-footer clearfix">
            <a href={business.url} className="btn btn-secondary">Visit Site</a>
            <button className="btn btn-info" onClick={ () => this.handleBusinessAdd() }>Add</button>
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
    addBusiness: function (trip) {
      dispatch(updateTrip(trip))
    }
  }
}


export default connect(mapS2P, mapD2P)(SearchCard);
// export default SearchCard;
