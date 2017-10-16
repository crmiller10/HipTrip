import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import Modal from './Modal';

class Hotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
     // fetch(`https://polar-atoll-91152.herokuapp.com/lots/${this.props.lot}/${this.props.id}`, {
     //   method: 'POST',
     //   headers: {
     //     'Accept': 'application/json',
     //     'Content-Type': 'application/json'
     //   },
     //   body: JSON.stringify({
     //    "licensePlate": this.state.text
     //   }),
     // })//.then this.props.

    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
     let cardMargin = {
      marginBottom: "60px",
    }
    const hotel = this.props;

    return(
      <div className="col-md-6 col-lg-4">
        <div className="card" style={cardMargin}>
            <a href={hotel.url} className="">
            <div className="img">
              <img className="card-img-top img-fluid" src={hotel.image} alt="" />
              </div>
            </a>
          <div className="card-body">
            <p className="card-text price">{hotel.price}</p>
            <p className="card-text rating">{hotel.rating} Stars</p>
            <p className="card-text title">{hotel.title}</p>
            <p className="card-text phone">{hotel.display_phone}</p>
            <p className="card-text city">{hotel.city}</p>
            <p className="card-text state">{hotel.state}</p>
          </div>
          <div className="card-footer clearfix">
            <a href={hotel.url} className="btn btn-secondary btn-block">Visit Site</a>
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

export default Hotel;

