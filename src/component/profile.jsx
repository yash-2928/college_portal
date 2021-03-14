import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import DocumentView from "./DocumentView";
import moment from "moment";
import Purple from "../images/purple.jpeg";
import { getSignedInUser } from "../util/common";
import PostService from "../service/postService";
import ProfileService from "../service/profileService";
import JobService from "../service/jobService";
import EditProfile from "./EditProfile";
import EditPassword from "./EditPassword";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: getSignedInUser(),
      userData: {},
      posts: [],
      jobs: [],
      password: "",
      showEditModal: false,
    };

    this.postService = new PostService(this.state.currentUser.accessToken);
    this.profileService = new ProfileService(
      this.state.currentUser.accessToken
    );
    this.jobService = new JobService(this.state.currentUser.accessToken);

    this.loadJobsByUserId = this.loadJobsByUserId.bind(this);
    this.loadPostsByUserId = this.loadPostsByUserId.bind(this);
    this.loadUserData = this.loadUserData.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updatePassword = this.updatePassword(this);
  }

  showModal() {
    this.setState({ showEditModal: true });
  }

  closeModal() {
    this.setState({ showEditModal: false });
  }

  loadUserData() {
    this.profileService
      .getUserData(this.state.currentUser.userId)
      .then((data) => {
        this.setState({ userData: data });
      });
  }

  loadPostsByUserId() {
    this.postService
      .getPostsByUserId(this.state.currentUser.userId)
      .then((data) => {
        this.setState({ posts: data });
      });
  }

  loadJobsByUserId() {
    this.jobService
      .getJobsByUserId(this.state.currentUser.userId)
      .then((data) => {
        this.setState({ jobs: data });
      });
  }

  componentDidMount() {
    this.loadUserData();
    this.loadPostsByUserId();
    this.loadJobsByUserId();
  }

  updateUser(updatedUser) {
    this.profileService
      .userUpdate({
        id: this.state.currentUser.userId,
        ...updatedUser,
      })
      .then((data) => {
        this.setState({ userData: data });
      });
  }

  updatePassword(updatePassword) {
    this.profileService
      .updatePasswordRequest({
        id: this.state.currentUser.userId,
        currentPassword: this.state.currentUser.password,
        ...updatePassword,
      })
      .then((data) => {
        this.setState({ password: this.state.userData.password });
      });
  }

  render() {
    const dateString = this.state.userData.dateOfBirth;
    const date = moment(dateString);
    return (
      <div>
        <EditProfile
          {...this.state.userData}
          show={this.state.showEditModal}
          close={this.closeModal}
          updateUser={this.updateUser}
        />

        <EditPassword
          {...this.state.currentUser.password}
          show={this.state.showEditModal}
          close={this.closeModal}
          updateUser={this.updateUser}
        />

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
              <Button onClick={this.showModal}>Edit Profile</Button>
              <Button onClick={this.showModal}>Change Password</Button>
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
                {this.state.userData.firstname} {this.state.userData.lastname}
              </h4>
              <h6>{this.state.userData.enrollmentNo}</h6>
              <h6>
                {this.state.userData.course} {this.state.userData.branch}
              </h6>
              <h6>{this.state.userData.passoutYear}</h6>
              <h6>{date.format("DD/MM/YYYY")}</h6>
              <h6>{this.state.userData.email}</h6>
              <h6>{this.state.userData.gender}</h6>
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
                <DocumentView
                  fileUrl={post.fileUrl}
                  postType={post.postType}
                  height={200}
                  width={200}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
