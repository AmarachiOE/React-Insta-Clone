import React from "react";

const CommentForm = props => {
  return (
      //added props.addNewComment to form's onSubmit prop instead of button onClick
    <form className="comment-form" onSubmit={props.addNewComment}>
      <input 
        className="comment-input" 
        name="text"
        value={props.text}
        onChange={props.handleChanges}
        placeholder="Add comment..." 
        />

      <button className="post-button">
        Post
      </button>
    </form>
  );
};

export default CommentForm;

// for button onClick={props.addNewComment}