import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import HomeForm from '../HomeForm';
import Hotel from '../Hotel';
import Card from '../Card';

class Home extends Component {
  render() {
    return (
      <div className="container">

        <div className="tagline mb-4">
          <div className="col-sm-9 mx-auto text-center mb-4">
            <img src={logo}  width="100" height="100" className="logo-lg mx-auto" alt="logo" />
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem enim aperiam laborum eos hic a ipsam libero neque</p>
          </div>
        </div>
        <div>
          <HomeForm />
        </div>
      </div>
    );
  }
}

export default Home;

// <div className="col-md-12 col-lg-6">
// <div className="mdl-card mdl-shadow--2dp mdl-card--horizontal">
//   <div className="mdl-card__media">
//     <img src="http://placehold.it/150x200/DC143C/FFFFFF" alt="img"></img>
//   </div>
//     <div className="mdl-card__title">
//       <h2 className="mdl-card__title-text">Welcome</h2>
//     </div>
//     <div className="mdl-card__supporting-text">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       Mauris sagittis pellentesque lacus eleifend lacinia...
//     </div>
//     <div className="mdl-card__actions mdl-card--border">
//       <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple">Get Started</a>
//     </div>
//     <div className="mdl-card__menu">
//       <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple"><i className="material-icons">share</i></button>
//     </div>
// </div>
// </div>