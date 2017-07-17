# Lambda University - July 14, 2017: Day 009, Friday
## Coding Challenge #5
- "evenOccurences" available in https://github.com/ryanhca/CS1-Code-Challenges

# [1st Lecture](https://youtu.be/F0y2sJHQzzs) w/Ryan Hamblin: Code Challenge #4 review: largestPrimePalindrome & Coercion == vs. ===
- Coercion: https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md

```js
const largestPrimePalindrome = (number) => {

  const palindromeChecker = (number) => {
    const strNum = number.toString();
    const reversedStrNum = strNum.split('').reverse().join('');
    if (strNum == reversedStrNum) return true; // <--- NOTE THE USE OF "==" (NOT "==="): COERCION
    // if (strNum === Number(reversedStrNum)) return true;
    return false;
  };

  const primeChecker = (num) => {
    const squareRoot = Math.sqrt(num);
    if (num % 2 === 0) return false;
    for(let i = 3; i <= squareRoot; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // COUNTING DOWN FROM LARGEST IS MUCH MUCH MUCH FASTER
  for (let num = 1000; num >= 11; num--)
    if( palindromeChecker(num) && primeChecker(num) ) return num;

};

console.log(largestPrimePalindrome());
```

***
# LUNCH
***

# [2nd Lecture](NO_VIDEO_POSTED) w/Ryan Hamblin: Brown Bag
- Rubic's cube "talent" example
- Using Slack #CS1_help channel

***

# [3rd Lecture](https://youtu.be/KhJ95GoKxK0) w/Ben Nelson: Data Structures II Review / Q&A
- Trees, BST & Graphs
- Using the "debugger;" statement in the console.
- Online debugging visualizer: http://pythontutor.com/javascript.html

***

# fin
