// Problem: Tower of hanoi is a puzzle game in which we have three rods mounted vertically and one
// one of the rod is stacked with diffrent diameter disks biggest in the bottom to smallest at the
// top, The objective is to move the entire stack to the last rod obeying some rules.
// 1. One disk to move at a time
// 2. In each move upper disk must be taken from one of the stacks and moved to another
// 3. While placing a disk make sure to not put a smaller disk on top of a bigger one

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

// Testing

towerOfHanoi(3, "A", "C", "B");

// Big-O Calculation
// Big-O for the above program is O(2^n)
