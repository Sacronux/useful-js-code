function add(key, value) {
  this.datastore[key] = value;
}

function Dictionary() {
  this.add = add;
  this.datastore = [];
  this.showAll = showAll;
  this.find = find;
  this.remove = remove;
  this.count = count;
  this.clear = clear;
  this.addFromString = addFromString;
  this.sort = sort;
}

function find(key) {
  return this.datastore[key]
}

function remove(key) {
  delete this.datastore[key]
}

function showAll() {
  for (const key of Object.keys(this.datastore)) {
    console.log(`${key} => ${this.datastore[key]}`)
  }
}

function count() {
  return Object.keys(this.datastore).length
}

function clear() {
  this.datastore = [];
}

function addFromString(string) {
  string.split(' ').map(key => {
    this.datastore[key] = this.datastore[key] ? ++this.datastore[key] : 1
  })
}

function sort() {
  const sorted = [];
  Object.keys(this.datastore).sort().map(key => sorted[key] = this.datastore[key])
  this.clear()
  for (const key of Object.keys(sorted)) {
    this.add(key, sorted[key])
  }
}

const dictionary = new Dictionary();

dictionary.addFromString('the brown fox jumped over the blue fox')
dictionary.showAll()
dictionary.sort()
dictionary.showAll()