function HashTable () {
  this.table = new Array(137);
  this.values = [];
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

function put (key, data) {
  let pos = this.hashFunction(key)
  if (!this.table[pos]) {
    this.table[pos] = key;
    this.values[pos] = data;
  } else {
    while (this.table[pos]) {
      pos++;
    }
  }
}

function get(key) {
  let pos = this.hashFunction(key);

  while (this.table[pos] !== key) {
    pos++
  }
  console.log(this.values[pos])
}

const hashTable = new HashTable();

hashTable.put('Earth', 'Planet we live on')

hashTable.get('Earth')

