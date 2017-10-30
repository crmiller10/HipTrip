import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../images/logo.svg';

class Navbar extends Component {

  render(){
    return(
      <nav className="navbar navbar-expand-sm fixed-top navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo}  width="30" height="30" className="logo" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-stretch" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/trip-details/:id">Plan Trip</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="#">Account <i className="fa fa-angle-down"></i></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
