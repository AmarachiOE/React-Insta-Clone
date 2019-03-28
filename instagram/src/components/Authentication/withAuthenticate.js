import React from "react";
import styled, { css } from "styled-components";
import "../Login/LoginPage.css";


const LoginPageContainerDiv = styled.div`
  height: 100vh;
  background-image: linear-gradient(200deg, purple, orange);
`;

// const withAuthenticate = PassedComponent =>
//     class extends React.Component {
//         render() {
//             return <PassedComponent />
//         }
//     };

const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("username")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      if (this.state.loggedIn) {
        //if loggedIn object on this state is true, render PostsPage
        return <PostsPage />;
      } //else render LoginPage
      return (
        <LoginPageContainerDiv>
          <LoginPage />
        </LoginPageContainerDiv>
      );
    }
  };

export default withAuthenticate;
