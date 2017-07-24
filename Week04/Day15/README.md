# Lambda University - July 24, 2017: Day 015, Monday
## Coding Challenge #
- "String Compression" available in https://github.com/ryanhca/CS1-Code-Challenges
***
Ben Nelson
Ryna Hamblin
Tai The Thai
Sean Chen
Emily Sperry
Christine Gierer
GUEST LECTURER
NO_VIDEO_RECORDED
***
# [1st Lecture](WAS_VIDEO_RECORDED) w/Sean Chen: Review Code Challenge #10: array
***
# [2nd Lecture](WAS_VIDEO_RECORDED) w/Sean Chen: Sprint Review LS-React-1
***
# [3rd Lecture](VIDEO_RECORDED_NOT_POSTED) w/Ben Nelson: Project Review LS-React-1 SOLUTION
- Try developing with an incognito to avoid browser caching/optimization
- Webpack reads React code (incl JSX) and transpiles/converts it to plain html/css
- Babel transpiles ES6 to ES5
- `create-react-app` to make base React application
- localhost 80 gets to outside world
- ip add 127.0.0.1:8080 is same as localhost:8080
- favicon - little grfx for the browser tab

## []() - Solution branch
- https://github.com/mixelpixel/LS-React-1/tree/solution
- HTML INSIDE OF JAVASCRIPT FILES IS JSX

### []() React imports
  - node modules don't need `./`
  - files you've created need the path `./../../etc`
  - React presumes `.js` files

### []() - Make Components ES6 Classes or Functions
- Importing into each component:
  ```jsx
  import React, { Component } from 'react';

  class App extends Component {
    ...
  }
  ```
- Same effect a destructured import statement (an ES6 thing)
  ```jsx
  import React from 'react';

  class App extends React.Component {
    ...
  }
  ```
- Classes need a render method to return the JSX we'll display
- and we need an export statement

### []() Q&A
- if you need access to LIFECYCLE METHODS or the CONSTRUCTOR if the component has STATE, then YOU NEED A CLASS
- if it's just props and you are spitting out JSX, then a function
- One component per file
- import and export explanation

### []() TodoForm
- State
- use semantic syntax <form></form> for wrapping the elements used to capture data from user
- <input /> is a SELF CLOSING TAG
- the return needs everything nested in one JSX element, e.g.
  ```jsx
  render() {
    return (
      <form>
        <input />
      </form>
    )
  }
  ```

- Updating the state with new input
- using input specific tags

  ```jsx
  updateNewTodo(event) {
    this.setState({newTodo: event.target.value});
  }
    render() {
      return (
        <form>
          <input
            onChange={this.updateNewTodo}
            placeholder="...add todo"
            value={this.state.newTodo}
          />
        </form>
      )
    }
  ```

### []() bind(this)
```js
this.updateNewTodo = this.updateNewTodo.bind(this);
```

### []() adding the todo
- new method, matching bind(this)

### []() event.preventDefault(); !!! (for when using <form>s)

### []() onSubmit

### []() binding in constructor is recommended, but it can be done in the render()

### []() more on bind(this)
- IF YOU ARE USING THE `this` KKEYWORD IN A METHOD< THEN YOU NEED TO ADD THE BIND METHOD

### []() setState
- this.setState({}) is ASYNCHRONOUS

### []() don't modify state directly, use setState and don't modify the element, copy/make new one w/mods
- e.g. use concat to make a new array
- setState alerts the whole page to the state change

### []() Q&A

### []() feeding todo items into the display
- setting up TodoList as a function
- using props
- (not technically using React IN the file, but when all the JSX is transpiled, it needs the import statement)

### []() map
- inside the curly braces gets evaluated as JavaScript

### []() extra credit
- `<input type="checkbox">`
- localStorage: key:value for strinss
  - localStorage.getItem & localStorage.setItem
  - JSON.stringify() & JSON.parse() turns hash into string and string into hash :)


***
#### LUNCH
***
# [4th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Speaker: LS-React-2
- Pair Programming #5: https://github.com/ryanhca/LS-React-2.git
***
# [5th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Speaker: topic
# Sprint / Q&A
***
# fin
