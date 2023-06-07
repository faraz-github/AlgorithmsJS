// 1. Math  Algorithms

// a) Fibonacci Sequence
function Fibonacci(n) {
  const fib = [0, 1]; // Initial Numbers

  // Loop to create the sequence starting from 2nd index
  for (let index = 2; index < n; index++) {
    // Sequence calculation
    fib[index] = fib[index - 1] + fib[index - 2];
  }

  return fib;
}

// Testing

console.log(Fibonacci(2));
console.log(Fibonacci(3));
console.log(Fibonacci(10));

// Big-O Calculation

// 1. one loop = O(n)

// Hence Big-O for the above program is O(n)
