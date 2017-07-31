import React from 'react';
import '../../App.css';


class About extends React.Component {
	constructor() {
	  super();
	  this.state = {
	    klass: 'about'
	  };
	  console.log(this.state)
	}
   render() {
      return (
        <div>
          Yolo About
        </div>
      )
   }
}

export default About;
