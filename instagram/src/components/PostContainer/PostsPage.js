import React from "react";

// import files that were imported on App.js
import dummyData from "../../dummy-data"; // don't use { dummyData } because not JSON object?
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class PostsPage extends React.Component {
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
    const newDummyData = this.state.dummyData.filter(currentPost => {
      if (currentPost.username.includes(event.target.value)) {
        return currentPost;
      }
    });

    if (event.target.value === "") {
      this.setState({ searching: false });
    } else {
      this.setState({ filteredPost: newDummyData, searching: true });
    }
  };

  render() {
    return (
      <div className="Posts-Page">
        <SearchBar filterPostHandler={this.filterPostHandler} />
        {/* TERNARY statement: if searching = true then use filteredPost data, if false use dummyData. PostContainer is what is renering the data to the screen as posts*/}
        <PostContainer
          dummyData={
            this.state.searching
              ? this.state.filteredPost
              : this.state.dummyData
          }
        />
      </div>
    );
  }
}

export default PostsPage;
