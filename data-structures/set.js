function Set(props) {
  this.dataStore = props ?? [];
  this.add = add;
  this.remove = remove;
  this.show = show;
  this.union = union;
  this.contains = contains;
  this.intersect = intersect;
  this.size = size;
  this.subset = subset;
  this.differ = differ;
}

function add(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data)
    return true
  }
  return false
}

function remove(data) {
  const index = this.dataStore.indexOf(data)
  if (index > -1) {
    delete this.dataStore[index]
    return true
  }
  return false
}

function show() {
  return this.dataStore
}

function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  } else {
    return false;
  }
}

function union(set) {
  const tempSet = [...this.dataStore];
  set.map(member => {
    if (!this.contains(member)) {
      tempSet.push(member)
    }
  })
  return tempSet
}

function intersect(set) {
  const tempSet = new Set();
  set.map(member => {
    if (this.contains(member)) {
      tempSet.add(member)
    }
  })
  return tempSet
}

function size() {
  return this.dataStore.length;
}

function subset(set) {
  if (this.size() < set.size()) {
    return false
  } else {
    console.log(set)
    for (const value of set.dataStore) {
      if (!this.contains(value)) {
        return false
      }
    }
  }
  return true
}

function differ(set) {
  const tempSet = new Set()
  this.dataStore.map(member => {
    if (!set.contains(member)) {
      tempSet.add(member)
    }
  })
  return tempSet.dataStore
}

