// Q.1 write a funtion insert an element from an array
const arr = [56, 46, 98, 73, 2, 0, 876, 45];

const insertElement = (arr, element, position) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= position) {
      arr[i + 1] = arr[i];
    }
    if (i === position) {
      arr[position] = element;
    }
  }
  return arr;
};

// const el = insertElement(arr, 44, 5);
// console.log(el);

// Q.2 write a function remove an element from an array
function removeElement(arr, position) {
  for (let i = position; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return arr;
}

// const el = removeElement(arr, 4);
// console.log("after", el);

// Q.3 writte a function search an element from an array
function searchElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return `${arr[i]} found at index ${i}`;
    }
  }
  return "Element is not found!";
}

// console.log(searchElement(arr, 73));

// Q.4 write a function merge two array manually
const arr1 = [43, 65, 877, 7, 0, 91, 32, 46, 76];

function mergeArray(arr, arr1) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr1[i];
  }

  for (let i = 0; i < arr1.length; i++) {
    newArr[arr.length + i] = arr1[i];
  }
  return newArr;
}

// console.log(mergeArray(arr, arr1));

// Q.5 write a function merge two array manually using while loop
const data = [5, 45, 56, 76, 87, 89, 98, 100, 103, 108, 110];
const data1 = [2, 3, 48, 62, 88, 99, 113, 121];

function mergeArray(data, data1) {
  let d = 0;
  let d1 = 0;
  let d2 = 0;
  const newData = [];

  while (d1 < data.length && d2 < data1.length) {
    if (data[d1] < data1[d2]) {
      newData[d] = data[d1];
      d1++;
    } else {
      newData[d] = data1[d2];
      d2++;
    }
    d++;
  }

  while (d1 < data.length) {
    newData[d] = data[d1];
    d1++;
    d++;
  }

  while (d2 < data1.length) {
    newData[d] = data1[d2];
    d2++;
    d++;
  }

  return newData;
}

// console.log(mergeArray(data, data1));

// Q.6 write a function sort an array using bubble sort
// function getSortedArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(getSortedArray(arr));

// Q.7 write a function for sorted an array using selection sort
function getSortedArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;

    // [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
  }
  return arr;
}

// console.log(getSortedArray(arr));

// Q.8 write a function sorted an array using insertion sort
function getSortedArray(arr) {
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

// console.log(getSortedArray(arr));

// Q.9 write a function sorted an array using count sort
// function getSortedArray(arr) {
//   return arr;
// }

// console.log(getSortedArray(arr));

// Q.10 write a function reverse an array using while loop
function getReverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
}

// console.log(getReverseArray(arr));

// Q.11 write a function reverse an array using for loop
function getReverseArray(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
}

// console.log(getReverseArray(arr));
