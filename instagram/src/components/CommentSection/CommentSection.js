import React from "react";
import "./CommentSection.css";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

// The CommentSection component will receive the ARRAY OF COMMENTS as PROPS and render a Comment component with the username of the poster as well as the post's text.

// Additionally, there should be an input box that allows users to submit a new comment for any post. We'll work on posting new comments tomorrow.

// Nested Class Components
// CommentSection should be a class comp that will be nested in the App class comp because the comments property within dummyData (an array) is an array itself

// map: map over each comment for each post... looking within each posts

// we're going to map over each comment within this post
// for each comment, send the username and text to <Comment /> to be rendered on screen

class CommentSection extends React.Component {
  constructor(props) {
    // receives props data from eachPost, which is in PostContainer being mapped as post from dummyData
    super(props);
    this.state = {
      comments: props.eachPost.comments,
      text: "",

      // props.eachPost.comment refers to each "post's" comment property, which is an array  within the dummyData array (there should be 3 posts)

      // we're pretty much extracting the comments array from each post object in the dummyData
    };
  }

  // for input field
  handleChanges = event => {
      console.log("event:", event.target);
      this.setState({
          [event.target.name]: event.target.value
      });
  };

  // for adding new comment
  addNewComment = event => {
    event.preventDefault(); // no refreshing page

    const newComment = {
        id: Date.now(),
        username: "cool_girl",
        text: this.state.text,
    };

    this.setState({
        comments: [...this.state.comments, newComment]
    });
  };

  // CommentSection.js we're  already looking at an individual post:

  // Now for each post, (using map) each comment of that post will get styled by <Comment />>
  
  // and there will be a commentForm at the bottom of each post (no map)

  render() {
    console.log(this.state);
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => (
          <Comment eachComment={comment} key={comment.id} />
        ))}
        <CommentForm 
            addNewComment={this.addNewComment}
            handleChanges={this.handleChanges} 
        />
      </div>
    );
  }
}

export default CommentSection;
