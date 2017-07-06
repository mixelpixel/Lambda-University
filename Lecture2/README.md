# Lambda University - Wednesday, July 5, 2017
## Instructor: Ryan Hamblin

### First Lecture: https://youtu.be/P6lw-HOaqmI
- "CS1 = Each Map example and Review"
### Second Lecture: https://youtu.be/dyyuDaZngXc
- "CS1 Reduce example and Review"

***
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

# After Lunch Lecture - Ben
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
```

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
  // functions[i]();
  const functionAtIndex = functions[i];
  functionAtIndex();
}
```

## End of day lecture
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

- SPREAD operator (similar to apply from "call, apply and bind")
```js
const findVolume = (x, y, z) => {
  return x * y * z;
};

const dimensions = [5, 5, 5];

const volume = findVolume(...dimensions);

console.log(volume);
```

- REST PARAMETER
```js
// const foo = (...args) => {
const foo = (x, y, ...args) => {
  console.log(args);
};

foo(1, 1, 2, 3, 4, 'asdf');
```

- ARGUMENTS
- requires FUNCTION KEYWORD!!!
- arguments does not have a lot of methods on it
- whereas ...args rest parameter does
```js
const foo = (...args) => {
  console.log(args);
};

foo(1, 2, 3, 4, 5);
```

- Arrow function are always anonymous
- anonymous function needs to be attached to something to stick around

- Classes
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
