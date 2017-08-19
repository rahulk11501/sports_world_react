import React from 'react';
import '../../App.css';

class News extends React.Component {
	constructor() {
	  super();
	  this.state ={}
	  this.state = {
	    klass: 'news'
	  };
	  console.log('from news ',this.state)

	}
   render() {
      return (
         <div>
            Yolo News
         </div>
      )
   }
}

export default News;
