// https://youtu.be/DuQmsbfmFrQ
// https://piazza.com/class/j63w1pdyopf7kj?cid=118
/* eslint no-console: 0 */

/*
 * 1) isUnique? w/Jason Campbell
 * input: string
 * output: true or false if all unique characters
 */

function isUnique(str) {
  // console.log(str.length);
  // const settify = new Set(str);
  // console.log(settify.size);
  return (str.length === new Set(str).size) ? true : false;
}

// TEST SUITE
console.log(isUnique('bob')); // false
console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefghijklmnopqrstuvwyz')); // true
console.log(isUnique('abcdefga')); // false
console.log(isUnique('bcdgefga')); // false
console.log(isUnique([1, 2, 3, 4, 5, 6])); // true
console.log(isUnique([1, 2, 3, 4, 5, 6, 3])); // false
console.log(isUnique([0, 1, 2, 3, 4, 6, 7, 8, 9, 9])); // false

/*
 * 2) linked list cycle w/Patrick
 */

/*
 * 3) bubble sort w/Jake
 */
