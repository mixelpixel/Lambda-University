# Lambda University - Monday, July 10, 2017: Day five
## Coding Challenge #2
- "isUnique" available in https://github.com/ryanhca/CS1-Code-Challenges
- working on GitHub and git flow for updating repository locally

```console
$ git remote add upstream https://github.com/ryanhca/CS1-Code-Challenges.git
$ git pull upstream master
```

# 1st Lecture - Ryan Hamblin, VIDEO ??? recorded
## [Section 1](URL): Code Challenge 1 review
- Ryan's solution

```js
const longestString = (strArr) => {
  // tempStr variable to hold the string
  let tempStr = '';
  // loop over strArr
  strArr.forEach(str => {
    // if current string in arry is bigger than tempStr,
    // then update the variable tempStr
    if(str.length > tempStr.length) tempStr = str;
  })
  return tempStr;
};

console.log(longestString(['abc', 'def', 'gasdfasf', 'asdf', 'e', 'agwoaiengpoing', 'pp']));
```

- Jesh's solution

```js
const longstr = (arr) => {
  arr.sort((a, b) => {
    return b.length - a.length;
  });
  return arr[0];
}
```

***
# LUNCH
***
# Brown Bag meeting - VIDEO ??? Recorded
- code editor shortcuts
- https://code.visualstudio.com

***

# 2nd Lecture - Ben Nelson @ ~h:m = 0
## [???](URL): topic

# Review / Q&A / Sprint
