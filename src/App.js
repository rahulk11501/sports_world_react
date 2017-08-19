import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
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
              <a href="/" className="active">Home</a>
          </li>
          <li>
              <a href="/news">News</a>
          </li>
          <li>
              <a href="/about">About</a>
          </li>
          <li>
              <a href="/contact">Contact</a>
          </li>
          <li>
              <a href="/login">Login</a>
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
