import React from 'react';
import '../../App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import LinkedIn from 'react-linkedin-login';


class Login extends React.Component {
	constructor() {
	  super();
    this.state={
     accessToken:"",
     uid:"",
     user:""
   }

   this.handleSubmit = this.handleSubmit.bind(this);
	 this.responseGoogle = this.responseGoogle.bind(this);

 }

 handleSubmit(response) {
 console.log(response)
}

 responseGoogle = (response) => {
  console.log(response);
}

callbackLinkedIn = (response) =>{
	console.log(response)
}



   render() {
      return (
<div>
        <FacebookLogin
           appId="199894820350363"
           autoLoad={false}
           fields="name,email,picture"
           scope="email,pages_messaging,user_friends,public_profile,user_birthday,user_education_history,user_friends,user_work_history"
           callback={this.handleSubmit}
           textButton="LOG IN WITH FACEBOOK"
           icon="fa fa-facebook-square"
           className="fb_button"
           />
					 <br/>


					 <GoogleLogin
				    clientId="662490150956-5d02d1s2m227gehp2sv8hc6mhaikhetu.apps.googleusercontent.com"
				    buttonText="Login"
				    onSuccess={this.responseGoogle}

				  />
					<br/>

      <LinkedIn
        clientId='81lrtbxpin7518'
        callback={this.callbackLinkedIn}
        text='LinkedIn' />
    )
  }


</div>

      )
   }
}

export default Login;
