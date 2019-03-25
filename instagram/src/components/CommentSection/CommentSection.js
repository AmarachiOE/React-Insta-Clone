import React from 'react';
import "./CommentSection.css";
import Comment from "./Comment";


// The CommentSection component will receive the ARRAY OF COMMENTS as PROPS and render a Comment component with the username of the poster as well as the post's text. 

// Additionally, there should be an input box that allows users to submit a new comment for any post. We'll work on posting new comments tomorrow.

// Nested Class Components
// CommentSection should be a class comp that will be nested in the App class comp because the comments property within dummyData (an array) is an array itself

// map: map over each comment for each post... looking within each posts

// we're going to map over each comment within this post
// for each comment, send the username and text to <Comment /> to be rendered on screen



class CommentSection extends React.Component{
    constructor(props) { // receives data from this.state of App
        super(props);
        this.state = {
            comments: props.eachPost.comments, 
            // props.eachPost.comment refers to each "posts" comment array  within the dummyData array (there should be 3 posts)

            // we're pretty much extracting the comments array from each post object in the dummyData
        };
    }
    render() {
        console.log(this.state);
        return (
            <div>
                {this.state.comments.map( comment => 
                  <Comment eachComment={comment} key={comment.id}/>  )}
                
            </div>
        )
    }

}


export default CommentSection;