// Your code goes here
let const1 = parseInt(prompt('Enter const1', ' '));
let const2 = parseInt(prompt('Enter const2', ' '));
let const3 = parseInt(prompt('Enter const3', ' '));

function getSolution() {
  let d = Math.pow(const2, 2) - 4 * const1 * const3;
  let x = (-const2 / 2) * const1;
  let x1 = (-const2 + Math.sqrt(d)) / (2 * const1);
  let x2 = (-const2 - Math.sqrt(d)) / (2 * const1);

  if (isNaN(const1) || isNaN(const2) || isNaN(const3)) {
    return 'Invalid input data';
  }
  if (d < 0) {
    return 'no solution';
  }
  if (d === 0) {
    return x;
  } else {
    return `x1 = ${x1} and x2 = ${x2}`;
  }
}
alert(getSolution());
