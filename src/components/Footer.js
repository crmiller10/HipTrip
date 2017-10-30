import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {

  render(){
    return(
      <footer className="footer bg-dark-blue">
        <nav className="">
          <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    );
  }
}

export default Navbar;
