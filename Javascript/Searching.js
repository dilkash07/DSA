// Q.1 write a function search an element from an array using linear search
const arr = [56, 46, 98, 73, 2, 0, 876, 45];
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// console.log(linearSearch(arr, 876));

// Q.2 write a function search an element from an array using binary search
const sortedArr = [0, 2, 45, 46, 56, 72, 98, 876];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch(sortedArr, 876));
