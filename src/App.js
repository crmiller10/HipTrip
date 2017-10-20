import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// Views
import Home from './components/views/Home';
import HotelSearch from './components/views/HotelSearch';
import TripDetails from './components/views/TripDetails';

// Components
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      places: "",
      trip: {
        destination: "",
        budget: "",
        dates: {
          checkIn: "",
          checkOut: "",
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route path="/hotel-search/:id" component={HotelSearch} />
            <Route path="/trip-details/:id" component={TripDetails} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

/*
withRouter() is a function included in react-router-dom that AFAIK passes the
'history' prop into the component. If you don't use the withRouter function then
this.props.history will be undefined.
*/
export default withRouter(App);
