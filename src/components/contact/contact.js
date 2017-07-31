import React from 'react';
import '../../App.css';


class Contact extends React.Component {
	constructor() {
	  super();
	  this.state = {
	    klass: 'Contact'
	  };
	  console.log(this.state)
	  
	}
   render() {
      return (
         <div>
            Yolo Contact
         </div>
      )
   }
}

export default Contact;