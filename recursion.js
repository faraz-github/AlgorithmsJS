// Note: Recursion is a problem solving technique when the function calls itself.

// Common Usecase: When a problem needs to be broken down into smaller problem, recursion technique can be used to simplify the solution.

// Important points
// 1) A condition to terminate the recursion algorithm.
// 2) Not always the best, sometimes it can be far worse than the iterative solution.
// 3) It is not the most straight forward solution.

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// Testing

// console.log(recursiveFibonacci(0)); // 0
// console.log(recursiveFibonacci(1)); // 1
// console.log(recursiveFibonacci(6)); // 8

// Big-O Calculation

// Big-O for the above program is O(2^n)

// Factorial Problem

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

// Testing

console.log(recursiveFactorial(5));

// Big-O Calculation

// Big-O for the above program is O(n)
