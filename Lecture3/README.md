# Lambda University - Thursday, July 6, 2017
## GUEST LECTURE: Karthik Viswanathan
- underscorejs.org functions
## each
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

### map
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

### reduce
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

  for(; i <elements.length; i++ {
    memo = cb(memo, elements[i]);
  }
  return memo;
};
```

- Ryan's solution
if (memo === undefined) {
    memo = elements[0];
    for (let i = 1; i < elements.length; i++) {
      memo = cb(memo, elements[i]);
    }
    return memo;
  }

## Flatten
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

#### Recursion example with factorial @ ~2:10pm
```
const factorial = (n) => {
  return n * factorial(n - 1);
}
```

- Still need a base case tho
```
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

## @~2:30 const v let with push
