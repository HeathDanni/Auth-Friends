import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
