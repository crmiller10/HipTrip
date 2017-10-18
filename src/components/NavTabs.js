import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavTabs extends Component {

  render(){
    return(
      <nav className="nav-tabs navbar-light">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink className="nav-link" to="/trip-details">Trip Details</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/hotel-search">Find Hotels</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavTabs;
