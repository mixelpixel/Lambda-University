# Lambda University - July 26, 2017: Day 017, Wednesday
## Coding Challenge #13
- "Constructors" available in https://github.com/ryanhca/CS1-Code-Challenges
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
# [1st Lecture](VIDEO_RECORDED_NOT_POSTED) w/Tai: Review Code Challenge #12 operators
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
# [4th Lecture](https://youtu.be/wJatXrRg8rw) w/Speaker: REDUX
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

## the bridge
- `import { Provider } from 'react-redux';`
- `import { createStore } from 'redux';`
- index.js Wrapping the <App />
```js
ReactDOM.render(
<Provider store="{createStore(reducers, <paste dev tools for Redux here>)}">
  <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();

```

## reducers
- reducers are just functions and what they return sets the state on the object

```js
import reducers from './reducers' <--- implicitly looks for index.js
```

## connect
- `import { connect } from 'react-redux'`
- const mapStateToProps = (state) => {

}

## smart components / dumb components containers

## updating the state and interacting with it
- the "selected movie"
- the SWITCH STATEMENT

## action creators
- action folder with index.js

## how the State gets updated
- whenever an action is emitted it goes through EVERY reducer and a new state is returned




# Sprint / Q&A
***
# fin
