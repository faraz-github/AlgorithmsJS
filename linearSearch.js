// Problem 1: Given an array of n elements and a target t, find the index of t in the array.
// if the target element is not found return -1.
// example : arr = [-5, 2, 10 , 4, 6], target = 10 ===> output result should be 2
// example : arr = [-5, 2, 10 , 4, 6], target = 20 ===> output result should be -1

// Pseudo Code
// 1. Start from first and move to the last element in array
// 2. At each element check if the element is equal to target element
// 3. If element is found, return the index
// 4. If element is not found, return -1

function linearSearch(arr, target) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) {
      return index;
    }
  }
  return -1;
}

// Testing

const arr = [-5, 2, 10, 4, 6];

console.log(linearSearch(arr, 10)); // 2
console.log(linearSearch(arr, 6)); // 4
console.log(linearSearch(arr, 20)); // -1

// Big-O Calculation
// 1. one loop = O(n)
// Hence Big-O for the above program is O(n)
