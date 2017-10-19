import React, {Component} from 'react';
// import Map from "./Map";

import Modal from './Modal';

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
      marginBottom: "30px",
    }
    return(
      <div className="col-md-6 col-lg-4">
        <div className="card" style={cardMargin}>
            <a href={this.props.url} className="">
            <div className="card-img-wrap">
              <img className="card-img-top img-fluid" src={this.props.image} alt="" />
              </div>
            </a>
          <div className="card-body">
            <p className="card-text">{this.props.price}</p>
            <p className="card-text">{this.props.rating} Stars</p>
            <p className="card-text">{this.props.title}</p>
            <p className="card-text">{this.props.display_phone}</p>
            <p className="card-text">{this.props.category}</p>
          </div>
          <div className="card-footer clearfix">
            <a href={this.props.url} className="btn btn-secondary btn-block">Visit Site</a>
            <button className="btn btn-secondary btn-block">Add</button>
            <div>
              <button className="btn btn-primary btn-cirlce btn-link btn-sm" onClick={this.toggleModal}>
                Modal
              </button>

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
export default Hotel;
