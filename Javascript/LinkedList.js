class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LInkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add a new node at the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // add a new node at the beginning
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // insert new node at a specific index
  insertAt(value, index) {
    if (index < 0) {
      console.log("invalid index");
      return;
    }

    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }

    let current = this.head;
    let previous = null;
    let i = 0;
    while (current && i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    if (i !== index) {
      console.log("index out of bounds");
      return;
    }
    newNode.next = current;
    previous.next = newNode;
    this.size++;
  }

  // delete a node at the beginning
  deleteFirst() {
    if (!this.head) {
      console.log("List is empty.");
      return;
    }
    this.head = this.head.next;
    this.size--;
  }

  // delete a node at the end
  deleteLast() {
    if (!this.head) {
      console.log("List is empty.");
      return;
    }

    if (!this.head.next) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next && current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
    this.size--;
  }

  // remove a node by its value
  remove(value) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
  }

  // delete a node by its index isko karna hai samjhe guru

  // traverse and print each node's value
  traverse() {
    if (!this.head) {
      console.log("List is empty.");
      return;
    }

    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // search a node by its value
  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // get the size of the linked list
  getSize() {
    return this.size;
  }

  // print the linked list
  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

const list = new LInkedList();

list.append(1);
list.print();
list.append(2);
list.print();
list.append(3);
list.print();
list.append(4);
list.print();
list.deleteFirst();
list.print();
list.prepend(1);
list.print();
list.deleteLast();
list.print();
console.log(list.search(3));
list.remove(4);
list.print();
list.traverse();
console.log("list size ", list.getSize());
list.print();
list.insertAt(4, 2);
list.print();
console.log("list size ", list.getSize());
