import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoList from './components/todolist'
import Todoredux from './components/todoredux/App'
import Async from './components/async'
import Home from './pages/Home'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <div className="nav">
          <Link to="/">home</Link>
          <Link to="/todolist">todolis</Link>
          <Link to="/redux">todolis + redux</Link>
          <Link to="/async">async</Link>
        </div>
        <Route exact path='/' component={Home}/>
        <Route path='/todolist' component={TodoList}/>
        <Route path='/redux' component={Todoredux}/>
        {/* <Route path='/async' component={Async}/> */}
      </Router>
    </div>
  );
}

export default App;
