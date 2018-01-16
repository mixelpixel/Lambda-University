import React, { Component } from 'react';
import ToDo from './component/todo';
import Clear from './component/clear';

class App extends Component {

  render() {
    return (
      <div>
        <Clear />
        <ToDo />
      </div>
    );
  }
}

export default App;
