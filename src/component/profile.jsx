import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import Heart from "../images/heart.jpeg";
import Purple from "../images/purple.jpeg";
import Sun from "../images/sun.jpeg";
import Water from "../images/water.jpeg";
import Yellow from "../images/yellow.jpeg";
import Flower from "../images/flowers.jpeg";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enrollmentNo: "",
      firstname: "",
      lastname: "",
      email: "",
      gender: "MALE",
      dateOfBirth: "",
    };
  }
  render() {
    return (
      <div>
        <Container
          style={{
            width: "50%",
            paddingLeft: "150px",
            paddingTop: "35px",
            paddingBottom: "30px",
            borderBottom: "1px solid black",
          }}
        >
          <Row>
            <Col>
              <Image
                style={{
                  display: "flex",
                  float: "left",
                  height: "200px",
                  width: "220px",
                  marginRight: "64px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                src={Purple}
                roundedCircle
              />
            </Col>
            <Col
              style={{
                paddingRight: "250px",
                paddingTop: "5px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4>Yash Mehta</h4>
              <h6>170240116014</h6>
              <h6>B.E.(Infromation Technology)</h6>
              <h6>2017-2021</h6>
              <h6>29-10-2000</h6>
              <h6>mehtay613@gmail.com</h6>
              <h6>Male</h6>
            </Col>
          </Row>
        </Container>
        <Container style={{
            width: "50%",
            paddingTop: "35px",
          }}>
          <Row xs={1} md={3}>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
