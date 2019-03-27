import React from "react";
import LoginForm from "./LoginForm";

/* 

Build out the LoginPage component. You can design it how you like

In your components directory, create a directory called Login and add a new file called Login.js.

There should be a username input, a password input, and a Login button.

The component should invoke the login function in Login.js when a user logs in.

This login function should set a username on localStorage. You'll need to check local storage to see if a user is logged in.

Be sure to force the page to reload when a user logs in so that our component un-mounts and mounts again.

*/


class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  // For input field on LoginForm.js
  handleChanges = event => {
    this.setState({ 
      [event.target.name]: event.target.value 
    });
  };


  // For onSubmit on form on LoginForm.js
  login = event => {
    event.preventDefault();
    //const user = this.state.username;
    localStorage.setItem("username", true);
    window.location.reload();
  };


  // // the login function: (change name later)
  // login = () => {
  //   //localStorage.setItem("username");
  //   //event.preventDefault(); // no refreshing page

  //   if (!this.state.username) {
  //     localStorage.setItem("username", true);
  //   } else {
  //     localStorage.removeItem("username");
  //   }
  //   this.setState({ username: !this.state.username });
  // };
  // // toggling from false to true adds loggedIn to local storage

  render() {
    return (
      <div className="Login-Page">
        <LoginForm 
        handleChanges={this.handleChanges}
        login={this.login}/>
      </div>
    );
  }
}

export default LoginPage;
