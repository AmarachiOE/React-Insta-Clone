import React from 'react';
import "./PostContainer.css";
// import CommentSection from "/Users/Amarachi/Documents/LAMBDA/VS Code/React-Insta-Clone/instagram/src/components/CommentSection/CommentSection";
import Post from "./Post";


// Each PostContainer component will then pass the array of comments on each post object as a prop to an instance of the CommentSection component

// Reference Nested Class Comps TK Example: https://codesandbox.io/s/k3j4q7px4o or not exactly.

// map: map over each post in the dummyData array and to invoke an instance of <Post /> for each individual post

// can only map over an ARRAY not objects.

const PostContainer = props => {
    return (
        //console.log("Post Container:", props),
        <div className="post-container">
            {props.dummyData.map( post => 
            <Post eachPost={post} key={post.id} />)}           
        </div>
    );
};




export default PostContainer;