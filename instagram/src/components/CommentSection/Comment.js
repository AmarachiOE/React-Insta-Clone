import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";


const CommentDiv = styled.div`
  margin-bottom: 0.2rem;
  padding: 0
`;

// should display the username and comment text of the commenter

const Comment = props => {
  return (
    <CommentDiv>
        <strong>{props.eachComment.username}</strong> {props.eachComment.text}
    </CommentDiv>
  );
};

// Checking PropType
// each comment is an object

Comment.propTypes = {
  eachComment: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;
