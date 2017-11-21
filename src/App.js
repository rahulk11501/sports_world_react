import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom'
import About from './components/about/about.js'
import Contact from './components/contact/contact.js'
import Home from './components/home/home.js'
import News from './components/news/news.js'
import Login from './components/login/login.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="sidenav">

          <li>
              <Link to="/" className="active">Home</Link>
          </li>
          <li>
              <Link to="/news">News</Link>
          </li>
          <li>
              <Link to="/about">About</Link>
          </li>
          <li>
              <Link to="/contact">Contact</Link>
          </li>
          <li>
              <Link to="/login">Login</Link>
          </li>
        </ul>
        <RouteClass />
      </div>

    );
  }
}

const RouteClass = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/news' component={News}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </main>
)

export default App;
