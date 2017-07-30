import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="sidenav">
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>

        <div className="content">
          <h2>Responsive Sidenav Example</h2>
          <p>This example use media queries to transform the sidenav to a top navigation bar when the screen size is 900px or less.</p>
          <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
          <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>
          <h3>Resize the browser window to see the effect.</h3>
        </div>
      </div>
    );
  }
}

export default App;
