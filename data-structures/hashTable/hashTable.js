function HashTable() {
  this.table = new Array(137);
  this.showDistro = showDistro;
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.put = put;
  this.get = get;
}

function put(data) {
  const pos = this.betterHash(data);
  this.table[pos] = data;
}

function get(key) {
  const hash = this.betterHash(key);
  return this.table[hash]
}

function simpleHash(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data.charCodeAt(i)
  }
  return total % this.table.length;
}

function betterHash(data) {
  const H = 37;
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    total = total * H + data.charCodeAt(i)
  }

  return total % this.table.length
}

function showDistro() {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + '=>' + this.table[i])
    }
  }
}

const hashTable = new HashTable()