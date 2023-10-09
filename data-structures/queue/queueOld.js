function empty() {
  return this.dataStore.length === 0
}

function enqueue(el) {
  this.dataStore.push(el)
}

function toString() {
  let resultString = ''
  for(let i = 0; i < this.dataStore.length; i++) {
    resultString += this.dataStore[i] + '/n'
  }
  return resultString
}

function front() {
  return this.dataStore[0]
}

function back() {
  return this.dataStore[this.dataStore.length - 1]
}

function dequeue() {
  if (this.dataStore.length) {
    this.dataStore.shift()
  }
}

class Queue {
  constructor() {
    this.dataStore = [];
  }
  enqueue = enqueue
  dequeue = dequeue
  empty = empty
  toString = toString
  front = front
  back = back
}



function sortByPriopity(data) {
  arr = []
  let biggestValue = 0
  for(let i = 0; i < data.length; i++) {
    if (data[i] > biggestValue) {
      arr.unshift(data[i])
      biggestValue = data[i]
    } else {
      for(let j = 0; j < arr.length; j++) {
        if (data[i] > arr[j]) {
          arr.splice(j, 0, data[i])
          break;
        } else {
          if (j === arr.length - 1) {
            arr.push(data[i]);
            break;
          }
        }
      }
    }
  }
  console.log(arr)
}

sortByPriopity([3, 1, 15, 0, 22, 22, 4, 14, 34, 17, 18, 19, 34, 7, 8])