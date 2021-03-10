import React from "react";
import { Card, Table, Accordion, Button } from "react-bootstrap";
import UserService from "../service/userService";
import PostService from "../service/postService"
import JobService from "../service/jobService";
import { getSignedInUser } from "../util/common";
import User from "./User";
import { PostTable } from "./PostItem";
import { JobTable } from "./JobItem";

export default class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: getSignedInUser(),
      users: [],
      posts: [],
      jobs: [],
    };

    this.userService = new UserService(this.state.currentUser.accessToken);
    this.postService = new PostService(this.state.currentUser.accessToken);
    this.jobService = new JobService(this.state.currentUser.accessToken);

    this.loadUsers = this.loadUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.loadPost = this.loadPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.loadJob = this.loadJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
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

  componentDidMount() {
    this.loadUsers();
    this.loadPost();
    this.loadJob();
  }

  render() {
    return (
      <>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                User
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Table striped bordered hover>
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
                </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Post
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Post Title</th>
                      <th>Post Content</th>
                      <th>File</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.posts.map((post, i) => (
                      <PostTable
                        key={i}
                        deletePost={this.deletePost}
                        {...post}
                      />
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Job
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Job Title</th>
                      <th>Job Item</th>
                      <th>Files</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.jobs.map((job, i) => (
                      <JobTable
                        key={i}
                        deleteJob={this.deleteJob}
                        {...job}
                      />
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  }
}

// ReportDashboard
// Create Job

/*  <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
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
