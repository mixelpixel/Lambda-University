// Eaxample from lecture
// Functions can return functions.

const outer = () => { // <---- outer is a higher order function; it returns another function
  const message = 'hi'
  return () => {
    console.log(message); // CLOSURE - the inner scope can look back at it's parents scope
  };
};

const inner = outer();

console.log(inner); // ---> [Function] // "outer()" is "inner()"s parent

const message = 'sup'; // <------ Unnoticed by the function
inner(); // ---> hi

// use case: private variables (private, i.e. isolated), decorating functions, etc.


// Cache - Memcache: layer between server and DB
const cache = (cb) => {
  const cache = {};
  return () => {
    cb();
  };
}
