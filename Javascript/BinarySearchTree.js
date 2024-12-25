console.log("Welcome to Tree Data Structures");
// insert
// search
// find min
// find max
// delete
// in order
// pre order
// post order
// breadth first search

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        console.error(
          "duplicate values are not allowed in binary search tree ",
          value
        );
        return;
      }
    }
  }

  // search(value, node = this.root) {
  //   if (!node) return false;
  //   if (value === node.value) {
  //     return true;
  //   } else if (value < node.value) {
  //     return this.search(value, node.left);
  //   } else {
  //     return this.search(value, node.right);
  //   }
  // }

  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // findMin(node = this.root) {
  //   if (!node) return null;
  //   if (!node.left) {
  //     return node.value;
  //   } else {
  //     return this.findMin(node.left);
  //   }
  // }

  findMin(node = this.root) {
    if (!node) return null;

    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }

  // findMax(node = this.root) {
  //   if (!node) return null;
  //   if (!node.right) {
  //     return node.value;
  //   } else {
  //     return this.findMax(node.right);
  //   }
  // }

  findMax(node = this.root) {
    if (!node) return null;

    let current = node;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }

  delete(value, node = this.root) {
    if (!node.value) return null;

    if (value < node.value) {
      node.left = this.delete(value, node.left);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      const minRightValue = this.findMin(node.right);
      node.value = minRightValue;
      node.right = this.delete(minRightValue, node.right);
    }
    return node;
  }

  inOrder(node = this.root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  preOrder(node = this.root) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node = this.root) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }

  bfs() {
    if (!this.root) return;
    let queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let current = queue.shift();
      console.log(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(20);
bst.insert(10);
bst.insert(30);
bst.insert(5);
bst.insert(15);
bst.insert(12);
bst.insert(25);
bst.insert(40);
bst.insert(3);
bst.insert(50);
console.log("\nin order ");
bst.inOrder();

console.log("binary search tree ", bst);
console.log(bst.search(300));
console.log("min ", bst.findMin());
console.log("max ", bst.findMax());
console.log(bst.delete(20));
console.log("\nbredth first search");
bst.bfs();
