# Lambda University - July 26, 2017: Day 017, Wednesday
## Coding Challenge #13
- "Constructors" available in https://github.com/ryanhca/CS1-Code-Challenges
***
# [1st Lecture](https://youtu.be/GfOknvrEAy8) w/Tai: Review Code Challenge #12 operators
***
#### LUNCH
***
# [2nd Lecture](VIDEO_RECORDED_NOT_POSTED) w/Sean Chen: LS-React-II Solution Review
## props v state
- [props v state](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)
- props are immutable
- state is mutable (generally states are private to their own component, unless you pass a parents state to a child explicitly)
- stateless and stateful components
- class based components (have state) and (stateless) functional components
  1. are `props` and `state` both keywords? No. They are React conventions. Use them.
  2. class components can have state & functional components are stateless? If need state, then use class

## life cycle methods
- https://facebook.github.io/react/docs/react-component.html

## the components

### simplified object notation
```js
const text = 'something';
const obj = {
  text
}
```

is the same as

```js
const text = 'something';
const obj = {
  text: text
}
```

### spread operator for using immutable data in a mutable copy.

## `import { findDOMNode } from 'react-dom';`
- targets elements in DOM

***
# [3rd Lecture](VIDEO_RECORDED_NOT_POSTED) w/Ben Nelson: Sprint Review

***
# [4th Lecture](https://youtu.be/wJatXrRg8rw) w/Ben Nelson: REDUX
- Pair Programming #6: https://github.com/sunjieming/LS-Redux.git
- http://redux.js.org
- movie example: https://github.com/SunJieMing/redux-example-movies
## [28s](https://youtu.be/wJatXrRg8rw?t=28s) what is Redux???
- Redux is just JavaScript, but it is a design pattern with some tolls to help implement the pattern
- Redux can be used anywhere
- Design pattern term: Application State Object >>> Goes in to React Components >>> HTML/DOM View
- INPUT: App State Object is a javascript object and hass all the data for your web site
- React is the FUNCTION
- OUTPUT is the webpage
- Redux handles changes to the Application State Object (similar to MVC, React would be just the V part and Redux is _like_ the Model and Control... but NOT IDENTICAL, very different semantics/concepts, etc...)
- We don't let React make the changes
- Ryan Hamblin: "Best way to look at Redux is to think if it as handling your application's state. Instead of having a bunch of components that have state all over your application, you take care of state in ONE single storage. It's pretty nifty."

### [@18m45s](https://youtu.be/wJatXrRg8rw?t=18m45s) getting started
- movie example: https://github.com/SunJieMing/redux-example-movies
- `create-react-app movie-intro`
### [@21m20s](https://youtu.be/wJatXrRg8rw?t=12m20s) the bridge
- installing redux
- installing redux-react
- USE THE SAVE FLAGS
### [@23m20s](https://youtu.be/wJatXrRg8rw?t=12m20s) the movie project
- index.js is the entry point
- `import { Provider } from 'react-redux';`
- `import { createStore } from 'redux';`

### [24m35s](https://youtu.be/wJatXrRg8rw?t=24m35s) Store and STATE object
- this.state vs State Object
- Ryan's comment about how to think of State

## [28m35s](https://youtu.be/wJatXrRg8rw?t=28m35s) Wrapping the `<App />`
- index.js
  ```js
  ReactDOM.render(
  <Provider store="{createStore(reducers, <paste dev tools for Redux here>)}">
    <App />
  </Provider>
  , document.getElementById('root'));
  registerServiceWorker();
  ```

- Provider attribute: store for the Application State Object

## [29m47s](https://youtu.be/wJatXrRg8rw?t=29m47s) reducers
- reducers are just functions and what they return sets the state on the object
- src/reducers/index.js
```js
import { combineReducers } from 'redux'
import moviesReducer from './movies';

// to accomodate an array of movie titles
// and the selection of one movie
const rootReducer = combineReducers({
  movies:
});

export rootReducer;
```

- src/index.js
```js
import reducers from './reducers'  <--- implicitly looks for /reducers/index.js
```

- anonymous functions are also known as LAMBDAS or lambda functions !!!!!!!!!
- REDUCERS CONTROL WHAT THE STORE (THE BIG STATE) LOOKS LIKE

## [40m](https://youtu.be/wJatXrRg8rw?t=40m) Redux dev tools
- https://github.com/zalmoxisus/redux-devtools-extension
- Chrome extension: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
- src/index.js
```js
ReactDOM.render(                          /* vvvvvv THIS vvvvvv */
  <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
```

## [43m40s](https://youtu.be/wJatXrRg8rw?t=43m40s) connect, mapStateToProps and HIGHER ORDER FUNCTION call!
- wiring in all the Redux magic!
- in src/Movies.js:
```jsx
import React, { Component } from 'react';
import { connect } from 'react-redux'; // <--- importing connect

class Movies extends Component {
  render() {
    console.log(this.props);
    return (
      <div>Movies!</div>
    );
  }
}

const mapStateToProps = (state) => { //<--- get stuff from Application State and feed it to Component

}

export default connect(mapStateToObject)(Movies);; // <--- HIGHER ORDER FUNCTION
```

- NOW INSIDE THE FUNCTION WE CAN ACCESS THE PROPS!!!!
- we can plug stuff from Application State Object into React Component
- the `console.log(this.state);` statement makes this show up in the Dev Tools:
```console
Movies.js:6
Object {movies: Array(3), dispatch: function} // <----
```


## [49m21s](https://youtu.be/wJatXrRg8rw?t=49m21s) smart components / dumb components containers
- React Components that are "aware" of the Redux State are "smart components"
- Components that aren't are "dumb components" or "containers"

## [50m37s](https://youtu.be/wJatXrRg8rw?t=50m37s) updating the state and interacting with it: the SWITCH statement
- the "selected movie"
- the SWITCH STATEMENT
```js
export default (selectedMovie = null, action) => {
  switch(action.type) {
    case 'MOVIE_SELECTED':
      return action.payload;
    default:
      return selectedMovie;
  }
};
```

## [56m10s](https://youtu.be/wJatXrRg8rw?t=56m10s) action creators
- action folder with index.js
```js
export const selectMovie = (movie) => {
  return {
    type: 'MOVIE_SELECTED',
    payload: movie
  };
};
```

- and the MovieDetail component:
```js
import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
  render() {
    if (this.props.movie === null) return null;
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.selectedMovie
  };
};

export default connect(mapStateToProps)(MovieDetail);
```

## [1h1m56s](https://youtu.be/wJatXrRg8rw?t=1h1m56s) how the State gets updated
- whenever an action is emitted it goes through EVERY reducer and a new state is returned
- ??? import { bindActionCreators } ???

## [1h5m50s](https://youtu.be/wJatXrRg8rw?t=1h5m35s) HOW THE STATE GETS UPDATED
- reducers
- switch
- using onsole.log()s to demonstrate how things pass through the reducers

## [1h12m25s](https://youtu.be/wJatXrRg8rw?t=1h12m25s) Diagram
- [react redux diagram picture from lecture](https://reax.s3.amazonaws.com/2016/Jul/Screen_Shot_2016_06_01_at_11_27_45_AM-1467832346235.png)
- another [redux infographic](https://i.redd.it/hl2aytgofz6x.png)

## [1h17m42s](https://youtu.be/wJatXrRg8rw?t=1h17m42s) Q&A/misc
***
# fin
