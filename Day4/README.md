# Lambda University - Friday, July 7, 2017: Day four
## Lecturer: Ben Nelson Ryan Hamblin

### Closure & Recursion review
- LECTURE:

- closure pertains to higher order functions
- [A closure is the combination of a function and the lexical environment within which that function was declared.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- the function that gets returned can go back and look into the declaring function
- function needs to store variables in a place that won't go away when function done

#### counter problem @~12:15
```js
const counter = () => {

  // // version 1 √
  // let count = 0;
  // const increment = () => count += 1;
  // return increment;
  //
  // // verion 2 √
  // let count = 0;
  // const increment = i => count += 1; // Interesting that this works - why?
  // return increment;
  //
  // // version 3 √
  // let count = 0;
  // return () => count += 1;

  // version 4 √
  let count = 0;        // <---
  return () => count++; // <---

};

// const myCounterFunction = counter;// <--- Not sure what the difference is here
// console.log(myCounterFunction()); // <---

// assigns variable name myCounterFunction to the same memory block where the function const lives
const myCounterFunction = counter(); // <---- references to the return of the counter function
console.log(myCounterFunction()); // 0

myCounterFunction(); // ++ 1
myCounterFunction(); // ++ 2
myCounterFunction(); // ++ 3
myCounterFunction(); // ++ 4
console.log(myCounterFunction()); // ++ 5
```

```js
const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const myCounterFunction = counter;

console.log(counter);
console.log(myCounterFunction);

const result = myCounterFunction();

console.log(result); // ---> JUST RETURNS THE INTERNAL FUNCTION!!!!!!!!!!!!!!!!
```

#### factorial problem @~12:43
- started explaining recursion with fibonacci, but switched to factorial
```js
const nFactorial = (n) => { // 5
  // !5 = 5 * 4 * 3 * 2 * 1
  if (n === 1) return 1;
  return n * nFactorial(n - 1); // 4
};

const factorial = nFactorial(5);
console.log(factorial);
```

#### matching leaves @~12:55
- constraint - will either find a number or object
- Depth first search (vs. breadth first)
```js
const checkMatchingLeaves = (obj) => {
  // leafValue

  // recursive function
    // iterate over the keys on obj
      // if obj[key] is an object then checkMatchingLeaves(obj[key])
      // if leafValue is undefined set it to obj[key]
      // check if leafValue is equal to obj[key] - return false if not
  // call recursive function

};

const tree1 = {
  x: 1,
  y: 1,
  z: 1,
  xa: {
    xx: 1,
    xy: 1,
    xz: 1,
    zz: {
      a: {
        b: {
          z: 1,
        },
      },
    },
    y: 2
  },
};
```
