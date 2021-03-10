import React from "react";
import { Container } from "react-bootstrap";
import JobService from "../service/jobService";
import CommentService from "../service/commentService";
import { getSignedInUser } from '../util/common';
import CreateJob from "./CreateJob";
import Jobitem from "./JobItem";

export default class Job extends React.Component {
  
  jobService;
  commentService;
    
  constructor(props) {
    super(props);

    this.state = {
      currentUser: getSignedInUser(),
      jobs: [],
    };

    this.jobService = new JobService(this.state.currentUser.accessToken);
    this.commentService = new CommentService(
      this.state.currentUser.accessToken
    );
    this.loadJobs = this.loadJobs.bind(this);
    this.createJob = this.createJob.bind(this);
    this.createComment = this.createComment.bind(this);
  }

  componentDidMount() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getJobs().then((data) => {
      if (data) {
        this.setState({ jobs: data });
      }
    });
  }

  createJob(companyName, title, content, link, file) {
    this.jobService
      .createJob(companyName, title, content, link, file, this.state.currentUser.userId)
      .then(() => this.loadJobs());
  }

  updateJob(jobId) {
    this.jobService.getJobs(jobId).then((updateJob) => {
      const updatedJobs = this.state.jobss.map((job) => {
        if (job.jobIdId === jobId) {
          return updateJob;
        }
        return job;
      });
      this.setState({ jobs: updatedJobs });
    });
  }

  createComment(jobId, content) {
    this.commentService
      .createComment(this.state.currentUser.userId, jobId, content)
      .then(() => this.updateJob(jobId));
  }

  render() {
    return (
      <Container style={{ width: "50%" }}>
        <CreateJob createJob = {this.createJob} />
        {this.state.jobs &&
          this.state.jobs.map((job, i) => (
            <Jobitem
              isAdmin={this.props.isAdmin}
              createComment={this.createComment}
              key={i}
              {...job}
            />
          ))}
      </Container>
    );
  }
}
