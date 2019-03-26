import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

// We're looking at all 3 posts here

// for each post there will be user info (thumbnail and username), image post, icons, like counter, and comment section

// no mapping here, just establishing content areas for each post

// Day 2: make PostContainer into a class and add "likes count" to state

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likesCounter: 0
      //props.eachPost.likes
    };
  }

  // add likes
  increaseLikes = event => {
    this.setState(prevState => {
      return {
        likesCounter: prevState.likesCounter + 1
      };
    });
  };
  // Must change props.whatever to this.props.whatever
  render() {
    return (
      <div className="each-post">
        <div className="user-info">
          <img
            className="thumbnail"
            src={this.props.eachPost.thumbnailUrl}
            alt="Thumbnail"
          />
          <p>
            <strong>{this.props.eachPost.username}</strong>
          </p>
        </div>

        <img
          className="post-image"
          src={this.props.eachPost.imageUrl}
          alt="The Post"
        />

        <div className="post-icons">
          <i className="far fa-heart" onClick={this.increaseLikes}>
            {" "}
          </i>
          <i className="far fa-comment" />
        </div>

        <p className="post-likes">{this.state.likesCounter} likes</p>

        <CommentSection eachPost={this.props.eachPost} />
      </div>
    );
  }
}

// Checking PropTypes
// each post is an object
Post.propTypes = {
  eachPost: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  })
};

export default Post;

/* 
removed key={props.eachPost.id} from <CommentSection />
*/
