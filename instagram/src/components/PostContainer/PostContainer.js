import React from 'react';
import "./PostContainer.css";
import CommentSection from "/Users/Amarachi/Documents/LAMBDA/VS Code/React-Insta-Clone/instagram/src/components/CommentSection/CommentSection";
import Post from "./Post";

// Each PostContainer component will then pass the array of comments on each post object as a prop to an instance of the CommentSection component

const PostContainer = props => {
    return (
        <div>
            <p>Post Container</p>
            <Post />
            <CommentSection />

        </div>
    );
};

export default PostContainer;