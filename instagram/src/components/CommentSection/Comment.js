import React from "react";
import PropTypes from "prop-types";

// should display the username and comment text of the commenter

const Comment = props => {
  return (
    <div>
      <p>
        <strong>{props.eachComment.username}</strong> {props.eachComment.text}
      </p>
    </div>
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
