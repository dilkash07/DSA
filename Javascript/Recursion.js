const arr = [56, 46, 98, 73, 2, 0, 876, 45];

// reverse recursion
let money = 100;

function buyMore(m) {
  buy(m);
}

function buy(m) {
  if (m > 0) {
    buyMore(m - 10);
  }
}

// Q.1 write a function calculate factorial of n numbers
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(5));

// Q.2 write a function reverse an array using recursion
function getReverseArray(arr, start, end) {
  const temp = arr[start];
  if (start <= end) {
    arr[start] = arr[end];
    arr[end] = temp;
    getReverseArray(arr, start + 1, end - 1);
  }
  return arr;
}

// console.log(getReverseArray(arr, 0, arr.length - 1));

// Q.3 write a function search an element from an array using binary search and recursion
const sortedArr = [0, 2, 45, 46, 56, 72, 98, 876];

function recursiveBinarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return recursiveBinarySearch(arr, target, mid + 1, end);
  } else {
    return recursiveBinarySearch(arr, target, start, mid - 1);
  }
}

// console.log(recursiveBinarySearch(sortedArr, 98));

function inserstionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(inserstionSort(arr));
