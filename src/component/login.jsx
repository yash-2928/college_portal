import { Grid } from "@material-ui/core";
import React from "react";
import { Button, Container, Form, FormGroup, Nav,FormControl } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      validated: "false",
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const form = e.currntTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      this.props.login(this.state.email, this.state.password);
    }
    this.setState({ validated: true });
  }

  handleTextChange(value, field) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <Container
        style={{ height: "250px", width: "600px", paddingTop: "200px" }}
      >
        <h3 style={{ paddingLeft: "230px" }}>Sign in</h3>
        <Form onSubmit={this.handleSubmit} noValidate validated={validated}>
          <FormGroup>
            <FormControl
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={this.state.email}
              onChange={(e) => this.handleTextChange(e.target.value, "email")}
              type="email"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide your Email.
            </Form.Control.Feedback>
          </FormGroup>
          
          <FormGroup>
            <FormControl
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={this.state.password}
            onChange={(e) => this.handleTextChange(e.target.value, "password")}
            type="password"
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
          />
          <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide your password.
            </Form.Control.Feedback>
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
              <Nav.Link href="/signup">Don't have an account? Sign Up</Nav.Link>
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
