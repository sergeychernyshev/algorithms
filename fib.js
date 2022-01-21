/**
 * Functions return a Fibonacci number
 *
 * fib(0) returns 0
 * fib(1) returns 1
 * fib(x) returns a number equal to the sum of two previous
 *    numbers in fibonacci sequence
 * (see https://en.wikipedia.org/wiki/Fibonacci_number)
 *
 * @param int input positive integer
 * @returns int
 */

function fibIterative(input) {
  // implement this using iteration

  if (input < 2) {
    return input;
  }

  let num1 = 0;
  let num2 = 1;
  let sum = 0;

  for (let i = 2; i <= input; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return sum;
}

function fibRecursive(input) {
  // implement this using recursion

  if (input < 2) return input;

  return fibRecursive(input - 1) + fibRecursive(input - 2);
}

//console.log(fibIteratives(5));
console.log(fibRecursive(10));
