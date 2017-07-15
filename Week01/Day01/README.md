# Lambda University - July 03, 2017: Day 001, Monday
#### Opening session
- Zoom for meetings: https://zoom.us/j/858115322
- UndescoreJS: http://underscorejs.org/
- first weeks homework: https://github.com/SunJieMing/Advanced-JavaScript
- Introductions
- Class polling: https://b.socrative.com/student/

# [1st Lecture](https://youtu.be/HJJDTYi9g20): ES5 and ES6, Arrow Functions, `const` & `let`, Callback Functions, Semi-Colons ;;;
### Ben Nelson

## [@start](https://youtu.be/HJJDTYi9g20) ES6 (aka ES2015, ECMAScript 6)
- https://babeljs.io/ Babel is a compiler for ES6 script. Bebal turns ES6 into ES5 (ECMAScript 5)
- We're coding in a node environment: node is a JavaScript Runtime. Node is a C++ application running on your computer - it is a JavaScript runtime compiler outside of the browser. They took the Chrome "V8" engine (the C++ code in the Chrome browser that runs the javascript code) and made node out of it (with some extra magic).
- Running ES6 in the browser involves an extra step of compiling it first - a client side development thing...
- https://babeljs.io/learn-es2015/
- Lots of "Syntactic Sugar" in ES6
- https://jsbin.com/ useful as a scratchpad (or https://jsfiddle.net)
- NOTE: for the class use Google Chrome (or Firefox. Don't use Safari or Explorer) - that's what Ben is using.

## [@9m](https://youtu.be/HJJDTYi9g20?t=9m) ARROW Functions
ES5 function declaration & function expression

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

ES6 Arrow function Basic syntax

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

## [@15m25s](https://youtu.be/HJJDTYi9g20?t=15m25s) `const` and `let` KEYWORDS
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

## [@22m](https://youtu.be/HJJDTYi9g20?t=22m) Single line ARROW function implicit `return`
```js
const multiply = (x, y) => x * y;
```

- curly braces need explicit return

```js
const multiply = (x, y) => { return x * y };
```

### [@23m15s](https://youtu.be/HJJDTYi9g20?t=23m15s) An arrow function DOES NOT have a `this` binding
- use arrow functions by default, but if you need things like `this` use the function declaration

#### [@24m40s](https://youtu.be/HJJDTYi9g20?t=24m40s) Ben's aside

## [@25m45s](https://youtu.be/HJJDTYi9g20?t=25m45s) CALLBACK FUNCTIONS
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
// foo()  // <--- invoked or evaluated function
bar();    // ---> hi
foo(bar); // ---> hi

const baz = () => {
	console.log('sup')
};

foo(baz); // ---> sup

```

### [@34m14s](https://youtu.be/HJJDTYi9g20?t=34m14s) Homework 1 preparation & Q&A

## [@48m45s](https://youtu.be/HJJDTYi9g20?t=48m45s) Semi-colons ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
- in general if you have = `return` * / % operators, function invocations -  use semi-colons.
- best to use them as you learn and be consistent.
- react router example for semi-colon use standards

### [@51m40s](https://youtu.be/HJJDTYi9g20?t=51m40s) LINTer
- based on AirBnB style guide
- https://github.com/airbnb/javascript

### more homework prep, etc

### fin

***
#### Austen on LAMBDA UNIVERSITY INCOME AGREEMENT
# Lunch
***

# [2nd Lecture](https://youtu.be/gaLr7_BMgD0): `this`, `.call()` `.apply()` & `.bind()`) and CLOSURE
### Ben Nelson

## [@26s](https://youtu.be/gaLr7_BMgD0?t=26s): `this` KEYWORD and OBJECT
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

### [@12m50s](https://youtu.be/gaLr7_BMgD0?t=12m50s) `.call()`, `.apply()` and `.bind()` METHODS
- Call: comma separated values foo.call(pizza, 5, 5);
- Apply: pass in an array foo.apply(pizza, [5, 5])
- Bind: binds in for limited context of specific version which is always permanently bound const boundFoo = foo.bind(pizza);
- ES5 constructor

### [@22m](https://youtu.be/gaLr7_BMgD0?t=22m) 4 RULES for determining what `this` refers to:
1. global / window object
2. object calling the method
3. bind, call, or, apply
4. constructor

#### [@24m42s](https://youtu.be/gaLr7_BMgD0?t=24m42s)
- Polling the cLambda U. students
- https://b.socrative.com/student/
- sign in to lambdaschool...

## [@29m45s](https://youtu.be/gaLr7_BMgD0?t=29m45s) CLOSURE
- functions can return functions
#### [@40m46s](https://youtu.be/gaLr7_BMgD0?t=40m46s) Memcache
- combines closure and callback

#### [@42m30s](https://youtu.be/gaLr7_BMgD0?t=42m30s) Q&A etc.
- Homework: work or arrays, closure, objects & this FIRST

***

# [3rd Lecture](NO_VIDEO_POSTED): Class Functions, `constructor`, `for` LOOPS, `do` `while` LOOPS & RECURSION
### Ben Nelson
- NOTE: Clear with Ben if you need to miss a class

## `constructor` CLASS FUNCTIONS
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

## `for` LOOPS, `do` `while` LOOPS & RECURSION
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
