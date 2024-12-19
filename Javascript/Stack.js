let data = [];
let currentSize = data.length;

// Q.1 write a function push an element in array

function push(el) {
  data[currentSize] = el;
  currentSize++;
}

push(20);
push(30);
push(40);
push(50);
console.log(data);

// Q.2 write a function pop an element from an array
function pop() {
  if (currentSize > 0) {
    currentSize--;
    data.length = currentSize;
  } else {
    alert("stack is empty");
  }
}

pop();
pop();
pop();
pop();
pop();

console.log(data);
