import React from "react";
//import LoginForm from "./LoginForm";
import styled, { css } from "styled-components";
import "./LoginPage.css";

const LoginPageDiv = styled.div`
  padding-top: 8%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginLogoImg = styled.img`
  width: 40%;
  height: auto;

`;

const LoginForm = styled.form`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LoginFormInput = styled.input`
  width: 250px;
  height: 30px;
`;

const LoginButton = styled.button`
  width: 250px;
  height: 30px;
  background: black;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
`;

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
      <LoginPageDiv>
        <LoginLogoImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt="Instagram word logo"
        />
        <h2>Login to Your Account</h2>
        <LoginForm onSubmit={this.login}>
            <LoginFormInput 
            onChange={this.handleChanges}
            placeholder="Username" />
            <LoginFormInput 
            onChange={this.handleChanges}placeholder="Password" />
            <LoginButton>Login</LoginButton>
          </LoginForm>
        {/* <LoginForm handleChanges={this.handleChanges} login={this.login} /> */}
      </LoginPageDiv>
    );
  }
}

export default LoginPage;
