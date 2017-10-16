// create new trip
export function createTrip(newTrip) {
  return {
    type: 'CREATE_TRIP',
    payload: newTrip,
  }
}
