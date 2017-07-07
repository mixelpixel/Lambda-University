# Lambda University - Monday, July 3, 2017: Day one
- Zoom for meetings: https://zoom.us/j/858115322
- Class polling: https://b.socrative.com/student/

## First Lecture: https://youtu.be/HJJDTYi9g20
## Second Lecture: https://youtu.be/gaLr7_BMgD0

***
### Opening session
- Zoom for meetings: https://zoom.us/j/858115322
- underscorejs.org
- first day homework: https://github.com/SunJieMing/Advanced-JavaScript
### Introductions
### Lesson
- ES6 (aka ES2015)
- https://babeljs.io/ compiler for ES6 script, turns it into ES5 (ECMAScript 5)
- node environment C++ JavaScript runtime compiler outside browser (the V8 engine is what Chrome runs in the browser)
- https://babeljs.io/learn-es2015/
- Lots of "Syntactic Sugar"
- https://jsbin.com/ useful as a scratchpad (or https://jsfiddle.net)
- use Google Chrome (or Firefox. Don't use Safari or Explorer) - that's what Ben is using.
#### Arrow Functions
- ES5 function declaration & function expression
```js
function foo(x, y) { // No type declarations
	// console.log(x * y); // ---> side effect
	return x * y;  // ----> return value
}

var multiply = function(x, y) { // FUNCTION EXPRESSION: variable assigned to an anonymous function
	return x * y;
};

var product = multiply(5, 5);
console.log(product); // ---> 25
```

- Arrow function Basic syntax
```js
const multiply = () => {

};
```

```js
const multiply = (x, y) => {
	return x * y;
};

var product = multiply(5, 5);
console.log(product); // ---> 25
```

### `const` and `let`
- always use `const` and when you can't use `let`
- `const` means we are not going to assign anything else to the variable
- `let` let's us assign something else to the variable
```js
const nums = [1, 2, 3, 4]
for (let i = 0; i < num.length; i++) { // <--- const would throw an error
	console.log(nums[i]);
}
```
- The lexical scope of `const` and `let` are a little more restricted to the code blocks, whereas var is restricted to the function.

### Single line arrow function implicit return
```js
const multiply = (x, y) => x * y;
```

- curly braces need explicit return
```js
const multiply = (x, y) => { return x * y };
```
### An arrow function DOES NOT have a `this` binding
- use arrow functions by default, but if you need things like `this` use the function declaration

### CALLBACK FUNCTIONS
- Functions are a "first class citizen"
- A callback funtion is a function you've passed to another function as an argument
- ES6 (these can both be re-written as one line)
```js
const foo = (cb) => { // cb is in uncalled state
	cb();               // cb() is invoked
};

const bar = () => {
	console.log('hi');
};

// foo    // <--- a block of code in uncalled state
// foo()  // <--- invoked function
foo(bar); // ---> hi
```

### Homework 1 review

### Semi-colons
- in general if you have = return * / % operators, function invocation -  use semi-colons.
- best to use them as you learn and be consistent.
- react router

### LINTer
- based on AirBnB style guide
- https://github.com/airbnb/javascript


### Income agreement

## More coding 4:11pm - THIS keyword
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
- `this` is an object we use to reference from inside a method
```js
const pizza = {
	toppings: ['pepperoni', 'bell pepper', 'onion', 'chese'],
	sauce: 'tomato',
	isReady: false,
	table: 4,
	bake() { // ES6 shorthand for declaring method on object
		console.log('the pizza is baking');
	}
};

pizza.bake(); // ---> the pizza is baking
```
### Call, Apply and Bind
- Call: comma separated values foo.call(pizza, 5, 5);
- Apply: pass in an array foo.apply(pizza, [5, 5])
- Bind: binds in for limited context of specific version which is always permanently bound const boundFoo = foo.bind(pizza);
- ES5 constructor
- 4 rules for determining what `this` refers to:
	1. global / window
	2. object calling the method
	3. bind, call, or, apply
	4. constructor

### https://b.socrative.com/student/
- sign in to lambdaschool

### Closure
- functions can return functions
- Memcache...

### ES6 classes / Syntax
- work or arrays, closure, objects & this

### Evening Lecture
- Clear with Ben if you need to miss a class

### Constructor functions
- ES5
- TEMPLATE for creating an object
```js
function User(options) {
	this.email = options.email;
	this.password = options.password;
	this.checkPassword = function(potentialPassword) {
		return this.password === potentialPassword;
	}
}

const user = new User({
	email: 'me@me.com'
	password: '12345'
})

console.log(user);
```

- ES6 `class` keyword
```js
class User {
	constructor(options) {
		this.email = options.email;
		this.password = options.password;
	}
	checkPassword = function(potentialPassword) {
			return this.password === potentialPassword;
	}
}

const user = new User({
	email: 'me@me.com'
	password: '12345'
})

console.log(user);
console.log(user.checkPassword('12345')); // ---> true
console.log(user.checkPassword('abc')); // ---> false
```

### For loops, do while loops & recursion
- everything written as a loop can be written recursively
- everything recursive can be written as a loop
- Functional programming
- Recursive function calls itself, e.g.
```js
function foo() {
	foo();
}
```

- The above is an infinite loop
- Need a base case to establish a condition for the recursion to stop (and you need to move closer to the base case.)
```js
function foo(n) {
	console.log(n);
	if (n === 0) return;
	foo(n -1);
}

foo(5);
```

- similar to a for-loop
```js
for (let i = 0; i < 5; i++) { // i-- would make an infinite loop
	console.log(i)
}
```
