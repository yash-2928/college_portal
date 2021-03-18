import React from "react";
import { Row, Col, Table, Accordion, Button, Tabs, Container } from "react-bootstrap";
import UserService from "../service/userService";
import PostService from "../service/postService"
import ReportService from "../service/reportService"
import JobService from "../service/jobService";
import { getSignedInUser } from "../util/common";
import User from "./User";
import { PostTable } from "./PostItem";
import { JobTable } from "./JobItem";
import { Tab } from "bootstrap";
import UserCard from "./UserCard";

export default class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: getSignedInUser(),
      users: [],
      posts: [],
      jobs: [],
      reports: []
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
    this.reportService.getReports().then(reports => this.setState({ reports }))
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
    this.reportService.deleteReport(reportId).then(this.loadReports)
  }

  componentDidMount() {
    this.loadUsers();
    this.loadPost();
    this.loadJob();
    this.loadReports();
  }

  render() {
    return (
      <Tabs defaultActiveKey="user">
        <Tab eventKey="user" title="User">
          <Container>
            <Row md={4}>
              {this.state.users.map((user, i) => <Col key={i} style={{ margin: "8px" }}><UserCard {...user} /></Col>)}
            </Row>
          </Container>
          {/* <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Enrollment No</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, i) => (
                <User key={i} deleteUser={this.deleteUser} {...user} />
              ))}
            </tbody>
          </Table> */}
        </Tab>
        <Tab eventKey="post" title="Post">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Post Title</th>
                <th>Post Content</th>
                <th>File</th>
                <th>Reported</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts && this.state.posts.map((post, i) => (
                <PostTable
                  key={i}
                  deletePost={this.deletePost}
                  {...post}
                />
              ))}
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="job" title="Job">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Job Title</th>
                <th>Job Item</th>
                <th>Files</th>
                <th>Reported</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.jobs && this.state.jobs.map((job, i) => (
                <JobTable
                  key={i}
                  deleteJob={this.deleteJob}
                  {...job}
                />
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    );
  }
}

// ReportDashboard
// Create Job

/*<Drawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
</Drawer>

 <Drawer
        variant="permanent"
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer> */
