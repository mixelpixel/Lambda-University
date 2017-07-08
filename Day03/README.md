# Lambda University - Thursday, July 6, 2017: Day three

# [1st Lecture](https://youtu.be/KNpkIDV5Jj0): Each, Map, Reduce, & Recursion Homework Review
## GUEST LECTURER: Karthik Viswanathan
- UnderscoreJS & Test Suite

## [@2m10s](https://youtu.be/KNpkIDV5Jj0?t=2m10s): Each
- accepts an array and a callback and calls the callback for each element in the array

```js
const each = (elements, cb) => {
  for (let i= 0; i < elements.length; i++) {
    cb(elements[i]);
  }
};
```

- 2nd test asks for element and the index

```js
const each = (elements, cb) => {
  for (let i= 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};
```

## [@6m10s](https://youtu.be/KNpkIDV5Jj0?t=6m10s): Map

```js
const map = (elements, cb) => {
  const result = [];
  for (let i= 0; i < elements.length; i++) {
    result.push(cb(elements[i]));
  }
  return result;
};
```

- refactor with previous solution for `each`

```js
const map = (elements, cb) => {
  const result = [];
  each(elements, (elem) => {
    result.push(cb(elements[i]));
  });
  return result;
};
```

## [@6m10s](https://youtu.be/KNpkIDV5Jj0?t=6m10s): Reduce
- start with second test - accept a memo argument
- THIS TEST USES THE CALLBACK FIVE TIMES
- satisfy the second test:

```js
const reduce = (elements, cb, memo) => {
  each(elements, (elem) => {
    memo = cb(memo, elem); // <-- returns a new memo which is used for the next callback
  });
  return memo;
};
```

- first test, memo is undefined, so just reducing the values into the array without mapping the memo value on to them.
- THIS TEST USES THE CALLBACK FOUR TIMES
- use the initial value without double processing it

```js
const reduce = (elements, cb, memo) => {
  if (memo === undefined) {
    memo = elements.shift(); // <--- removes first element from array and returns it to memo variable
  }
  each(elements, (elem) => {
    memo = cb(memo, elem);
  });
  return memo;
};
```

- passes both tests but there's a better way
- as is, passing the argument twice will give different results

```js
const reduce = (elements, cb, memo) => {
  let i = 0;
  if (memo === undefined) {
    memo = elements[0];
    i = 1; // <--- starting at second item when no memo is passed in
  }

  for(; i <elements.length; i++) {
    memo = cb(memo, elements[i]);
  }
  return memo;
};
```

- Ryan's solution

```js
if (memo === undefined) {
    memo = elements[0];
    for (let i = 1; i < elements.length; i++) {
      memo = cb(memo, elements[i]);
    }
    return memo;
  }
```

## [@45m](https://youtu.be/KNpkIDV5Jj0?t=45m): Flatten
- satisfy the two cases of no nested arrays and only a single level of nesting

```js
const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  // version 1 √
  const result = [];
  each(elements, (elem) => {
    if (Array.isArray(elem)) {
      const nestedArray = elem;            // <--- not going any deeper
      each(nestedArray, (nestedElem) => {  // <--- into nested arrays
        result.push(nestedElem);
      });
    } else {
      result.push(elem);
    }
  });
  return result;
};
```

- first two tests now pass
- what makes nested arrays not pass?
- to go deeper, need to re-apply all the code <<<< RED FLAG FOR RECURSION

### [@1h2m20s](https://youtu.be/KNpkIDV5Jj0?t=1h2m20s): Recursion example with factorial

```js
const factorial = (n) => {
  return n * factorial(n - 1);
}
```

- Still need a base case tho

```js
const factorial = (n) => {
  if (n === 1) { return 1; }
  return n * factorial(n - 1);
}
```

- recursive solution to flatten:
- To flatten an array, first flatten each nested arary and then CONCATENATE all the elements.
- the above solution IS the concatenation step
- so how to first flatten each nested array? Call flatten on every nested array
- using map function (flatten and then loop)

### [@1h22m33s](https://youtu.be/KNpkIDV5Jj0?t=1h12m33s): Recursion applied to factorial

