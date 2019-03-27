import React from "react";
import LoginForm from "./LoginForm";
import "./LoginPage.css";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
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
    //event.preventDefault();
    //const user = this.state.username;
    localStorage.setItem("username", true);
    //window.location.reload(); does this function work to reload??
  };

  render() {
    return (
      <div className="Login-Page">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt="Instagram word logo"
        />
        <h2>Login to Your Account</h2>
        <LoginForm handleChanges={this.handleChanges} login={this.login} />
      </div>
    );
  }
}

export default LoginPage;
