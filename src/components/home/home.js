import React from 'react';
import '../../App.css';
import LinkedIn from 'react-linkedin-login';

class Home extends React.Component {
	constructor() {
	  super();
	  this.state = {
	    klass: 'home'
	  };
	  console.log(this.state)

	}

	callbackLinkedIn = (response) =>{
		console.log(response)
	}
   render() {
      return (
        <div className="content">
          <h2>Responsive Sidenav Example</h2>
          <p>This example use media queries to transform the sidenav to a top navigation bar when the screen size is 900px or less.</p>
          <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
          <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>
          <h3>Resize the browser window to see the effect.</h3>
					<LinkedIn
						clientId='75op08bvjw26s3'
						callback={this.callbackLinkedIn}

						text='LinkedIn' />
        </div>
      )
   }
}

export default Home;
