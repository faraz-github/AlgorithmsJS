// What is merge sort?

// Problem: Given an array of integers, sort the array.

// example : arr = [8, 20, -2, 4, -6] ===> output result should be [-6, -2, 4, 8, 20]

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

// Testing

const arr = [-6, 20, 8, -2, 4];

console.log(mergeSort(arr)); // [-6, -2, 4, 8, 20]

// Big-O Calculation
// 1. input is divided in half = O(logn)
// 2. one loop is there = O(n)

// Hence Big-O for the above program is O(nlogn)
