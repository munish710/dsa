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

  //Time Complexity
  // Best and Avg case O(logn)
  // Worst Case O(n)
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

  //Time Complexity
  // Best and Avg case O(logn)
  // Worst Case O(n)
  search(value) {
    if (!this.root) {
      return undefined;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  bfs() {
    const queue = [];
    const visited = [];
    let visitedNode;

    queue.push(this.root);

    while (queue.length) {
      visitedNode = queue.shift();
      if (visitedNode.left) {
        queue.push(visitedNode.left);
      }

      if (visitedNode.right) {
        queue.push(visitedNode.right);
      }
      visited.push(visitedNode.value);
    }

    return visited;
  }

  preOrder() {
    const visited = [];
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }

  postOrder() {
    const visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(this.root);

    return visited;
  }

  inOrder() {
    const visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }

  deleteNode(val) {
    let currentNode = this.root;

    if (currentNode === null) {
      return;
    }

    if (currentNode.value === val) {
      return this.reArrangeBST(currentNode);
    }

    while (currentNode !== null) {
      if (val < currentNode.value) {
        if (currentNode.left !== null && currentNode.left.value === val) {
          currentNode.left = this.reArrangeBST(currentNode.left);
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right !== null && currentNode.right.value === val) {
          currentNode.right = this.reArrangeBST(currentNode.right);
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    return this;
  }

  reArrangeBST(nodeToBeRemoved) {
    if (nodeToBeRemoved.left === null) {
      return nodeToBeRemoved.right;
    } else if (nodeToBeRemoved.right === null) {
      return nodeToBeRemoved.left;
    } else {
      let rightSubTree = nodeToBeRemoved.right;
      let largetNodeInLeftSubtree = this.findMaxInLeftSubtree(
        nodeToBeRemoved.left
      );
      largetNodeInLeftSubtree.right = rightSubTree;

      return nodeToBeRemoved.left;
    }
  }

  findMaxInLeftSubtree(currentNode) {
    if (currentNode.right === null) {
      return currentNode;
    }

    return this.findMaxInLeftSubtree(currentNode.right);
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
bst.insert(2);
bst.insert(6);

bst.deleteNode(5);

//      10
//    8     11
//  5   9      12
//2   6            13
