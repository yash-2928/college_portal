import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import DocumentView from "./DocumentView";
import Heart from "../images/heart.jpeg";
import Purple from "../images/purple.jpeg";
import Sun from "../images/sun.jpeg";
import Water from "../images/water.jpeg";
import Yellow from "../images/yellow.jpeg";
import Flower from "../images/flowers.jpeg";
import { getSignedInUser } from "../util/common";
import PostService from "../service/postService";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: getSignedInUser(),
      posts: [],
    };

    this.postService = new PostService(this.state.currentUser.accessToken);

    this.loadPostsByUserId = this.loadPostsByUserId.bind(this);
  }

  loadPostsByUserId() {
    this.postService
      .getPostsByUserId(this.state.currentUser.userId)
      .then((data) => {
        this.setState({ posts: data });
      });
  }

  componentDidMount() {
    this.loadPostsByUserId();
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
              <h4>
                {this.state.currentUser.firstName}
                {this.state.currentUser.lastName}
              </h4>
              <h6>{this.state.currentUser.enrollmentNo}</h6>
              <h6>
                {this.state.currentUser.course}
                {this.state.currentUser.branch}
              </h6>
              <h6>{this.state.currentUser.passoutYear}</h6>
              <h6>{this.state.currentUser.dateOfBirth}</h6>
              <h6>{this.state.currentUser.email}</h6>
              <h6>{this.state.currentUser.gender}</h6>
            </Col>
          </Row>
        </Container>
        <Container
          style={{
            width: "55%",
            paddingTop: "35px",
          }}
        >
          <Row xs={1} md={3}>
            {this.state.posts.map((post, i) => (
              <Col key={i}>
                <DocumentView fileUrl={post.fileUrl} postType={post.postType} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
