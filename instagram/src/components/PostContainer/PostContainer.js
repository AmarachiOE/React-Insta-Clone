import React from 'react';
import "./PostContainer.css";
import CommentSection from "/Users/Amarachi/Documents/LAMBDA/VS Code/React-Insta-Clone/instagram/src/components/CommentSection/CommentSection";
import Post from "./Post";

// Each PostContainer component will then pass the array of comments on each post object as a prop to an instance of the CommentSection component

// map: map over each post in the dummyData array

const PostContainer = props => {
    return (
        <div>
            <p>This is the Post Container</p>
            <p>Post Container</p>
            <Post />
            {props.commentProp.map( post => <CommentSection eachPost={post} key={post.id} />
            )}

        </div>
    );
};


/*


{props.citiesProp.map(c => 
      <City city={c} key={c.id} />
    )}


*/



// class PostContainer extends React.Component{
//     constructor(props) { // receives data from this.state of App
//         super(props);
//         this.state = {
//             comments: props.comments, //the comments array within the dummyData array
//         };
//     }
//     render() {
//         console.log(this.state);
//         return (
//             <div>
//                 <CommentSection />
//             </div>
//         )
//     }

// }

export default PostContainer;