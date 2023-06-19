// What is bubble sort?
// In bubble sorting we compare adjacent elements in the array and swap the positions if they are not in the intended order.

// Problem: Given an array of integers, sort the array.

// example : arr = [-6, 20, 8, -2, 4] ===> output result should be [-6, -2, 4, 8, 20]

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let index = 0; index < arr.length - 1; index++) {
      if (arr[index] > arr[index + 1]) {
        let temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Testing

const arr = [-6, 20, 8, -2, 4];

console.log(bubbleSort(arr)); // [-6, -2, 4, 8, 20]

// Big-O Calculation
// 1. two loop = O(n^2)

// Hence Big-O for the above program is O(n^2)
