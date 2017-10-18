import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';

//import store
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import from Router
import { BrowserRouter } from 'react-router-dom';
//import from Redux
import { Provider } from 'react-redux';
//import store
import {store} from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
