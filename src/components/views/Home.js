import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import HomeForm from '../HomeForm';

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
        <div className="">
          <HomeForm />
        </div>
      </div>
    );
  }
}

export default Home;