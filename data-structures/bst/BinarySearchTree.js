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
      return this;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return undefined;
      }

      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(8);
bst.insert(5);
bst.insert(11);
bst.insert(12);
bst.insert(13);
bst.insert(9);
