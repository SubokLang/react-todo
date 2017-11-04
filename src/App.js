import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todolist from './components/TodoList';

var todos = [
  {
    id: 1,
    text: 'Walk the dog'

  },
  {
    id:2,
    text: 'Clean the yard'
  },
  {
    id: 3,
    text: 'Walk the cat'

  },
  {
    id:4,
    text: 'Clean the kitchen'
  }
]

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Todolist todos={todos}/>
      </div>
    );
  }
}

export default App;
