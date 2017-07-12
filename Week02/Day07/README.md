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
## [basic solution](https://youtu.be/SXvxbIEgOkw?t=???)

```js
<code>
```

## [Big O considerations](https://youtu.be/SXvxbIEgOkw?t=???)
## [ES6 Set solution](https://youtu.be/SXvxbIEgOkw?t=???)
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
class Stack {
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

# Sprint Review & Q&A w/Ben Nelson

##### fin
