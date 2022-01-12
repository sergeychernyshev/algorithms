function factorialIterative(input) {
  let output = 1;

  for (let i = 1; i <= input; i++) {
    output = output * i;
  }

  return output;
}

function factorialRecursive(input) {
  if (input == 1) {
    return 1;
  }

  return input * factorialRecursive(input - 1);
}

console.log(factorialRecursive(3));
