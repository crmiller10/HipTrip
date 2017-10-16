import { createStore } from 'redux';

function reducer(state, action){

  return state;
}

export const store = createStore(reducer, {
  trip: {},
},

  // usage notes for devtools extension:
  // https://github.com/zalmoxisus/redux-devtools-extension#usage
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
