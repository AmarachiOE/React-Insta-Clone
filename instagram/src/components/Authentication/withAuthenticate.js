import React from 'react';

/*

Building the High Order Component

Create a directory called authentication
Inside that directory create a HOC called withAuthenticate. This is where all of the magic is going to happen.

This component should be able to take in a component as an argument, and it will return a class component. 
(so shouldn't have: = props =>)

Inside of withAuthenticate's render method, you'll want to return the Component that gets passed into it.

Be sure to export.

Head over to App.js and import in our new withAuthenticate Higher Order Component.

Set a new const called ComponentFromWithAuthenticate, and set it's value to the HOC invoked, with PostsPage passed in.

Inside App, you should now render ComponentFromWithAuthenticate in place of PostsPage.

If this worked correctly, then everything should render as it used to.

withAuthenticate will look a lot like this when you're done setting it up.

*/

const withAuthenticate = PassedComponent => 
    class extends React.Component {
        render() {
            return <PassedComponent />
        }
    };
  

export default withAuthenticate;