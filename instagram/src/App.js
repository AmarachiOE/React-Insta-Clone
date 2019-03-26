import React, { Component } from 'react'; // instead of class App extends React.Component
import './App.css';
import dummyData from "./dummy-data"; // don't us { dummyData } because not JSON object?
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from "./components/PostContainer/PostContainer";
//import CommentSection from "./components/CommentSection/CommentSection";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    };
  }

  // App should map over dummyData, passing each individual object as a prop to an instance of PostContainer

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData}/>
      </div>
    );
  }
}

export default App;
