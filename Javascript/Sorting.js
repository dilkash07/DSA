const arr = [7, 4, 6, 8, 0, 2];

//bubble sorting
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

// console.log("bubble sort array: ", arr);

// selection sorting
for (let i = 0; i < arr.length - 1; i++) {
  let smallest = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[smallest]) {
      smallest = j;
    }
  }

  [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
}

// console.log("selection sort array: ", arr);

// insertion sorting
for (let i = 0; i < arr.length; i++) {
  let j = i - 1;
  let current = arr[i];

  while (j >= 0 && arr[j] > current) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = current;
}

// console.log("insertion sort array: ", arr);
