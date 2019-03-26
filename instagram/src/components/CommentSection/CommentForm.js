import React from "react";

const CommentForm = props => {
  return (
    <form className="comment-form">
      <input 
        className="comment-input" 
        name="text"
        value={props.text}
        onChange={props.handleChanges}
        placeholder="Add comment..." />

      <button 
        className="post-button" 
        onClick={props.addNewComment}>
        Post
      </button>
    </form>
  );
};

export default CommentForm;
