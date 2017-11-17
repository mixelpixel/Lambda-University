// https://youtu.be/rb95tWqHzCQ
// https://piazza.com/class/j63w1pdyopf7kj?cid=121
/* eslint no-console: 0 */

/*
 * 1) String Compression w/Manisha
 */
 function stringCompression(string) {
   let currentChar = null;
   let compressedStr = '';
   let charCount = 1;
   for (let i = 0; i <= string.length; i++) {
     if (string[i] === currentChar) charCount++;
     if (currentChar === null) currentChar = string[i];
     if (string[i] !== currentChar || string[i] === undefined) {
       compressedStr += currentChar;
       compressedStr += charCount;
       charCount = 1;
       currentChar = string[i];
     }
   }
   return compressedStr.length < string.length? compressedStr : string;
 }

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
 // Given a string of four digits, generate all the possible four-letter combinations.

function genCombs(digits) {
  const phoneDigitsToLetters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
  };

  let answer = [];

  const innerFunc = (currentWord, rest) => {
    if (rest.length === 0) {
      answer.push(currentWord);
      return;
    }
    const currentDigit = rest[0];
    const letters = phoneDigitsToLetters[currentDigit];
    for (let i = 0; i < letters.length; i++) {
      letter = letters[i];
      innerFunc(currentWord + letter, rest.slice(1));
    }
  }

  innerFunc('', digits);
  return answer;

}

console.log(genCombs('2345'));
