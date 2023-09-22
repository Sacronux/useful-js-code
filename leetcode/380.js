class RandomizedSet {
  constructor() {
    this.list = [];
    this.hashMap = [];
  }

  insert(val) {
    if (this.hashMap[val] !== undefined) {
      return false;
    }
    this.hashMap[val] = this.list.length;
    this.list[this.list.length] = val;
    return true;
  }

  remove(val) {
    const idx = this.hashMap[val];
    if (idx === undefined) {
      return false;
    }

    const last = this.list[this.list.length - 1];
    this.hashMap[last] = idx;
    this.hashMap[val] = undefined;

    this.list[idx] = last;
    this.list.pop();
    return true;
  }

  getRandom() {
    const idx = Math.floor(Math.random() * this.list.length);
    return this.list[idx];
  }
}

const randomizedSet = new RandomizedSet();
const s1 = [
  "RandomizedSet",
  "insert",
  "remove",
  "insert",
  "getRandom",
  "remove",
  "insert",
  "getRandom",
];
const s2 = [[], [1], [2], [2], [], [1], [2], []];

s1.forEach((action, i) => {
  if (randomizedSet[action]) {
    console.log(randomizedSet[action](s2[i][0]));
  }
});
