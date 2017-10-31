export function symbolsDisplay(num, symbol, partialStar) {
  let display = [];

  for (let i=0; i < Math.floor(num); i++) {
    // everytime you go iterate over num, concat a symbol onto display
    display.push(symbol);

  }

  if ( num % 1 === 0.5) {
    display.push(partialStar)
  }

  return display;
}
