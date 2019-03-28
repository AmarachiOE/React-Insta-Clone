import React, { Component } from "react"; // instead of class App extends React.Component
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/Authentication/withAuthenticate";
import LoginPage from "./components/Login/LoginPage";



// const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

export default App;
