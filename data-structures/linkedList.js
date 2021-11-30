const LList = [
  {
    data: 'head',
    next: 1,
  },
  {
    data: 1,
    next: 2,
  },
  {
    data: 2,
    next: 3,
  },
  {
    data: 3,
    next: 4,
  },
  {
    data: 4,
    next: null,
  }
]

const reverseLList = list => {
  for(let i = 0; i < list.length; i++) {
    const oppositeElIdx = list.length - 1 - i;
    const oppositeEl = list[oppositeElIdx];

    list.splice(oppositeElIdx, 1, list[i]);
    list.splice(i, 1, oppositeEl);
    list[i].next = list[oppositeElIdx - 1].data
    list[oppositeElIdx].next =  list.length - 1 === oppositeElIdx ? null : list[oppositeElIdx + 1].data
    const listLengthIsEven = list.length % 2 === 0
    const firstCondition = listLengthIsEven && (((list.length / 2) - 1) === i)
    const secondCondition = !listLengthIsEven && (((list.length - 1) / 2) === i)

    if (firstCondition || secondCondition) {
      break;
    }
  }
  return list
}

function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function find(element) {
  let currentNode = this.head;
  while (currentNode.element !== element) {
    currentNode = currentNode.next
  }
  return currentNode
}

function insert(element, after) {
  const prevNode = this.find(after)
  const newElement = new Node(element)
  newElement.next = prevNode.next
  prevNode.next = newElement
  newElement.previous = prevNode
  return newElement
}

function advance(element, n) {
  const currentNode = this.find(element);
  
  for(let i = 0; i < n; i++) {
      const nextNode = currentNode.next;
      const prevNode = currentNode.previous;

      if (nextNode !== null) {

        currentNode.next = nextNode.next;
        currentNode.previous = nextNode;

        nextNode.next = currentNode;
        nextNode.previous = prevNode;

        prevNode.next = nextNode;
      }  

    
  }
}

function back(element, n) {
  const currentNode = this.find(element);
  
  for(let i = 0; i < n; i++) {
      const nextNode = currentNode.next;
      const prevNode = currentNode.previous;

      if (prevNode !== 'head') {
        currentNode.next = prevNode;
        currentNode.previous = prevNode.previous;

        prevNode.previous.next = currentNode

        if (nextNode !== null) {
          nextNode.previous = prevNode;
        } 

        prevNode.next = nextNode;
        prevNode.previous = currentNode;
      } 
  }
}

function show(element) {
  const current = this.find(element)
  current.next = 
    current.next.element
  
  current.previous = current.previous.element
  return current
}


// function findPrevious(element) {
//   const currentNode = this.find(element)
//   let previousNode = this.head

//   while (previousNode.next.element !== currentNode.element) {
//     previousNode = previousNode.next
//   }

//   return previousNode
// }

function remove(element) {
  const currentNode = this.find(element)
  const previousNode = currentNode.previous
  
  previousNode.next = currentNode.next
  if (currentNode.next) {
    currentNode.next.previous = previousNode
  }

  return currentNode
}

function display() {
  let current = this.head

  while (current !== null) {
    if (current.element !== 'head') {
      console.log((current.element))
    }
    current = current.next
  }
}

function findLast() {
  let current = this.head
  while (current.next !== null) {
    current = current.next
  }
  return current
}

function desplayReverse() {
  let current = this.findLast()
  while (current.element !== 'head') {
    console.log(current.element)
    current = current.previous
  }
}

function DoublyLinkedList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  // this.findPrevious = findPrevious;
  this.findLast = findLast;
  this.desplayReverse = desplayReverse;
  this.advance = advance;
  this.back = back;
  this.show = show;
}

const cities = new DoublyLinkedList()

cities.insert('1', 'head')
cities.insert('2', '1')
cities.insert('3', '2')
cities.insert('4', '3')
// cities.display();
console.log()
cities.back('4', 2)
cities.display();
console.log(cities.show('1'))



// cities.insert("Conway", "head");
// cities.insert("Russellville", "Conway");
// cities.insert("Carlisle", "Russellville");
// cities.insert("Alma", "Carlisle");
// // cities.display();
// console.log();
// cities.remove("Carlisle");
// cities.display();
// cities.desplayReverse();


// function Node(element) {
//   this.element = element;
//   this.next = this.head;
//   this.previous = null;
// }

// function find(element) {
//   let currentNode = this.head;
//   while (currentNode.element !== element) {
//     currentNode = currentNode.next
//   }
//   return currentNode
// }

// function insert (element, after) {
//   const prevNode = this.find(after)
//   const newElement = new Node(element)
//   newElement.next = prevNode.next
//   prevNode.next = newElement
//   newElement.previous = prevNode
//   return newElement
// }

// // function findPrevious(element) {
// //   const currentNode = this.find(element)
// //   let previousNode = this.head

// //   while (previousNode.next.element !== currentNode.element) {
// //     previousNode = previousNode.next
// //   }

// //   return previousNode
// // }

// function remove(element) {
//   const currentNode = this.find(element)
//   const previousNode = currentNode.previous
  
//   previousNode.next = currentNode.next
//   if (currentNode.next) {
//     currentNode.next.previous = previousNode
//   }

//   return currentNode
// }

// function display() {
//   let current = this.head.next

//   while (current.element !== this.findLast().next.element) {
//     if (current.element !== 'head') {
//       console.log((current.element))
//     }
//     current = current.next
//   }
// }

// function findLast() {
//   let current = this.head
//   while (current.next.element !== 'head') {
//     current = current.next
//   }
//   return current
// }

// function desplayReverse() {
//   let current = this.findLast()
//   // console.log(current)
//   while (current.element !== 'head') {
//     console.log(current.element)
//     current = current.previous
//   }
// }

// function CircularlyLinkedList() {
//   this.head = new Node('head');
//   this.head.next = this.head
//   this.find = find;
//   this.insert = insert;
//   this.remove = remove;
//   this.display = display;
//   // this.findPrevious = findPrevious;
//   this.findLast = findLast;
//   this.desplayReverse = desplayReverse;
// }

// const Circularlycities = new CircularlyLinkedList()

// Circularlycities.insert("Conway", "head");
// Circularlycities.insert("Russellville", "Conway");
// Circularlycities.insert("Carlisle", "Russellville");
// Circularlycities.insert("Alma", "Carlisle");
// // cities.display();
// console.log();
// Circularlycities.remove("Carlisle");
// Circularlycities.display();
// Circularlycities.desplayReverse();


