// Whenever a function is contained in the GLOBAL scope, the value of "this" inside of that function will be GLOBAL Object === console.

function greet(name) {
  console.log('Hello ' + name);
  console.log(this);
};

greet('Ryan');

// Whenever a function is called by a PRECEEDING DOT, the object BEFORE THE DOT is "this".

const me = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(this.greeting + ' ' + name);
    console.log(this);
  },
};

me.sayHello('Ryan');

// Whenever a CONSTRUCTOR FUNCTION is used, "this" refers to the "SPECIFIC INSTANCE OF THE OBJECT" that is created and returned by the constructor function.

function Person(options) {
  // lexical envirnoment this === {};
  this.firstName = options.firstName;
  this.lastName = options.lastName;
  this.sayName = function() {
    console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName);
    console.log(this);
  }
};

const fred = new Person({
  firstName: 'Fred',
  lastName: 'Flintstone',
});

fred.sayName();

const barney = new Person({
  firstName: 'Barney',
  lastName: 'Rubble',
});

barney.sayName();


// Whenever JavaScript’s CALL OR APPLY method is used, "this" is EXPLICITLY DEFINED.

fred.sayName.call(barney);  // call takes usually just one argument
barney.sayName.apply(fred); // apply can take an array of arguments

// call and apply methods allow you to execute a function in a different context. 
// The first argument passed to either of these methods explicitly sets what "this" points to. 
// Because call and apply are explicit, they present the clearest case of what "this" points to. 
// This is evident by looking at the name property logged to the console by each invocation of the sayName method