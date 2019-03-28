import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const EachPostContainerDiv = styled.div`
  margin-bottom: 50px;
  border: 1px solid lightgray;
`;

const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ThumbnailImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 10px;
`;

const UserInfoP = styled.p`
  padding-top: 15px;
  font-weight: bold;
`;

const PostImg = styled.img`
  width: 100%;
  height: auto;
`;

const PostIconsDiv = styled.div`
  padding: 12px 0;
  display: flex;
  color: black; 
  font-size: 1.5rem;

`;

const PostLikesP = styled.p`
  padding-left: 12px;
`;


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
      <EachPostContainerDiv>
        <UserInfoDiv>
          <ThumbnailImg
            src={this.props.eachPost.thumbnailUrl}
            alt="Thumbnail"
          />
          <UserInfoP>
            {this.props.eachPost.username}
          </UserInfoP>
        </UserInfoDiv>

        <PostImg
          src={this.props.eachPost.imageUrl}
          alt="The Post"
        />

        <PostIconsDiv>
          <i className="far fa-heart" onClick={this.increaseLikes}>
            {" "}
          </i>
          <i className="far fa-comment" />
        </PostIconsDiv>

        <PostLikesP>{this.state.likesCounter} likes</PostLikesP>

        <CommentSection eachPost={this.props.eachPost} />
      </EachPostContainerDiv>
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
