// What is insertion sort?
// Virtually split the array into a sorted and an unsorted part Assume that the first element is sorted and the remaining elements are unsorted.
// Select an unsorted element and compare with all the elements in the sorted part. If the elements in the sorted part are smaller than the elements in the unsorted
// part proceed to the next and Else shift larger elements in the sorted part towards the right.
// Insert the selected element at the right index, Repeat till all the unsorted elements are placed in right order.

// Problem: Given an array of integers, sort the array.

// example : arr = [8, 20, -2, 4, -6] ===> output result should be [-6, -2, 4, 8, 20]

function insertionSort(arr) {
  for (let index = 1; index < arr.length; index++) {
    let numberToInsert = arr[index];
    let j = index - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = numberToInsert;
  }

  return arr;
}

// Testing

const arr = [8, 20, -2, 4, -6];

console.log(insertionSort(arr)); // [-6, -2, 4, 8, 20]

// Big-O Calculation
// 1. two loop = O(n^2)

// Hence Big-O for the above program is O(n^2)
