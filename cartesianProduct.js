// What is cartesian product?
// In mathematics, specifically set theory, the cartesian product of two sets A and B, denoted AxB is the
// set of all ordered pairs (a,b) where a is in A and b is in B.

// Example:
// A = [1, 2]
// B = [3, 4]
// AxB = [[1,3], [1,4], [2,3], [2, 4]]

// Problem: Given two finite non-empty sets, find their Cartesian Product.

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

function cartesianProduct(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}

// Testing

console.log(cartesianProduct(arr1, arr2)); // [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]

// Big-O Calculation
// In this perticular case we have 2 loops but the length of arrays can be diffrent
// Lets say arr1 is m length and arr2 is n length

// Hence Big-O for the above program is O(mn) is variable length else O(n^2)
