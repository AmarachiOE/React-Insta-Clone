import React, { Component } from "react"; // instead of class App extends React.Component
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/Authentication/withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
