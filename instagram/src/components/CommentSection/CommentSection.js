import React from 'react';
import "./CommentSection.css";
import Comment from "./Comment";


// The CommentSection component will receive the array of comments as props and render a Comment component with the username of the poster as well as the post's text. Additionally, there should be an input box that allows users to submit a new comment for any post. We'll work on posting new comments tomorrow.

const CommentSection = props => {
    return (
        <div>Comment Section will render Comment
            <Comment />
            <form>
                <input placeholder="Write comment"></input>
            </form>
        </div>
    );
};

export default CommentSection;