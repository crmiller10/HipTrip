// create new trip
export function createTrip(newTrip) {
  return {
    type: 'CREATE_TRIP',
    payload: newTrip,
  }
}

// update an existing trip
export function updateTrip(tripDeets) {
  return {
    type:'UPDATE_TRIP',
    payload: tripDeets,
  }
}
