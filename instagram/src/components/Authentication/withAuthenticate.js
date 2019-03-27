import React from "react";
import "../Login/LoginPage.css";

// const withAuthenticate = PassedComponent =>
//     class extends React.Component {
//         render() {
//             return <PassedComponent />
//         }
//     };

const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("username")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      if (this.state.loggedIn === true) {
        //if loggedIn object on this state is true, render PostsPage
        return <PostsPage />;
      } //else render LoginPage
      return (
        <div className="LoginPage-Container">
          <LoginPage />
        </div>
      );
    }
  };

export default withAuthenticate;
//(PostsPage)(LoginPage);
// export default withAuthenticate(PostsPage)(LoginPage);

/*
const withAuthenticate = PostsPage => LoginPage => 
    class extends React.Component {
        render() {
            if (localStorage.getItem("username")) {
                return <PostsPage />>;
            } // else
            return <LoginPage />
        }
    };


    FROM CODESANDBOX:

const withConditionalRender = First => Second => props => {
  if (localStorage.getItem("showFirst")) {
    //if showFirst is true render First
    return <First />;
  } //else
  return <Second />;
};

const withAuthenticate = PostsPage => LoginPage => {
  if (localStorage.getItem("user")) {
    //if "user" is true render First
    return <PostsPage />;
  } //else
  return <LoginPage />;
};


*/
