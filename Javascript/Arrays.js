// write a funtionality for insert an element from an array
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

// write a functionality for remove an element from an array
function removeElement(arr, position) {
  for (let i = position; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return arr;
}

// const el = removeElement(arr, 4);
// console.log("after", el);

// writte a functionality for search an element from an array
function searchElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return `${arr[i]} found at index ${i}`;
    }
  }
  return "Element is not found!";
}

// console.log(searchElement(arr, 73));

// write a functionality for merge two array manually
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

// write a functionality for merge two array manually using while loop
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

console.log(mergeArray(data, data1));
