# Lambda University - July 12, 2017: Day 007, Wednesday
## Coding Challenge 3
- "reverseCase" available in https://github.com/ryanhca/CS1-Code-Challenges

# [1st Lecture](https://youtu.be/fHP0KMst_90) - Ben Nelson: GitHub flow & resolving merge conflicts
- To pull in daily coding challenges

```js
git remote add upstream https://github.com/ryanhca/CS1-Code-Challenges.git
git pull upstream master
```

***

# [2nd Lecture](https://youtu.be/SXvxbIEgOkw) - Ben Nelson: Code Challenge 2 review "isUnique"
## [@1m40s](https://youtu.be/SXvxbIEgOkw?t=1m40s): basic solution with nested for loop
- nestedfor loop solution:
  ```js
  // iterate over str
    // iterate over remaining str
      // check if str[i] === str[j] - return false
    // return true

  const isUnique = (str) => {
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str [j]) return false;
      }
    }
    return true;
  };

  ```

### [@8m10s](https://youtu.be/SXvxbIEgOkw?t=8m10s): Big O complexity analysis

## [@10m35s](https://youtu.be/SXvxbIEgOkw?t=10m35s): ES6 Set solution
  - like an object, but no {key: value}, just {value}
  - unlike an array, a set is NOT ordered
  - Set is a collection of values that are all unique
  - `const x = new Set();`

  ```js
  const isUnique = (str) => {
    const strSet = new Set();
    for (let i = 0; i < str.length; i++) {
      if (strSet.has(str[i])) return false;
      strSet.add(str[i]);
    }
    return true;
  }
  ```

***
# LUNCH
***

# [3rd Lecture](https://youtu.be/uGohVrgYrpQ) w/Ben Nelson: Solutions to Data Structures:
## [ms](https://youtu.be/uGohVrgYrpQ): STACK
- **SOLUTIONS AVAILABLE IN "solution" BRANCH OF GITHUB PROJECT**
- underscore variables indicate they'reprivate
- get adds the functionality which allows you to invoke the size method without parentheses

```js
class Stack {
  constructor() {
    this.storage = []
  }
  add(value) {
    this.storage.push(value);
  }
  remove() {
    return this.storage.pop();
  }
  get size() {
    return this.storage.length;
  }
}

const stack = new Stack();
```

## [ms](https://youtu.be/uGohVrgYrpQ): QUEUE

```js
class Queue {
  constructor() {
    this.storage = []
  }
  enqueue(value) {
    this.storage.unshift(value);
  }
  dequeue() {
    return this.storage.pop();
  }
  get size() {
    return this.storage.length;
  }
}

const stack = new Stack();
```

## [ms](https://youtu.be/uGohVrgYrpQ): LINKED LISTS

```js
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToTail(fromOutside) { /* replaces the tail with a new value that is passed in. */
    const node = {
      value: fromOutside, // <--- e.g. 'The Godfather'
      next: null
    };
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  removeHead() { /* removes and returns the head node. */
    if (this.head === null) return null;
    if (this.head === this.tail) {
      const head = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    }
  }
  contains(x) { /* should searth through the linked list and return true if a matching value is found. */
    if (this.head === null) return false;
    const searchLinkedList = (node) => {
      if (node.value === value) return true;
      if (node.next === null) return false;
      return searchLinkedList(node.next);
    };
    return searchLinkedList(this.head);
  }
}

```

## [ms](https://youtu.be/uGohVrgYrpQ): HASHING FUNCTION / HASH TABLE
- extra credit to handle resizing... (uncomment)
- handling collisions and conflicts with the hash table with or without resizing hash table
- limited array is the table
- get index below max is hashing function

```js
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  insert(key, value) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);

    if (bucket === undefined) {
      this.storage.set(index, [[key, value]]);
      return;
    }

    // bucket.forEach((cell => {
    for (i = 0; i < bucket.length; i++) {
      const cell = bucket[i];
      if (cell[0] === key) {
        cell[1] = value;
        this.storage.set(index, bucket);
        return;
      }
    // }));
    }
    bucket.push([key, value]);
    this.storage.set(index, bucket);
  }

  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (bucket === undefined) return undefined;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket [i][0] === key) return bucket[i][1];
    }
  }
  remove(key) {
    const index = getIndexBelowMax.key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (bucket.length === 1) {
      const value = bucket[0][1];
      this.storage.set(index, undefined);
      return value;
    }
    bucket.forEach((pair, i) => { // <--- could do a "filter" instead of forEach
      if (pair[0] === key) bucket.splice(i, 1); // <---- removes that pair from bucket
      this.storage.set(index, bucket);
    });
  }
}
```

