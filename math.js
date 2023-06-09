// 1. Math  Algorithms

// -------------------------------------------------------------- a) Fibonacci Sequence
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

// console.log(Fibonacci(2));
// console.log(Fibonacci(3));
// console.log(Fibonacci(10));

// Big-O Calculation

// 1. one loop = O(n)

// Hence Big-O for the above program is O(n)

// -------------------------------------------------------------- b) Factorial

function Factorial(n) {
  let result = 1;
  for (let index = 2; index <= n; index++) {
    result = result * index;
  }
  return result;
}

// Testing

// console.log(Factorial(1));
// console.log(Factorial(2));
// console.log(Factorial(5));

// Big-O Calculation

// 1. one loop = O(n)

// Hence Big-O for the above program is O(n)

// -------------------------------------------------------------- b) Prime Number

// Note: A prime number is a natural number greater than 1, which is only divisible by 1 and itself.

function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  } else {
    for (let index = 2; index < n; index++) {
      if (n % index === 0) {
        return false;
      }
    }
    return true;
  }
}

// Testing

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(5));
console.log(isPrimeNumber(4));

// Big-O Calculation

// 1. one loop = O(n)

// Hence Big-O for the above program is O(n)
