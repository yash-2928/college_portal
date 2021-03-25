import React from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";
import PostService from "../service/postService";
import ProfileService from "../service/profileService";
import JobService from "../service/jobService";
import { getSignedInUser } from "../util/common";
import { Col, Container, Image, Row, Tabs, Tab } from "react-bootstrap";
import DocumentView from "./DocumentView";
import UserIcon from "../images/user.png";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: getSignedInUser(),
      posts: [],
      jobs: [],
      userData: null,
    };

    this.postService = new PostService(this.state.currentUser.accessToken);
    this.profileService = new ProfileService(
      this.state.currentUser.accessToken
    );
    this.jobService = new JobService(this.state.currentUser.accessToken);

    this.loadJobsByUserId = this.loadJobsByUserId.bind(this);
    this.loadPostsByUserId = this.loadPostsByUserId.bind(this);
    this.loadUserData = this.loadUserData.bind(this);
  }

  loadUserData(userId) {
    this.profileService.getUserData(userId).then((data) => {
      this.setState({ userData: data });
    });
  }

  loadPostsByUserId(userId) {
    this.postService.getPostsByUserId(userId).then((data) => {
      this.setState({ posts: data });
    });
  }

  loadJobsByUserId(userId) {
    this.jobService.getJobsByUserId(userId).then((data) => {
      this.setState({ jobs: data });
    });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.loadUserData(id);
    this.loadPostsByUserId(id);
    this.loadJobsByUserId(id);
  }

  render() {
    if (!this.state.userData) {
      return "Loading..."
    }
    const dateString = this.state.userData.dateOfBirth;
    const date = moment(dateString);

    if (this.state.userData) {
      return (
        <div>
          <Container
            style={{
              width: "50%",
              paddingLeft: "120px",
              paddingTop: "35px",
              paddingBottom: "30px",
            }}
          >
            <Row>
              <Col>
                <Image
                  style={{
                    display: "flex",
                    float: "left",
                    height: "150px",
                    width: "150px",
                    marginRight: "64px",
                    alignItems: "center",
                    justifyContent: "center",
                    objectFit: "fill",
                  }}
                  src={UserIcon}
                  roundedCircle
                />
              </Col>
              <Col
              sm={4}
              style={{
                paddingRight: "50px",
                paddingTop: "15px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4>Name:</h4>
              <h6>EnrollmentNo:</h6>
              <h6>Course:</h6>
              <h6>Passout Year: </h6>
              <h6>Birthdate:</h6>
              <h6>Email:</h6>
              <h6>Gender:</h6>
            </Col>
            <Col sm={4} style={{ paddingRight: "100px", paddingTop: "15px" }}>
              <h4>
                {this.state.userData.firstname} {this.state.userData.lastname}
              </h4>
              <h6>{this.state.userData.enrollmentNo}</h6>
              <h6>
                {this.state.userData.course} - {this.state.userData.branch}
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
           <Tabs style={{ justifyContent: "center" }} defaultActiveKey="post">
            <Tab eventKey="post" title="Post">
              <Row style={{ marginTop: "20px", marginLeft:"70px" }} xs={1} md={3}>
                {this.state.posts.map((post, i) => (
                  <Col style={{marginTop: "20px"}} key={i}>
                    <DocumentView
                      fileUrl={post.fileUrl}
                      postType={post.postType}
                      height={200}
                      width={200}
                    />
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="job" title="Job">
              <Row style={{ marginTop: "20px", marginLeft:"70px" }} xs={1} md={3}>
                {this.state.jobs.map((job, i) => (
                  <Col style={{marginTop: "20px"}} key={i}>
                    <DocumentView
                      fileUrl={job.fileUrl}
                      postType={job.postType}
                      height={200}
                      width={200}
                    />
                  </Col>
                ))}
              </Row>
            </Tab>
          </Tabs>
          </Container>
        </div>
      );
    }
    return "Loading...";
  }
}

export default withRouter(UserProfile);

//User Data: {JSON.stringify(this.state.userData)}
