import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'whatwg-fetch';
import './App.css';
import Home from '../views/Home';
import About from '../views/About';
import TimeForm from '../TimeForm'

const App = props => {
  return (
    <Router>
      <Switch>
        <Route
          path="/about"
          component={About} />
        <Route
          path="*"
          component={Home} />
      </Switch>
    </Router>
  )
}

export default App;
