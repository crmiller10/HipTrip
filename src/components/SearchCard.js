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
            <a href={business.url} className="">
            <div className="card-img-wrap">
              <img className="card-img-top img-fluid" src={business.image_url} alt="" />
              </div>
            </a>
          <div className="card-body">
            <p className="card-text">{business.price}</p>
            <p className="card-text">{stars}</p>
            <p className="card-text">{business.name}</p>
            <p className="card-text">{business.display_phone}</p>
            <div>
              <p className="card-text">{business.location.address1}</p>
              <p className="card-text">{business.location.city}, {business.location.state} {business.location.zip_code}</p>
            </div>
          </div>
          <div className="card-footer clearfix">
            <a href={business.url} className="btn btn-secondary btn-block">Visit Site</a>
            <button className="btn btn-info btn-block" onClick={ () => this.handleBusinessAdd() }>Add</button>
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
