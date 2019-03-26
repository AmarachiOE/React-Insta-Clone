import React from 'react';
import CommentSection from "../CommentSection/CommentSection";

const Post = props => {
    return (
        <div>
            <div className="user-info">
                <img className="thumbnail" src={props.eachPost.thumbnailUrl} alt="Thumbnail" />
                <p><strong>{props.eachPost.username}</strong></p>
            </div>
            <img src={props.eachPost.imageUrl} alt="The of Post"/>
            <CommentSection eachPost={props.eachPost} key={props.eachPost.id} />
        </div>
    );
}

export default Post;
