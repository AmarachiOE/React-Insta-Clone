import React from 'react';
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

// We're looking at all 3 posts here

// for each post there will be user info (thumbnail and username), image post, icons, like counter, and comment section

// no mapping here, just establishing content areas for each post

const Post = props => {
    return (
        <div className="each-post">
            <div className="user-info">
                <img className="thumbnail" src={props.eachPost.thumbnailUrl} alt="Thumbnail" />
                <p><strong>{props.eachPost.username}</strong></p>
            </div>

            <img className="post-image"src={props.eachPost.imageUrl} alt="The Post"/>

            <div className="post-icons">
                <i className="far fa-heart"> </i>
                <i className="far fa-comment"></i>
            </div>

            <p className="post-likes">123 likes</p>

            <CommentSection eachPost={props.eachPost}  />
        </div>
    );
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
        ),
    })
};


export default Post;


/* 
removed key={props.eachPost.id} from <CommentSection />
*/
