# Lambda University - July 11, 2017: Day 006, Tuesday
## Coding Challenge #2
- "isUnique" available in https://github.com/ryanhca/CS1-Code-Challenges
- working on GitHub and git flow for updating repository locally

```console
$ git remote add upstream https://github.com/ryanhca/CS1-Code-Challenges.git
$ git pull upstream master
```

# [1st Lecture](https://youtu.be/juZvUpn4j5Y): w/Ryan Hamblin: Code Challenge #1 review
- Ryan's solution

```js
const longestString = (strArr) => {
  // tempStr variable to hold the string
  let tempStr = '';
  // loop over strArr
  strArr.forEach(str => {
    // if current string in arry is bigger than tempStr,
    // then update the variable tempStr
    if(str.length > tempStr.length) tempStr = str;
  })
  return tempStr;
};

console.log(longestString(['abc', 'def', 'gasdfasf', 'asdf', 'e', 'agwoaiengpoing', 'pp']));
```

## [@5m20s](https://youtu.be/juZvUpn4j5Y?t=5m20s): Jesh's solution

```js
const longstr = (arr) => {
  arr.sort((a, b) => {
    return b.length - a.length;
  });
  return arr[0];
}
```

***
#### LUNCH
***

# [2nd Lecture](https://youtu.be/bAkjh-jZY8M): w/Ryan Hamblin - Brown Bag: Visual Studio & IDE shortcuts
- code editor shortcuts
- https://code.visualstudio.com
#### video fin
- git/GitHub flow for Coding Challenges

***

# [3rd Lecture](https://youtu.be/7sMfjChMVaQ): w/Ben Nelson: Data Structure review & Q&A
## [@34s](https://youtu.be/7sMfjChMVaQ?t=34s): HASH TABLE FUNCTION
- getIndexBelow Max HASHES the string and returns hash index

const address = getIndexBelowMax(key, this.limit);
this.storage[address] = value;

## [@5m](https://youtu.be/7sMfjChMVaQ?t=5m): LINKED LIST
- head & tail reference
- Like a queue

```js
const node = {
  value,
  next: null
};

this.head = node;
this.tail = node;

...
```

- Conditions to check to Add to tail
  1. nothing in the list?
  2. 1 other in the list?
  3. more than 1?

- OBJECTS ARE PASSED BY REFEENCE
