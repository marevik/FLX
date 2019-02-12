function pipe() {
    let number = arguments[0];
    let result;
    for (let i = 1; i < arguments.length; i++) {
      result = arguments[i](number);
      number = result;
    }
    return result;
  }
  function addOne(x) {
    return x + 1;
  }
  pipe(1, addOne);