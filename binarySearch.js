// Note: Binary search works only on sorted array.
// Problem 1: Given a sorted array of n elements and a target t, find the index of t in the array.
// if the target element is not found return -1.
// example : arr = [-5, 2, 4 , 6, 10], target = 10 ===> output result should be 4
// example : arr = [-5, 2, 4 , 6, 10], target = 20 ===> output result should be -1

// Pseudo Code
// 1. If the array is empty, return -1 as the element cannot be found
// 2. Find the middle element in the array, if the target is equal to middle element return index.
// 3. If target is less than the middle element, binary search below the middle element.
// 4. If target is greater than the middle element, binary search above the middle element.
// 5. finally the target is equal to middle element.

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2); // Math.floor in case the arr is even number in length

    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

// Testing

const arr = [-5, 2, 4, 6, 10];

console.log(binarySearch(arr, 10)); // 4
console.log(binarySearch(arr, 6)); // 3
console.log(binarySearch(arr, 20)); // -1

// Big-O Calculation
// 1. one loop = O(n)
// 2. input is reduced in half so = O(logn)
// Hence Big-O for the above program is O(logn)
