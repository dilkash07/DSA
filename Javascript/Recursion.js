const arr = [56, 46, 98, 73, 2, 0, 876, 45];

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
