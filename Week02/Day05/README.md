# Lambda University - Monday, July 10, 2017: Day five
## Coding Challenge #1
- https://github.com/ryanhca/CS1-Code-Challenges
- fork, clone (or submodule) then solve. Once solved, make a pull request to submit solution.
- In general, solutions available next day...
- Good reference: "[Cracking the Coding Interview](http://www.crackingthecodinginterview.com/)" by Gayle Laakmann McDowell

# 1st Lecture - Ryan Hamblin
## [Section 1](https://youtu.be/oYDDke8hehw): `bind()`
- [bind.js](Week02/Day05/bind.js)
- `bind()` is a way to control the context of what `this` refers to

### [@9m13s](https://youtu.be/oYDDke8hehw?t=9m13s): Using `bind()` w/React classes
- some `class` & React stuff @ tail of lecture...

#### [@13m25s](https://youtu.be/oYDDke8hehw?t=9m13s): Q&A
- `let` vs `const` and lexical scope

## [Section 2](https://youtu.be/4kfkCJJsSuA): Week 1 Homework Review, Advanced JS "class.js"
- [class.js](Advanced-JavaScript/src/class.js)
- Q: how to solve using prototype methods?

## [Section 3](https://youtu.be/A3P23iO-bas): Week 1 Homework Review, Advanced JS "objects.js"
- [bind.js](Advanced-JavaScript/src/objects.js)
- built-in object methods to access key and values
- AirBnB refuses `for (let x in object) {...}`
- Q: correct that object elements are NOT indexed?
- instead of for loops, we use Objects.keys to return an array (list) of all the keys

### [@2m58s](https://youtu.be/A3P23iO-bas?t=2m58s): keys
### [@6m17s](https://youtu.be/A3P23iO-bas?t=6m17s): values
### [@6m54s](https://youtu.be/A3P23iO-bas?t=6m54s): map
### [@11m29s](https://youtu.be/A3P23iO-bas?t=11m29s): pairs
### [@15m30s](https://youtu.be/A3P23iO-bas?t=15m30s): invert

#### Sprint review

***
# Lunch
***

# 2nd Lecture - Ben Nelson @ ~4:10pm = 0
## [Section 1](https://youtu.be/oYDDke8hehw): Data Structures
- a way for structuring data in memory
- different patterns have different aspects
- Two data structure: A Stack and a Queue
  - STACK: like a stack of pancakes, or plates, L.I.F.O = Last In First Out
    - lke the history of visited URLs in a browser
  - QUEUE: FIFO = First In First Out
    - message queue (to handle asynchronous events)

### @8m STACK EXAMPLE
- push() and pop() with an array

### @9m QUEUE EXAMPLE
- push() and shift() with an array

@10m Homework: class Stack implement push and pop
@12m Homework: class Queue implement push and shift

@13m abstraction JS run in node and chrome by a c++ application which is compiled into assembly, machine code and some other magic b4 it becomes electrical

@16m
## [Memory cells: Arrays](https://youtu.be/oYDDke8hehw)

@20m
## [Memory cells: Linked Lists](https://youtu.be/oYDDke8hehw)
- adding to is efficient, but retrieving is not necessarily as efficient as an array

@23m Key Concept for Linked Lists in JavaScript / Socrative polling

@30 Q&A const v let, mutable vs. immutable, references, etc

@32 LINKED LISTS Example
- chaining objects together to make a linked list
- nesting objects
- ends up making different blocks in memory that are connected

```js
const nodeE = { // < ---------- TAIL
  value: 'The Matrix'
  next: null;
};
const nodeD = {
  value: 'Goofellas'
  next: nodeE;
};
const nodeC = {
  value: 'Star Wars'
  next: nodeD;
};
const nodeB = {
  value: 'Gone with the Wind'
  next: nodeC;
};
const nodeA = { // <------------ HEAD
  value: 'The Godfather'
  next: nodeB;
};

console.log(nodeA);

class LinkedList {
  constructor() {
    this.head = {
      value: 'something',
      nexy: {}
    };
    this.tail = null;
  }
};
```

@39 HASH TABLES
- actually how JS objects are implemented
- 'string' fed into hashing function which maps the string to a specific address in the hashing table.
- Constant Time Lookup
- 'name' : 'Ben' (key:value pair) go into hashing function, 'name' gets the location, Ben gets stored there. 'Ben' is now retrievable with the key: 'name'

@44 BIG O COMPLEXITY AND NOTATION
- http://bigocheatsheet.com/
- https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/
  @50 Orders of complexity
  - Linear growth O(n)
    - one for loop
    - doubling (increasing) the input doubles (increases) the processing time
  - Quadratic growth O(n^2)
    - one or more nested for loop
  @57 Constant time lookup: O(1)
  - same amount of time to get the first item as the last, each order of operation is identical

  x squared plus 2x plus 1 = a nested for-loop, 2 for-loops and a console.log

end @1hr8min
notes on pair programming


### Review / Q&A
