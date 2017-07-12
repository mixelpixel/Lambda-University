# Lambda University - Wednesday, July 5, 2017: Day two

# [1st Lecture](https://youtu.be/P6lw-HOaqmI): Each, Map Homework Review
### Ryan Hamblin

## [@5m20s](https://youtu.be/P6lw-HOaqmI?t=5m20s): Each
- reviewing assignment
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- array is an object

```js
const array = [1, 2, 3, 4, 5]

array.forEach(element, i) => {
  console.log('Element: ', element, 'index: ', i)
}
```

- for loops don't have to loop over arrays, forEach are specific to arrays.

## [@23m51s](https://youtu.be/P6lw-HOaqmI?t=23m51s): Map

### [@35m](https://youtu.be/P6lw-HOaqmI?t=35m): Q&A For Loops, for loops vs forEach, nested loops

***

# [2nd Lecture](https://youtu.be/dyyuDaZngXc): Reduce Homework Review
### Ryan Hamblin
## [@1m30s](https://youtu.be/P6lw-HOaqmI?t=1m30s): Reduce
- shift()
- default values

***
# Lunch
***

# [3rd Lecture](https://youtu.be/2mIvc0wc0oI): Function review, D.R.Y., const v let references
### Ben Nelson
- reviewing functions
- DRY - Don't Repeat Yourself
- functions 101

```js
function foo(/*input*/) {
  return /*output*/
}

function findVolumeOfCube(x) {
  const volume = x * x * x;
  return volume;
  console.log('the volume is:' + volume);
}

const volume = findVolumeOfCube(5);
console.log(findVolumeOfCube(5));
console.log(volume);
```

## [@14m51s](https://youtu.be/2mIvc0wc0oI?t=14m51s): Arrays

```js
const nums = [1, 2, 3, 4, 5];

nums.push(6); // <---- no const error

nums = [1,2,3]; // <----- const error

console.log(nums)
```

### [@19m45s](https://youtu.be/2mIvc0wc0oI?t=19m45s): More on Functions
- assigning a variable and returning the variable vs. returning the expression style diffs

## [@21m15s](https://youtu.be/2mIvc0wc0oI?t=21m15s): More on Functions

```js
function logHi() {
  console.log('hi');
}

function logSup() {
  console.log('sup');
}

function logHey() {
  console.log('hey');
}

const functions = [logHi, logSup, logHey];

for (let i = 0; i < functions.length; i++) {
  let functionAtIndex = functions[i]; //<--- let because it changes with each iteration? but apparently const works?
  functionAtIndex();
}
```

## [@27m35s](https://youtu.be/2mIvc0wc0oI?t=27m35s): Code walkthru

### [@37m35s](https://youtu.be/2mIvc0wc0oI?t=37m35s): Using UnderscoreJS
- need to 'require' it in the program?

***

# [4th Lecture](https://youtu.be/Y3NRA2-kvbY)
## Lecturer: Ben Nelson @~5:10pm - string literals/templates, object literals, spread operator, class
### [@4s](https://youtu.be/Y3NRA2-kvbY?t=4s) - String Templates/Literals
- backtick string formatting

```js
const printUserInfo = (user) => {
  console.log(`${user.username} has the email: ${user.email}.`);
};

printUserInfo({
  username: 'Ben',
  email: 'ben@lambdaschool.com'
});
```

### [@2m40s](https://youtu.be/Y3NRA2-kvbY?t=2m40s) - Object Literals
- Method declaration shortcut

```js
function sayHello() {
  console.log(`${this.username} says hello!`);
}

const user = {
  sayHello,
  username: 'Ben'
};

user.sayHello();
```

### [@6m](https://youtu.be/Y3NRA2-kvbY?t=6m) - Spread operator ...
- SPREAD operator (similar to apply from "call, apply and bind")

```js
const findVolume = (x, y, z) => {
  return x * y * z;
};

const dimensions = [5, 5, 5];

const volume = findVolume(...dimensions);

console.log(volume);
```

### [@8m24s](https://youtu.be/Y3NRA2-kvbY?t=8m24s) - Rest parameter
- REST PARAMETER

```js
// const foo = (...args) => {
const foo = (x, y, ...args) => {
  console.log(args);
};

foo(1, 1, 2, 3, 4, 'asdf');
```
### [@10m14s](https://youtu.be/Y3NRA2-kvbY?t=10m14s) - Built-In Keyword: Arguments, a psuedo array
- ARGUMENTS
- requires FUNCTION KEYWORD!!!
- arguments does not have access to arrays (or any?) prototype
- arguments does not have a lot of methods on it <---------------
- whereas ...args rest parameter does

#### [@11m28s](https://youtu.be/Y3NRA2-kvbY?t=11m28s) - vs. ...args
```js
const foo = (...args) => {
  console.log(args);
};

foo(1, 2, 3, 4, 5);
```
#### [@11m48s](https://youtu.be/Y3NRA2-kvbY?t=11m48s) - no arguments with with arrow functions, so use rest parameter (...args)
- Arrow function are always anonymous
- anonymous function needs to be attached to something to stick around

#### [@12m40s](https://youtu.be/Y3NRA2-kvbY?t=12m40s) - Q&A const v let
- arrow functions are always anonymous (needs to be attached to something else)

### [@16m](https://youtu.be/Y3NRA2-kvbY?t=16m) - Classes
- Classes
- shortcuts

```js
class User {
  // constructor(properties) {
  //   this.name = properties.name;
  //   this.email = properties.email;
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const me = new User({
  name: 'Ben',
  email: 'ben@lambdaschool.com'
});

console.log(me);
```

```js
const name = 'Ben';
const email = 'ben@lambdaschool.com';

// ES6
const me = {
  name,
  email
};


// --- old way
var me = {
  name: name,
  email: email
};
```
