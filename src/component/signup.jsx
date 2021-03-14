import React from "react";
import { Button, Container, Form, Nav, Col } from "react-bootstrap";
import { signUp } from "../service/authService";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enrollmentNo: "",
      firstname: "",
      lastname: "",
      course: "",
      branch: "",
      passoutYear: "",
      email: "",
      phoneNumber: "",
      gender: "MALE",
      dateOfBirth: "",
      password: "",
      validated: "false",
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      signUp({ ...this.state }).then((data) => alert(data.message));
    }
    this.setState({ validated: true })
  }

  handleTextChange(value, field) {
    this.setState({ [field]: value });
  }

  handleNumberChange(value, field) {
    this.setState({ [field]: value });
  }

  handleDateChange(value, field) {
    this.setState({ [field]: value });
  }

  hendleGenderChange(value, field) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <Container
        style={{ height: "700px", width: "600px", paddingTop: "30px" }}
      >
        <h4 style={{ paddingLeft: "240px", paddingBottom: "20px" }}>Sign Up</h4>
        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicText" variant="outlined">
            <Form.Label>Enrollment No</Form.Label>
            <Form.Control
              value={this.state.enrollmentNo}
              onChange={(e) =>
                this.handleNumberChange(e.target.value, "enrollmentNo")
              }
              required
              type="text"
              placeholder="Enter Enrollment No"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide your Enrollment Number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formBasicText">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={this.state.firstName}
                onChange={(e) =>
                  this.handleTextChange(e.target.value, "firstname")
                }
                required
                type="text"
                placeholder="Enter First Name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide your First Name.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicText">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                value={this.state.lastName}
                onChange={(e) =>
                  this.handleTextChange(e.target.value, "lastname")
                }
                required
                type="text"
                placeholder="Enter Last Name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide your Last Name.
            </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formBasicText">
              <Form.Label>Course</Form.Label>
              <Form.Control
                value={this.state.course}
                onChange={(e) =>
                  this.handleTextChange(e.target.value, "course")
                }
                required
                type="text"
                placeholder="Enter your Course"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide your Course.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicText">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                value={this.state.branch}
                onChange={(e) =>
                  this.handleTextChange(e.target.value, "branch")
                }
                required
                type="text"
                placeholder="Enter your branch"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide your Branch.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicText" variant="outlined">
              <Form.Label>Passout Year</Form.Label>
              <Form.Control
                value={this.state.passoutYear}
                onChange={(e) =>
                  this.handleNumberChange(e.target.value, "passoutYear")
                }
                required
                type="text"
                placeholder="2017-2021"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide your Passout Year.
            </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formBasicText">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              value={this.state.dateOfBirth}
              onChange={(e) =>
                this.handleDateChange(e.target.value, "dateOfBirth")
              }
              required
              type="date"
              placeholder="Enter your Date of Birth"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please add your Date of Birth.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={this.state.email}
              onChange={(e) => this.handleTextChange(e.target.value, "email")}
              required
              type="email"
              placeholder="Enter email"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide your Email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicText">
            <Form.Label>Phone No</Form.Label>
            <Form.Control
              value={this.state.phoneNumber}
              onChange={(e) =>
                this.handleNumberChange(e.target.value, "phoneNumber")
              }
              required
              type="text"
              placeholder="Enter your Phone No"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide your valid Phone Number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicText">
            <Form.Label>Gender</Form.Label>
            <input
              type="radio"
              checked={this.state.gender === "MALE"}
              name="gender"
              value="MALE"
              onClick={(e) => this.handleTextChange(e.target.value, "gender")}
            />
            {""} Male
            <input
              type="radio"
              checked={this.state.gender === "FEMALE"}
              name="gender"
              value="FEMALE"
              onClick={(e) => this.handleTextChange(e.target.value, "gender")}
            />{" "}
            Female
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={this.state.password}
              onChange={(e) =>
                this.handleTextChange(e.target.value, "password")
              }
              required
              type="password"
              placeholder="Password"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please choose strong Password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            style={{ width: "570px", paddingTop: "10px" }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
          <Nav.Link href="/" >Already registared? Login here</Nav.Link>
        </Form>
      </Container>
    );
  }
}

export default Signup;
