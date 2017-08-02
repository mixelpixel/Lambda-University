# React Router Mini

Topics:
  * Single Page Applications
  * Routing, declaritive component based routing
  * Browser vs Hash History
  * Path and Component


## Project Description

### Initialize Project
* cd into repo and run `npm install` - DONE √
* run `npm start` - DONE √

### Steps for implementing React Router

* You'll notice we've already installed react-router-dom for you.
* Step 1: `import { BrowserRouter as Router } from 'react-router-dom';` inside your `index.js` file. - DONE √
* Step 2: Wrap your `<App />` component that you're passing to `ReactDOM.render()` with your `<Router> </Router>` component. - DONE √
* Step 3: open up your chrome `REACT DEV TOOLS` and notice your app is now all wrapped in `BrowserRouter` - DONE √
* Step 4: inside the `REACT DEV TOOLS` expand `<BrowserRouter>` and highlight `<Router>` and notice that here is a `"history"` object on props. - DONE √

### Steps for "Declaring" your routes

* Step 5: inside of your `App.js` file `import { Route } from 'react-router-dom';`
  - this is where we're going to declare and specify our router. - DONE √
* Step 6: create 3 `<Route />` setting their `path` prop equal to `/`, `/about`, `/contact` with their respective components. - DONE √
  - be sure to incluce the `exact` prop on the root component for `/` to make sure that it's rendering the exact component and not all the other components. - DONE √
* Step 7: you should now be able to type `/`, `/about`, `/contact` after `localhost:PORT/` to see what's a - DONE √

### Steps for setting up your Navigation

* Step 8: inside of `Navigation.js` `import { Link } from 'react-router-dom'` - DONE √
* Step 9: delete `NavLink` and replace it with `<Link />` -DONE √
  - Pro-tip: highlight NavLink and use `cmd/ctrl + d` to select them all at once. - DONE √
* Step 10: change the href on `<Link>` to `to` and specify the correct routes to navigate to. - DONE√
* Step 11: head over to your app and start navigating. You should be able to see your URLS changing their paths as you go. - DONE√

### Resources

* [Code Sandbox from Lecture](https://codesandbox.io/s/n58oqgwmP)
* [React Router 4 Quick Start Guide](https://reacttraining.com/react-router/web/guides/quick-start)
