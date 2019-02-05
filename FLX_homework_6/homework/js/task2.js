const amount = parseFloat(prompt('Please enter amount of money', '0'));
const discount = parseFloat(prompt('Please enter discount', '0'));
const maximumAmount = 9999999;
const maximumDiscount = 99;
let output;

if (validInput(amount) || validInput(discount) || discount > maximumDiscount || amount >= maximumAmount) {
  output = 'Invalid input data';
} else {
  let saved = amount / 100 * discount;
  let priceWithDiscount = amount - saved;
  output = `
  Price without discount: ${+amount.toFixed(2)}
  Discount: ${+discount.toFixed(2)}%
  Price with discount: ${+priceWithDiscount.toFixed(2)}
  Saved: ${+saved.toFixed(2)}
  `;
}

function validInput (inputData) {
  return isNaN(inputData) || inputData < 0;
}

alert(output);