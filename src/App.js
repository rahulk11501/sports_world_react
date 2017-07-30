import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="sidenav">
          <li>
              <a href="#"></a>
          </li>
          <li>
              <a href="#"></a>
          </li>
          <li>
              <Home></Home>
          </li>
          <li>
              <News></News>
          </li>
          <li>
              <Contact></Contact>
          </li>
          <li>
              <About></About>
          </li>
        </ul>

        <div className="content">
          <h2>Responsive Sidenav Example</h2>
          <p>This example use media queries to transform the sidenav to a top navigation bar when the screen size is 900px or less.</p>
          <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
          <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>
          <h3>Resize the browser window to see the effect.</h3>
        </div>
        <Main />
      </div>
      
    );
  }
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)


class Home extends React.Component {
   render() {
      return (
         <div>
            <a className="active" href="/">Home</a>
         </div>
      )
   }
}

// export default Home;

class News extends React.Component {
   render() {
      return (
         <div>
            <a href="/news">News</a>
         </div>
      )
   }
}

// export default News;

class About extends React.Component {
   render() {
      return (
         <div>
            <a href="/about">About</a>
         </div>
      )
   }
}

// export default About;

class Contact extends React.Component {
   render() {
      return (
         <div>
            <a href="/contact">Contact</a>
         </div>
      )
   }
}

// export default Contact;
export default App;
