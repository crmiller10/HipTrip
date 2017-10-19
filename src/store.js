import { createStore } from 'redux';
import { createTrip } from './actions'

import { updateTrip } from './actions'

function reducer(state, action){

  if (action.type === 'CREATE_TRIP') {
    return {
      currentTrip: action.payload,
      trips: state.trips.concat(action.payload),
    }
  }

  if (action.type === 'UPDATE_TRIP') {
    return {
      currentTrip: action.payload,
      trips: state.trips,
    }
  }

  if (action.type === 'ADD_PLACE') {
      return {
          places: state.places.concat([action.payload]),
      };
  }

  return state;
}

export const store = createStore(reducer, {
  currentTrip: {},
  trips: [],
  places: [],
},

  // usage notes for devtools extension:
  // https://github.com/zalmoxisus/redux-devtools-extension#usage
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
