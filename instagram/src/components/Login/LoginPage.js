import React from "react";
//import LoginForm from "./LoginForm";
import "./LoginPage.css";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
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
    localStorage.setItem("username", false); // check this
    window.location.reload(); //refreshing
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
        <form className="Login-Form" onSubmit={this.login}>
            <input 
            onChange={this.handleChanges}
            placeholder="Username" />
            <input 
            onChange={this.handleChanges}placeholder="Password" />
            <button className="login-button">Login</button>
          </form>
        {/* <LoginForm handleChanges={this.handleChanges} login={this.login} /> */}
      </div>
    );
  }
}

export default LoginPage;
