import { Grid } from "@material-ui/core";
import React from "react";
import classNames from 'classnames';
import validator from 'validator';
import { Button, Container, Form, FormGroup, Nav, FormControl } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: { value: '', isValid: true, message: '' },
      password: { value: '', isValid: true, message: '' },
      //validated: false,
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    //this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => {
    const state = {
      ...this.state,
      [e.target.name]: {
        ...this.state[e.target.name],
        value: e.target.value,
      }
    };
    this.setState(state);
  }


  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.resetValidationStates();
    const validated = this.formIsValid();
    if (validated) {
      this.props.login(this.state.email.value, this.state.password.value);
    }
    this.setState({ validated });
  }

  handleTextChange(value, field) {
    this.setState({ [field]: value });
  }

  resetValidationStates = () => {
    const state = JSON.parse(JSON.stringify(this.state));
    Object.keys(state).map(key => {
      if (state[key].hasOwnProperty('isValid')) {
        state[key].isValid = true;
        state[key].message = '';
      }
    });

    this.setState(state);
  }

  formIsValid = () => {
    const email = { ...this.state.email };
    const password = { ...this.state.password };
    let isGood = true;

    if (!validator.isEmail(email.value)) {
      email.isValid = false;
      email.message = 'email in not valid';
      isGood = false;
    }

    // perform addtion validation on password and confirmPassword here...

    if (!isGood) {
      this.setState({
        email,
        password,
      });
    }
    return isGood;
  }

  render() {
    const { email, password } = this.state;

    const emailGroupClass = classNames('form-group',
      { 'has-error': !email.isValid }
    );
    const passwordGroupClass = classNames('form-group',
      { 'has-error': !password.isValid }
    );

    return (
      <Container
        style={{ height: "250px", width: "600px", paddingTop: "200px" }}
      >
        <h3 style={{ paddingLeft: "230px" }}><strong>Sign in</strong></h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className={emailGroupClass}>
            <FormControl
              variant="outlined"
              margin="normal"
              required
              value={this.state.email.value}
              placeholder={"Enter Email Address"}
              onChange={this.onChange}
              type="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <Form.Control.Feedback>{this.state.email.message}</Form.Control.Feedback>
          </FormGroup>

          <FormGroup className={passwordGroupClass}>
            <FormControl
              variant="outlined"
              margin="normal"
              required
              value={this.state.password.value}
              placeholder={"Enter Password"}
              onChange={this.onChange}
              type="password"
              name="password"
              label="Password"
              autoFocus
            />
            <Form.Control.Feedback>{this.state.password.message}</Form.Control.Feedback>
          </FormGroup>
          <Button
            type="submit"
            style={{ width: "570px", paddingTop: "10px" }}
            color="primary"
          >
            Sign In
          </Button>
          <Grid container style={{ paddingTop: "10px" }}>
            <Grid item>
              <Nav.Link href="/forget">Forgot password?</Nav.Link>
            </Grid>
            <Grid item>
              <Nav.Link style={{ paddingLeft: "20px" }} href="/signup">Don't have an account? Sign Up</Nav.Link>
            </Grid>
          </Grid>
        </Form>
      </Container>
      /*<div className="main">
        <Form className="form" onSubmit={this.handleSubmit}>
          <Form.Group 
          </form>controlId="formBasicEmail">
            <Form.Label>User Id</Form.Label>
            <Form.Control value={this.state.email} onChange={e => this.handleTextChange(e.target.value, "email")} type="email" placeholder="Enter your Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={this.state.password} onChange={e => this.handleTextChange(e.target.value, "password")} type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" >Submit</Button>
          <Form.Text>New User? <Link to="signup">Register here</Link></Form.Text>
        </Form>
      </div>*/
    );
  }
}

export default Login;
