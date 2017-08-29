import React, { Component } from 'react';
import { Route }  from 'react-router-dom';

import  * as Pages from './pages'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
    }
  }

  componentWillMount() {
    if (localStorage.getItem('uuID')) {
      this.setState({loggedIn: true});
    } else {
      this.setState({loggedIn: false});
    }
  }

  doLogout() {
    localStorage.setItem('uuID', '');
    window.location = '/';
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h3>Welcome To Mongo III</h3>
          <img alt="mongo logo" className="App-logo" src={logo} />
          {loggedIn ? <div className="Inline-button">
            <button className="btn btn-primary btn-sm" onClick={this.doLogout}>Logout</button>
          </div> : null}
        </div>
        <Route path="/" exact component={ Pages.Login }></Route>
        <Route path="/create-user" component={ Pages.CreateAccount }></Route>
        <Route path="/posts" exact component={ Pages.BlogPosts }></Route>
        <Route path="/posts/:id" component={ Pages.SingleBlogPost }></Route>
        <Route path="/new-post" component={ Pages.CreatePost }></Route>

      </div>
    );
  }
}

export default App;
