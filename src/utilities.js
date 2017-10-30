export function symbolsDisplay(num, symbol) {
  let display = [];

  for (let i=0; i < num; i++) {
    // everytime you go iterate over num, concat a symbol onto display
    display.push(symbol);
  }

  return display;
}
