// https://youtu.be/rb95tWqHzCQ
// https://piazza.com/class/j63w1pdyopf7kj?cid=121
/* eslint no-console: 0 */

/*
 * 1) String Compression w/Manisha
 */


/*
 * 2) w/Lois Balanced Brackets
 */

function balancedBrackets(str) {
  const obj = {'(': ')', '[': ']', '{': '}'};
  // iterate through the string and put counters on the open brackets
  // stack, use an array
  const stackArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stackArr.push(str[i]);
    } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      const opener = stackArr.pop();
      if (obj[opener] !== str[i]) return false;
    }
  }
  return true;
}

/*
 * 3) Telephone Words w/Wesley
 */
