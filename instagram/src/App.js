import React, { Component } from "react"; // instead of class App extends React.Component
import "./App.css";
import dummyData from "./dummy-data"; // don't us { dummyData } because not JSON object?
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
//import CommentSection from "./components/CommentSection/CommentSection";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      filteredPost: [], // for search bar
      searching: false
    };
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }

  // Filter Post function for Search Bar

  

  
  filterPostHandler = event => {
    
    const newDummyData = this.state.dummyData.filter( (currentPost) => {
      if (currentPost.username.includes(event.target.value)) {
        return currentPost;
      } 
    });

    if (event.target.value === "") {
      this.setState({ searching: false });
    } else {
      this.setState ({ filteredPost: newDummyData, searching: true });
    }

    
  }
  

  // App should map over dummyData, passing each individual object as a prop to an instance of PostContainer

  render() {
    return (
      <div className="App">
        <SearchBar 
        filterPostHandler={this.filterPostHandler}
        />
        {/* if searching = true then use filteredPost data, if false use dummyData */}
        <PostContainer dummyData={this.state.searching ? this.state.filteredPost : this.state.dummyData} />
      </div>
    );
  }
}

export default App;
