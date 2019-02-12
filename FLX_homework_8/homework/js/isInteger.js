function isInteger(number) {
    return (typeof number === 'number') && (number % 1 === 0);
  }
  isInteger(5);