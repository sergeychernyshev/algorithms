function factorial(input) {
  let output = 1;

  for (let i = 1; i <= input; i++) {
    output = output * i;
  }

  return output;
}

console.log(factorial(10));