- reworking for extra credit

```js
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  checkCapacity() { // <--- check if storage array over 75%,
    let fullCells = 1;
    this.storage.each((bucket) => {
      if (bucket !== undefined) fullCells++;
    });
    return (fullCells / this.limit) > 0.75; //  returns true if greater than 75%
    // if (fullCells / this.limit > 0.75) return true;
  }

  resize() {
    this.limit *= 2; // <--- doubles storage, then rehashes vvv
    const oldStorage = this.storage;
    this.storage = new LimitedArray(this.limit);
    oldStorage.each(bucket) => {
      if (bucket === undefined) return;
      bucket.forEach((pair) => {
        this.insert(pair[0], pair[1]); // <--- can use spread operator
      })
    }
  }

  insert(key, value) {
    if (this.checkCapacity()) this.resize; //<--- if too full, resize the hash table
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);

    if (bucket === undefined) {
      this.storage.set(index, [[key, value]]);
      return;
    }

    // bucket.forEach((cell => {
    for (i = 0; i < bucket.length; i++) {
      const cell = bucket[i];
      if (cell[0] === key) {
        cell[1] = value;
        this.storage.set(index, bucket);
        return;
      }
    // }));
    }
    bucket.push([key, value]);
    this.storage.set(index, bucket);
  }

  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (bucket === undefined) return undefined;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket [i][0] === key) return bucket[i][1];
    }
  }
  remove(key) {
    const index = getIndexBelowMax.key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (bucket.length === 1) {
      const value = bucket[0][1];
      this.storage.set(index, undefined);
      return value;
    }
    bucket.forEach((pair, i) => { // <--- could do a "filter" instead of forEach
      if (pair[0] === key) bucket.splice(i, 1); // <---- removes that pair from bucket
      this.storage.set(index, bucket);
    });
  }
}
```

***

# Sprint Review w/Ben Nelson

***

# [4th Lecture](https://youtu.be/YKQSnvZGfDE) - Ben Nelson:Pair Prog #2 - Data Structures 2
- Data Structure will have a solution branch (in addition to master branch)
## [ms](URL): Trees
- Top node which has children.
- children have as many children as they need
- those kids have kids
- Like a family/geneaology tree

## [ms](URL): Binary Search Trees (sorted binary tree)
- Binary search algorithm and binary search tree.
- each node can only have two children max, 0, 1 or 2.
- binary search tree ... order enforced

## [ms](URL): Graphs
- nodes, or, "vertices" (and "edges" - connections, one or two way connections) can be connected to any other node
- used in social networks
- "weighted" edges

### [ms](URL): Review
- trees
- binary trees
- graphs
- "a linked list is like a tree where each node only has one other node child"

## [ms](URL): representing this in CODE
- use arrays, objects, whatev works to emulate the pattern

# TREE
```js
const tree = {
  value: 5,
  children: [
    {
      value: 10,
      children: []
    },
    {
      value: 12,
      children: []
    },
    {
      value: 2,
      children: []
    }
  ]
};
```

# BINARY TREE

```js
const binaryTree = {
  value: 5,
  left: {
    value: 2,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: {
        value: 8,
        left: null,
        right: null
      }
    }
  },
  right: {
    value: 9,
    left: null,
    right: null
  }
};
```

# GRAPH

```js
const graph = [
  {
    value: 3,
    edges: [graph[1]]
  },
  {
    value: 15,
    edges: [graph[0]]
  },
  {
    value: 99,
    edges: [graph[0]]
  }
];
```

## use ES6 classes to make these objects

#### [ms](URL): Setup for Pair Partner Programming #2
- DM w/me, partner Ryan and SunJieMing
- https://github.com/SunJieMing/LS-Data-Structures-II

##### fin