```js
const flatten = (elements) => {
  elements = map(elements, (elem) => {
    if (Array.isArray(elem)) {
      return flatten(elem);
    }
    return elem;
  });

  const result = [];
  each(elements, (elem) => {
    if (Array.isArray(elem)) {
      const nestedArray = elem;
      each(nestedArray, (nestedElem) => {
        result.push(nestedElem);
      });
    } else {
      result.push(elem);
    }
  });
  return result;
};
```

- flatten in-line

```js
const flatten = (elements) => {
  // elements = map(elements, (elem) => {
  //   if (Array.isArray(elem)) {
  //     return flatten(elem);
  //   }
  //   return elem;
  // });

  // const result = [];
  let result = [];
  each(elements, (elem) => {
    if (Array.isArray(elem)) {
      const nestedArray = flatten(elem);
      result concat(nestedArray);
      // each(nestedArray, (nestedElem) => {
      //   result.push(nestedElem);
      // });
    } else {
      result.push(elem);
    }
  });
  return result;
};
```

### [@1h24m20s](https://youtu.be/KNpkIDV5Jj0?t=1h12m33s): Q&A, `const` v `let` with push
- const the BINDING is constant!




# After Lunch Lecture
## Lecturer: Ben Nelson @~5:10pm
 ""
### Reviewing basic JS with ES6
#### variables

```js
const x = 5;
```

- read as, "const x GETS five"
- x is a reference to the value 5
- variables get associated with values
- `const`, `let`, and `var`
- variables have a scope, global or local (to a function or code block)
- `console` is globally available, `Array`, `'Object`, `Number`, `window` etc are built in values.
- They are in the parent scope and available everywhere
  - keywords, globa/local parent/(child?) inner/outer
#### branching logic - a fork in the road

```js
if () {

}
```

```js
if (condition - either true or false) {
  do something; //<--- either a side effect vs. a return
}
```

- Ternary operators:

```
declare variableName = ifCondition ? thenThis : otherwiseThat;
```

#### For Loop

```js
for (let i = 0; i < 10; i++) {
  console.log(i); // <--- will console zero through nine
}
```

- Useful for iterating over Arrays with indexes. Shorthand forEach or underscorejs's "each" method

```js
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let i;

for (i = 0; i < letters.length; i += 2) {
  // console.log(letters[i], i);
}

for (let i = letters.length - 1; i >= 0; i--) {
  // console.log(letters[i]);
}

letters.forEach((letter) => {
  console.log(letter);
});
```

- `let` and `const` scoping (@5:55pm)

#### wordsToSentences problem review

```js
function wordsToSentence(words) {
  let sentence = '';
  for (let i = 0; i < words.length; i++) {
    sentence += words[i];
    if (!(i + 1 === words.length)) sentence += ' ';
  }
  return sentence;
  // return words.join(' ');
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

const sentence = wordsToSentence(['Hello', 'world!', 'How', 'are', 'you', 'doing?']);
console.log(sentence);
```





# End of Day Lecture
## Lecturer: Ben Nelson @~8pm
 ""
### Q & A
#### objects exercise: values
- an object is a set of key: value pairs
- all keys must be unique

```js
const obj = {
  x: 5,
  y: 12
  z: 32
};

// This method is denied in the Linter
for (let key in obj) {
  consle.log(key)
}

// instead
const keys = Object.keys(obj); // <--- returns array of strings

console.log(keys); // <--- prints an array

/* same as
[ 'x', 'y', 'z'].forEach((key) => { */
Object.keys(obj).forEach((key) => {
  console.log(key);
});

// Another mehthod
const mapValues = Object.keys(obj).map(key) => {
  return obj[key];
}

// return Object.keys(obj).map((key) => {
//     return obj[key];
// });
```

- instead use the Object.keys() method
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
- METHOD CHAINING
- NOTE: Objects.values() is an ES7 function

```js
const obj = {
  x: 5,
  y: 10,
  z: 15,
  10: 20
};

const key = 'x';


console.log(obj.x);
console.log(obj[key]);
console.log(obj[10]);
console['log'](obj.x)) // <--- can do it like this but don't
```
- everything you put in brackets is converted into a string

#### objects exercise: defaults
