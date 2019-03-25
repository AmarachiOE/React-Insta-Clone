import React from 'react';

// should display the username and comment text of the commenter

const Comment = props => {
    return (
        <div>
            <p>This is the comment component</p>
            <p><strong>{props.eachComment.username}</strong> {props.eachComment.text}</p>
        </div>
    )
}

export default Comment;
