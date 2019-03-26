import React from 'react';

const CommentForm = props => {
    return (
        <form>
            <input 
                className="comment-input" placeholder="Add comment..." 
            />
            <button className="post-button">Post</button>
        </form>
    )
}

export default CommentForm;
