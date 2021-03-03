import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
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
        <form onSubmit={this.handleSubmit} noValidate>
          <TextField
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
          <TextField
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
          <Button
            type="submit"
            style={{ width: "570px", paddingTop: "10px" }}
            color="primary"
          >
            Sign In
          </Button>
          <Grid container style={{ paddingTop: "10px" }}>
            <Grid item xs>
              <Link Link to="" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link Link to="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
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
