import React from 'react';
import "./LoginPage.css";

const LoginForm = props => {
    return (
        <div >
          <form className="Login-Form" onSubmit={props.login}>
            <input 
            onChange={props.handleChanges}
            placeholder="Username" />
            <input 
            onChange={props.handleChanges}placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      );
}

export default LoginForm;




/* 
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


LOGIN FORM:
https://react-bootstrap.github.io/components/forms/

 <Form>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>


*/
