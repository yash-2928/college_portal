import React from "react";
import { Row, Col, Tabs, Container, Table } from "react-bootstrap";
import UserService from "../service/userService";
import PostService from "../service/postService";
import ReportService from "../service/reportService";
import JobService from "../service/jobService";
import { getSignedInUser } from "../util/common";
import { Tab } from "bootstrap";
import UserCard from "./UserCard";
import PostCard from "./PostCard";
import JobCard from "./JobCard";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

export default class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: getSignedInUser(),
      users: [],
      posts: [],
      jobs: [],
      reports: [],
    };

    this.userService = new UserService(this.state.currentUser.accessToken);
    this.postService = new PostService(this.state.currentUser.accessToken);
    this.jobService = new JobService(this.state.currentUser.accessToken);
    this.reportService = new ReportService(this.state.currentUser.accessToken);

    this.loadUsers = this.loadUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.loadPost = this.loadPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.loadJob = this.loadJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.loadReports = this.loadReports.bind(this);
  }

  loadUsers() {
    this.userService.getUsers().then((users) => {
      this.setState({ users });
    });
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId).then(() => this.loadUsers());
  }

  loadPost() {
    this.postService.getPosts().then((posts) => {
      this.setState({ posts });
    });
  }

  loadReports() {
    this.reportService
      .getReports()
      .then((reports) => this.setState({ reports }));
  }

  deletePost(postId) {
    this.postService.deletePost(postId).then(() => this.loadPost());
  }

  loadJob() {
    this.jobService.getJobs().then((jobs) => {
      this.setState({ jobs });
    });
  }

  deleteJob(jobId) {
    this.jobService.deleteJob(jobId).then(() => this.loadJob());
  }

  deleteReport(reportId) {
    this.reportService.deleteReport(reportId).then(this.loadReports);
  }

  componentDidMount() {
    this.loadUsers();
    this.loadPost();
    this.loadJob();
    this.loadReports();
  }

  render() {
    return (
      <>
        <h4 style={{ marginTop: "20px", marginLeft: "775px" }}>
          Welcome to the Admin panel
          <br />
        </h4>
        <Tabs
          defaultActiveKey="dashboard"
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          <Tab eventKey="dashboard" title="Dashboard">
            <Container>
              <h5 style={{margin: "20px"}}>Reported Item</h5>            
              <Table>
                <thead>
                  <tr>
                    <th>Message</th>
                    <th>User Id</th>
                    <th>Post Id</th>
                    <th>Job Id</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.reports &&
                    this.state.reports.map((report, i) => (
                      <tr key={i}>
                        <td>{report.message}</td>
                        <td>{report.user.id}</td>
                        <td>{report.post?.postId}</td>
                        <td>{report.job?.jobId}</td>
                        <td>
                          <IconButton
                            onClick={() => this.deleteReport(report.reportId)}
                          >
                            <Delete />
                          </IconButton>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Container>
          </Tab>

          <Tab eventKey="user" title="User">
            <Container>
              <Row md={4}>
                {this.state.users.map((user, i) => (
                  <Col key={i} style={{ margin: "8px" }}>
                    <UserCard deleteUser={this.deleteUser} {...user} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Tab>

          <Tab eventKey="post" title="Post">
            <Container>
              <Row md={4}>
                {this.state.posts.map((post, i) => (
                  <Col key={i} style={{ margin: "8px" }}>
                    <PostCard deletePost={this.deletePost} {...post} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Tab>

          <Tab eventKey="job" title="Job">
            <Container>
              <Row md={4}>
                {this.state.jobs.map((job, i) => (
                  <Col key={i} style={{ margin: "8px" }}>
                    <JobCard deleteJob={this.deleteJob} {...job} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </>
    );
  }
}
