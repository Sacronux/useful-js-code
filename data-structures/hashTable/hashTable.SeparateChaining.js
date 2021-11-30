function HashTable () {
  this.table = new Array(137);
  this.put = put;
  this.get = get;
  this.hashFunction = hashFunction;
}

function hashFunction (key) {
  const H = 37;
  let total = 0;
  
  for (let i = 0; i < key.length; i++) {
    total = total * H + key.charCodeAt(i)
  }
  return total
}

function put(key, value) {
  const pos = this.hashFunction(key)
  this.table[pos] = this.table[pos] ? this.table[pos] : [];
  this.table[pos].push(key)
  this.table[pos].push(value)
}

function get(key) {
  const pos = this.hashFunction(key)
  let value;
  for (let i = 0; i < this.table[pos].length; i++) {
    if (this.table[pos][i] === key) {
      value = this.table[pos][i + 1]
    }
  }
  return value
}

const hashTable = new HashTable();

hashTable.put('Earth', 'Planet we live on')
hashTable.put('aboba', 'haboba')
console.log(hashTable.table)
console.log(hashTable.get('Earth'))
console.log(hashTable.get('aboba'))


