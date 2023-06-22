// What is quick sort?
// In quick sort we identify a pivot element once we have identified it we traverse the array and move any element
// that is less than the pivot element to the left side and greater element to the right side. note that these are all seperated
// so once everything comes is order concatenate left , pivot and right array respectively.

// Problem: Given an array of integers, sort the array.

// example : arr = [-6, 20, 8, -2, 4] ===> output result should be [-6, -2, 4, 8, 20]

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index] < pivot) {
      left.push(arr[index]);
    } else {
      right.push(arr[index]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Testing

const arr = [-6, 20, 8, -2, 4];

console.log(quickSort(arr)); // [-6, -2, 4, 8, 20]

// Big-O Calculation
// 1. one loop = O(n)
// 2. input size reduced by half = O(logn)

// Hence Big-O for the above program is O(nlogn)
