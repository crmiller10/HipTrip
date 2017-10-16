import { createStore } from 'redux';

function reducer(){
}

export default createStore(reducer, {

  },

  // usage notes for devtools extension:
  // https://github.com/zalmoxisus/redux-devtools-extension#usage
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
