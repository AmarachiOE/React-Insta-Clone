import React from "react";
import styled, { css } from "styled-components";

const CommentFormDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;


const CommentInput = styled.input`
  width: 90%;
  height: 30px;
  padding: 12px;
  font-size: 0.8rem;
  border: none;
`;

const CommentButton = styled.button`
  width: 10%;
  font-size: 0.8rem;
  font-weight: 700;
  color: lightskyblue;
  background: none;
  border: none;

  &:hover {
    color: #114c99;
    cursor: pointer;
  }
`;

const CommentForm = props => {
  return (
      //added props.addNewComment to form's onSubmit prop instead of button onClick
    <CommentFormDiv onSubmit={props.addNewComment}>
      <CommentInput 
        name="text"
        value={props.text}
        onChange={props.handleChanges} 
        placeholder="Add comment..." 
        />

      <CommentButton>
        Post
      </CommentButton>
    </CommentFormDiv>
  );
};

export default CommentForm;

// for button onClick={props.addNewComment}