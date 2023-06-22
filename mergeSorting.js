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
