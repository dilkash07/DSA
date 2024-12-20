let data = [];
let currentSize = data.length;

// Q.1 write a function push an element in array

function push(el) {
  data[currentSize] = el;
  currentSize++;
}

// push(20);
// push(30);
// push(40);
// push(50);
// console.log(data);

// Q.2 write a function pop an element from an array
function pop() {
  if (currentSize > 0) {
    currentSize--;
    data.length = currentSize;
  } else {
    alert("stack is empty");
  }
}

// pop();
// pop();
// pop();
// pop();
// pop();
// console.log(data);

// Q.3 write a function reverse a string
function push(el) {
  data[currentSize] = el;
  currentSize++;
}

function pop() {
  currentElelment = data[currentSize - 1];
  currentSize--;
  data.length = currentSize;
  return currentElelment;
}

function reverseStr(string) {
  let str = string.split("");
  let revStr = [];

  for (let i = 0; i < str.length; i++) {
    push(str[i]);
  }

  for (let i = 0; i < str.length; i++) {
    revStr[i] = pop();
  }

  revStr = revStr.join("");
  return revStr;
}

// console.log(reverseStr("the quick bronw fox jumps over the lazy dog"));

// Q.4 write a function reverse a string using class
// class Stack {
//   constructor() {
//     this.items = [];
//     this.currentSize = 0;
//   }

//   push(element) {
//     this.items[this.currentSize] = element;
//     this.currentSize++;
//   }

//   pop() {
//     if (this.currentSize === 0) {
//       return null;
//     }
//     const currentElelment = this.items[this.currentSize - 1];
//     this.currentSize--;
//     this.items.length = this.currentSize;
//     return currentElelment;
//   }

//   reverseStr(string) {
//     const str = string.split("");
//     const revStr = [];

//     for (let i = 0; i < str.length; i++) {
//       this.push(str[i]);
//     }
//     for (let i = 0; i < str.length; i++) {
//       revStr[i] = this.pop();
//     }

//     return revStr.join("");
//   }
// }

// const stack = new Stack();
// console.log(stack.reverseStr("kaise ho mitron"));

// using other methods
class Stack {
  constructor() {
    this.items = [];
    this.currentSize = 0;
  }

  push(element) {
    this.items[this.currentSize] = element;
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    const currentElelment = this.items[currentSize - 1];
    this.currentSize--;
    this.items.length = currentSize;
    return currentElelment;
  }
}

function reverseStr(string) {
  const stack = new Stack();
  const str = string.split("");
  const reverseStr = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  for (let i = 0; i < str.length; i++) {
    reverseStr[i] = stack.pop();
  }
  return reverseStr.join("");
}

console.log("hello");
