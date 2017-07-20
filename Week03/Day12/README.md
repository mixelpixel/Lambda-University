# Lambda University - July 19, 2017: Day 012, Wednesday
## Coding Challenge #8
- "Binary Search" available in https://github.com/ryanhca/CS1-Code-Challenges
-
# [1st Lecture](https://youtu.be/WVevuObf0Ak) w/Tai the Thai: Code Challenge #7 review - forLoopTimeout.js
- CLOSURE: `let` has it's own closure
- I.I.F.E.: Immediately Invoked Function Execution

```js
for (var i = 1; i <= 10; i++) {
	(function(index) {
    setTimeout(function() {console.log(index);}, 0);
  }) (i);
}
```

- let has it's own scoping each time
- Synchronous and Asynchronous code intro: https://www.pluralsight.com/guides/front-end-javascript/introduction-to-asynchronous-javascript

***
#### LUNCH
***

# [2nd Lecture](VIDEO_RECORDED_NOT_POSTED) w/Ryan Hamblin: Pair Programming 3 Review
- CSS grid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
- Firefox devtools latest released was developed with React
- http://www.csszengarden.com/
- Mobile devices don't use CSS: w-what?????????


# [3rd Lecture](https://youtu.be/exFWxA8mGLo) w/Speaker: Pair Programming 4 Introduction: REACT
- Document Object Model: DOM is the _map_ the browser makes, HTML/CSS/JS is the _territory_: map != territory
- HTML 5 tutorial: http://www.html-5-tutorial.com/
- JavaScript does a lot of the magic
- Displaying data for the user so they can interact with it

## [@2m35s](https://youtu.be/exFWxA8mGLo?t=2m35s) React
- **Pair Proramming #4:** https://github.com/ryanhca/LS-React-1
- paradigm for keeping things modular so you can scale up the project
- REUSEABILITY of components


### [@3m54s](https://youtu.be/exFWxA8mGLo?t=3m54s) CODE SAND BOX: https://codesandbox.io
- index.html & the "root" DIV!
	```html
	<div id="root"></div>
	```
- index.js & JSX (YES, it's a JavaScript file!)
- J.S.X. is JS w/HTML bits: JavaScript XML
- http://buildwithreact.com/tutorial/jsx

### [@12m02s](https://youtu.be/exFWxA8mGLo?t=12m02s) React COMPONENTS
- Hello.js
- importing React and exporting the component


- Virtual DOM built under the hood of React
- Reacts engine knows what to do with this JSX and "TRANSPILES" it as JS
- Each component can only return a single element!!!!!!!!!!
- more than one element? needs to be nested!!!
- React enviromnet setup... nice - auto reloading!!!
- Hot module replacement
- SASS compiler for CSS
- ESLint
- .gitignore `/node_modules`

## Webpack
- boilerplate

## STATE

## React dev tools
React lifecycle componenets
Every react component has a lifecycle
Methods to hijack that lifecycle
ComponentWillMount
ComponentDidMount
ComponentWillReceiveProps
ComponentDidUpdate
shouldComponentUpdate
render is a lifecycle component

***
### fin
