function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.findMin = findMin;
  this.findMax = findMax;
  this.findValue = findValue;
  this.remove = remove;
  this.countNodes = countNodes;
  this.countEdges = countEdges;
}

function show() {
  return this.data;
}

function remove(value) {
  this.root = removeNode(this.root, value)
}

function removeNode(node, value) {
  if (node === null) {
    return null;
  }
  if (value < node.data) {
    node.left = removeNode(node.left, value);
    return node;
  } else if (value > node.data) {
    node.right = removeNode(node.right, value);
    return node;
  } else {
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }
    if (node.left === null) {
      node = node.right;
      return node;
    }
    if (node.right === null) {
      node = node.left;
      return node
    }
    const tempNode = this.findMin(node.right)
    node.data = tempNode.data;
    node.right = this.removeNode(node.right, tempNode.data)
    return node
  }

}

function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + " ");
  }
}

function countNodes() {
  const node = this.root
  let i = 0;
  function countTraversal(node) {
    if (!(node == null)) {
      countTraversal(node.left);
      i++
      countTraversal(node.right);
    }
  }
  countTraversal(node)
  return i;
}

function countEdges() {
  return this.countNodes() - 1
}

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

function findMin(node) {
  if (node.left) {
    return findMin(node.left)
  }
  return node
}

function findMax(node) {
  if (node.right) {
    return findMax(node.right)
  }
  return node.data
}

function findValue(value) {
  let current = this.root;
  if (current.data === value) {
    return current
  }
  while (true) {
    if (current.data === value) {
      break;
    }
    if (value < current.data) {
      if (current.left === null) {
        return 'not found'
      }
      current = current.left
    } else {
      if (current.right === null) {
        return 'not found'
      }
      current = current.right
    }
  }
  return current;
}

function insert(data) {
  const node = new Node(data, null, null);
  if (this.root === null) {
    this.root = node;
    return;
  }
  let parent;
  let current = this.root;
  while(true) {
    if (data < current.data) {
      if (current.left === null) {
        current.left = node;
        break;
      }
      parent = current;
      current = current.left;
    } else {
      if (current.right === null) {
        current.right = node;
        break;
      }
      parent = current;
      current = current.right;
    }
  }
}

const bst = new BST();

bst.insert(56)
bst.insert(81)
bst.insert(22)
bst.insert(10)
bst.insert(30)
bst.insert(92)
bst.insert(77)
// bst.inOrder(bst.root)
// bst.remove(30)
console.log(bst.count())
// console.log(JSON.stringify(bst.root, 2))

