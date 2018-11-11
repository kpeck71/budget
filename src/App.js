import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'whatwg-fetch';
import './App.css';
import Home from './components/Home';
import TimeForm from './TimeForm'

const About = () => (<div><h1>About</h1><Link to='/'>Go home</Link></div>)

class App extends Component {

  render() {
    return (
      <Router>
       <Switch>
         <Route
           path="/about"
           render={(renderProps) => (
             <div>
               <Link to='/about/ari'>Ari</Link>
               <Link to='/about/nate'>Nate</Link>
               <Route
                 path="/about/:name"
                 render={(renderProps) => (
                   <div>
                     <About name={renderProps.match.params.name} />
                     <Link to='/'>Go home</Link>
                   </div>
                 )} />
             </div>
           )} />
         <Route
           path="/"
           render={(renderProps) => (
             <div>
               Home is underneath me
               <Home {...this.props} {...renderProps} />
             </div>
           )} />
       </Switch>
     </Router>
    );
  }
}

export default App;
