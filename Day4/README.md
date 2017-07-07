# Lambda University - Friday, July 7, 2017: Day four
## Lecturer: Ben Nelson

### Closure & Recursion review
- LECTURE VIDEO:

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

# After Lunch @~4:00PM
## Lecturer: Ben Nelson Ryan Hamblin
### `this`
- LECTURE VIDEO: https://youtu.be/-9h9f600Q3Y

#### keyword: `this`
- `this` remains nothing until a given context - just like the pronoun "this"
-
#### 4 principles of `this`
1. Whenever a function is contained in the GLOBAL scope, the value of `this` inside of that function will be the WINDOW object.
  1a. WINDOW in node environment or browser
  ```js
  function greet(name) {
    console.log('Hello' + name);
    console.log(this); // <---- prints out the ENTIRE hug global object, parameters, methods, etc
  };

  greet('Ryan');
  ```

  1b. in JS everything is wrapped in a global scope
    - node uses global, window is browsers
  ```js
  global: {
    function greet(name) {
      console.log('Hello' + name);
      console.log(this);
    };
  }

  greet('Ryan');
  ```
2. Whenever a function is called by a PRECEDING DOT, the object BEFORE THE DOT is "this"
  2a. functions in objects are METHODS
  ```js
  const me = {
    greeting: 'Hello!',
    sayHello: function(name) {
        console.log(this.greeting + ' ' + name); // This `this` points to the me object, not it's global/WINDOW wrapper
        console.log(this); // <------ NOT pointing to the global object, now pointing to the CONTEXT of the me object
    },
  };

  me.sayHello('Ryan');
  ```
  2b. Hmmm:
  ```js
  const me = {
    self: this,
  }
  ```
3. Whenever a CONSTRUCTOR FUNCTION is used, `this` refers to the "SPECIFIC INSTANCE OF THE OBJECT" that is created and returned by the constructor function.
  <!-- 3b.
  ```js
  function person(options) {
    // lexical environment this === {};
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.sayName = function( {
      // console.log('Hello, my name is ' + options.firstName + ' ' + options.lastName) // <--- Works without the this = options declarations
      console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName)
    })
  }

  const fred = new person({
    firstName: 'Fred',
    lastName: 'Flintstone'
  });

  fred.sayName();

  const barney = new person({
    firstName: 'Barney',
    lastName: 'Rubble'
  });

  barney.sayName();
  ``` -->

4. Whenever JavaScript's CALL OR APPLY method is used, `this` is EXPLICITLY DEFINED.
  4a.
  ```js
  fred.sayName.call(barney); // call takes usually just one argument
  barney.sayName.apply(fred); // apply can take an array of arguments - "a"pply "a" is for array :)
  ```

call and apply methods allow you to execute a function in a different context
The first argument passed to either of these methods explicitly sets what `this` points to
Because call and apply are explicit, they present the clearest case of what `this` points to
This is evident by looking at the name property logged to the console by each invocation of the sayName method

***
## Break
## Lecture 2 @~4:50pm
### this.js HOMEWORK
- LECTURE VIDEO: https://youtu.be/LtW4eEK39SE
- Constructor functions
- abstraction of Prototypes
- Classes
