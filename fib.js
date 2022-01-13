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
  let fibA = 0;
  let fibB = 1;
  let fibSum = 0;
  for (let i = 3; i <= input; i++) {
    fibSum = fibA + fibB;
    fibA = fibB;
    fibB = fibSum;
  }
  return fibSum;
}

function fibRecursive(input) {
  // implement this using recursion

  return false;
}

console.log(fibIterative(6));
