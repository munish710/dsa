class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }

    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    } else {
      let poppedNode = this.first;
      this.first = poppedNode.next;
      poppedNode.next = null;
      this.size--;

      if (!this.size) {
        this.last = null;
      }

      return poppedNode.val;
    }
  }
}

const stack = new Stack();

stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");
stack.pop();
