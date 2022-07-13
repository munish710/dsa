class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
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

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
