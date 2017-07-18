# Lambda University - July 17, 2017: Day 010, Monday
## Coding Challenge 6
- "CallBack Practice" available in https://github.com/ryanhca/CS1-Code-Challenges

# [1st Lecture](URL) w/Tai The Thai: Code Challenge #5 review evenOccurences
- VIDEO RECORDED

***

# 2nd Lecture w/Sean Chen: Class Review of Data Structures II
- NO VIDEO RECORDED, anonymous class comments on Pair Prog 2

***

# [3rd Lecture](https://youtu.be/a7qTzbUVVsY) w/Sean Chen: Data Structures II Solutions - Tree, Binary Search Tree & Graph
- Solutions available in the solutions branch on GitHub.
- In the GitHub URL note that this a GitHub "tree" not just the "tree.js" solution
- _________________________________________________________vvvv
- https://github.com/SunJieMing/LS-Data-Structures-II/tree/solution

***
# LUNCH
***

# [4th Lecture](URL) w/Ryan Hamblin: DOM Sprint for Pair Programming #3
### [Pair Programming #3 - LS-DOM](https://github.com/ryanhca/LS-DOM.git)
- READ THIS: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
- JavaScript history: how to deal with the DOM (backinnaday)
- Brendan Ike dubbed it (partly because Java was severside)
- Document Object Model
  - object oriented model which refers to documents (files)
  - reading files and turning them into web pages
  - DOM createss a big ol' tree.
- the DOM reads in HTML/CSS/JS and spits out the web page HTML tree.
- React works in a "virtual DOM"
- in the DOM the "nodes" are the ELEMENTS
- ELEMENTS have attributes which get assigned value:pair mapping
## using `python -m SimpleHTTPServer` from within the directory to display the webpage

```html
<!DOCTYPE html>
<html>
  <head> <!-- This is where stuff lives which does NOT get displayed to the user -->
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
  </body>
</html>
```

- head and body are "SIBLING ELEMENTS" & html their parent
- ! means important. ! with -- --, anything between the -- -- is ignored!
- HTML is layout/architecture/foundation, CSS is painting, placement of furniture, art on the walls, JS is the electricity in the house

## CSS Box Model Principle
- semantic markup: naming things what they are

```css
html, body{
  margin: 0;
  height: 100%;
  width: 100%;
  background-color: yellowgreen;
}

.wrapper-div {
  background-color: salmon;
  height: 700px;
  width: 500px;
}
```

-PADDING affects elements inside, MARGIN outside the element
-pseudo selectors, nth-child, etc CSS3 magic

## JS
- ES6 should work, if not, try ES5

***

# [4th Lecture](URL) w/Ben Nelson: Q&A
- VIDEO RECORDED
- DOM project: start with base HTML structure and layout, THEN move to HiFi
- try and get to replicating button hover "animations" and using JavaScript
- pointer, transparency with hovering
- flexbox
- do the navbar w/JS (drop down from Courses)
- Navbar doesn't have fixed position but reappears as u scroll down

***

# fin
