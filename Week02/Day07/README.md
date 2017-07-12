# Lambda University - Wednesday, July 12, 2017: Wednesday Day 007
## Coding Challenge #?
- "reverseCase" available in https://github.com/ryanhca/CS1-Code-Challenges

# [1st Lecture](https://youtu.be/fHP0KMst_90) - Ben Nelson: GitHub flow & resolving merge conflicts
- To pull in daily coding challenges

```js
git remote add upstream https://github.com/ryanhca/CS1-Code-Challenges.git
git pull upstream master
```

***

# [2nd Lecture](https://youtu.be/SXvxbIEgOkw) - Ben Nelson: Code Challenge 2 review "isUnique"
## [basic solution](https://youtu.be/SXvxbIEgOkw?t=???)

```js
<code>
```

## [Big O considerations](https://youtu.be/SXvxbIEgOkw?t=???)
## [ES6 Set solution](https://youtu.be/SXvxbIEgOkw?t=???)
  - like an object, but no {key: value}, just {value}
  - unlike an array, a set is NOT ordered
  - Set is a collection of values that are all unique
  - `const x = new Set();`

  ```js
  const isUnique = (str) => {
    const strSet = new Set();
    for (let i = 0; i < str.length; i++) {
      if (strSet.has(str[i])) return false;
      strSet.add(str[i]);
    }
    return true;
  }
  ```

***
# LUNCH
***

# [3rd Lecture](URL) - Brown Bag:

***

# [4th Lecture](URL) w/Ben Nelson: Q&A
