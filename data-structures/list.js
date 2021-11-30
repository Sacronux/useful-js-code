function clear() {
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function find(el) {
  for(let i = 0; i < this.dataStore.length; i++) {
    if (el === this.dataStore[i]) {
      return i
    }
  }
}

function toString() {
  return this.dataStore;
}

function insert(after, element) {
  const insertPos = this.find(after)

  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element)
    ++this.listSize
    return true
  }

  return false
}

function append(el) {
  this.dataStore[this.listSize++] = el
}

function remove(el) {
  const elPos = this.find(el)

  if (elPos > -1) {
    this.dataStore.splice(elPos, 1)
    --this.listSize
    return true
  }
  return false
}

function front() {
  this.pos = 0
}

function end() {
  this.pos = this.listSize - 1
}

function prev() {
  if (this.pos > 0) {
    --this.pos
  }
}

function next() {
  if (this.pos < this.listSize - 1) {
    ++this.pos
  }
}

function length() {
  return this.listSize
}

function currPos() {
  return this.pos
}

function moveTo(el) {
  const elPos = this.find(el)
  if (elPos > -1) {
    this.pos = elPos
    return true
  }
  return false
}

function getElement() {
  return this.dataStore[this.pos]
}

function contains(el) {
  for(let i = 0; i < this.dataStore.length; i++) {
    if(this.dataStore[i] === el) {
      return true
    }
  }
  return false
}

function List() {
  this.pos = 0;
  this.listSize = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}
