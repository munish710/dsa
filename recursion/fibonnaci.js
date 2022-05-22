// fib
// Write a recursive function called fib which accepts a number
// and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number thereafter
// is equal to the sum of the previous two numbers.

function fibonnaci(num) {
  if (num === 1 || num === 2) {
    return 1;
  }

  return fibonnaci(num - 1) + fibonnaci(num - 2);
}

console.log(fibonnaci(4)); // 3
console.log(fibonnaci(10)); // 55
console.log(fibonnaci(28)); // 317811
console.log(fibonnaci(35)); // 9227465
