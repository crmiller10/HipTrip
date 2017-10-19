import React, {Component} from 'react';
import Modal from './Modal';

class Card extends Component {
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
      // marginBottom: "30px",
    }
    const hotel = this.props;
    return(
      <div className="col-md-6 col-lg-4">
        <div className="card" style={cardMargin}>
            <a href={hotel.url} className="">
            <div className="card-img-wrap">
              <img className="card-img-top img-fluid" src={hotel.image} alt="" />
              </div>
            </a>
          <div className="card-body">
            <p className="card-text price">{hotel.price}</p>
            <p className="card-text rating">{hotel.rating} Stars</p>
            <p className="card-text title">{hotel.title}</p>
            <p className="card-text phone">{hotel.display_phone}</p>
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
    )
  }
}
export default Card;

// class Card extends Component {

//   render(){
//     return(
//       <div className="col-md-6 col-lg-4">
//       <div className="post-module mdl-shadow--4dp">
//         <div className="thumbnail">
//           <div className="date">
//             <div className="day">27</div>
//             <div className="month">Mar</div>
//           </div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
//         </div>
//         <div className="post-content">
//           <div className="category">Photos</div>
//           <h1 className="title">City Lights in New York</h1>
//           <h2 className="sub_title">The city that never sleeps.</h2>
//           <p className="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
//           <div className="post-meta"><span className="timestamp"><i className="fa fa-clock-">o</i> 6 mins ago</span><span className="comments"><i className="fa fa-comments"></i><a href="#"> 39 comments</a></span></div>
//         </div>
//       </div>
//       </div>
//    )
//  }
// }

// export default Card;