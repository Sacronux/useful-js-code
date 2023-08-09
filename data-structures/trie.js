class Node {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let currentNode = this.root;
        for (let i = 0; i < word.length; i++) {
            let charToInsert = word[i];
            if (currentNode.children[charToInsert] === undefined) {
                currentNode.children[charToInsert] = new Node();
            }

            currentNode = currentNode.children[charToInsert];
        }

        currentNode.isWordEnd = true;
    }

    contains(word) {
        let currentNode = this.root;
        for (let i = 0; i < word.length; i++) {
            let charToFind = word[i];
            if (currentNode.children[charToFind] === undefined) {
                return false;
            }

            currentNode = currentNode.children[charToFind];
        }

        return currentNode.isWordEnd;
    }

    startsWith(prefix) {
        let currentNode = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let charToFind = prefix[i];
            if (currentNode.children[charToFind] === undefined) {
                return false;
            }

            currentNode = currentNode.children[charToFind];
        }

        return true;
    }

    findAllWordsByPrefix(prefix) {
        let currentNode = this.root;

        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];

            if (currentNode.children[char] === undefined) {
                return [];
            }

            currentNode = currentNode.children[char];
        }

        const words = [];
        this._findWords(currentNode, prefix, words)
        return words;
    }

    _findWords(node, prefix, words) {
        if (node.isWordEnd) {
            words.push(prefix)
        }

        const chars = Object.keys(node.children)

        for (let i = 0; i < chars.length; i++) {
            const char = chars[i]

            this._findWords(node.children[char], prefix + char, words)
        }
    }
}

const trie = new Trie();
trie.insert("car");
trie.insert("capability");
trie.insert("cave");
trie.insert("cat");

const wordsWithPrefix = trie.findAllWordsByPrefix("ca");
console.log(wordsWithPrefix);
