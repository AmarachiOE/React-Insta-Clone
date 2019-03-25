import React from 'react';
import "./PostContainer.css";
import CommentSection from "/Users/Amarachi/Documents/LAMBDA/VS Code/React-Insta-Clone/instagram/src/components/CommentSection/CommentSection";
import Post from "./Post";

// Each PostContainer component will then pass the array of comments on each post object as a prop to an instance of the CommentSection component

// Reference Nested Class Comps TK Example: https://codesandbox.io/s/k3j4q7px4o

// map: map over each post in the dummyData array

const PostContainer = props => {
    return (
        <div>
            <p>This is the Post Container</p>
            <Post />
            {props.commentProp.map( post => <CommentSection eachPost={post} key={post.id} />
           
            )}

        </div>
    );
};



export default PostContainer;