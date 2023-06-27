// Problem: Given a staircase of "n" steps, count the number of distinct ways to climb to top.
// you can either climb one step or two steps at a time.

// Example

// Step Count = 1 = Number of ways => [[1]] => 1
// Step Count = 2 = Number of ways => [[1,1], [2]] = 2
// Step Count = 3 = Number of ways => [[1,1,1], [1,2], [2,1]] = 3

function climbingStaircase(n) {
  const noOfWays = [1, 2];

  for (let index = 2; index <= n; index++) {
    noOfWays[index] = noOfWays[index - 1] + noOfWays[index - 2];
  }

  return noOfWays[n - 1];
}

// Testing

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));

// Big-O Calculation
// one loop = O(n)

// Hence Big-O for the above program is O(n)
