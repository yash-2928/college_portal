import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
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
      <>
        <Container
          style={{
            paddingLeft: "250px",
            paddingTop: "70px",
            paddingBottom: "30px",
            borderBottom: "1px solid black",
          }}
        >
          <Row>
            <Col>
              <Image
                style={{ height: "auto", width: "250px" }}
                src={Heart}
                roundedCircle
              />
            </Col>
            <Col style={{ paddingRight: "250px" }}>
              <h4>Yash Mehta</h4>
              <h6>170240116014</h6>
              <h6>29-10-2000</h6>
              <h6>mehtay613@gmail.com</h6>
              <h6>Male</h6>
            </Col>
          </Row>
        </Container>
        <Container style={{ paddingTop: "50px"}}>
          <Row>
            <Col xs={6} md={4}>
              <Image src={Flower} rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src={Purple} rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src={Sun} rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src={Water} rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src={Yellow} rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src={Heart} rounded />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
