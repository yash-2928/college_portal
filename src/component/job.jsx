import React from "react";
import { Container } from "react-bootstrap";
import JobService from "../service/jobService";
import ReportService from "../service/reportService";
import CommentService from "../service/commentService";
import { getSignedInUser } from '../util/common';
import CreateJob from "./CreateJob";
import Jobitem from "./JobItem";

export default class Job extends React.Component {

  jobService;
  reportService;
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
    this.reportService = new ReportService(this.state.currentUser.accessToken);
    this.loadJobs = this.loadJobs.bind(this);
    this.createJob = this.createJob.bind(this);
    this.createComment = this.createComment.bind(this);
    this.reportJob = this.reportJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
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

  createJob(companyName, content, file) {
    this.jobService
      .createJob(companyName, content, file, this.state.currentUser.userId)
      .then(() => this.loadJobs());
  }

  updateJob(jobId) {
    this.jobService.getJob(jobId).then((updateJob) => {
      const updatedJobs = this.state.jobs.map((job) => {
        if (job.jobId === jobId) {
          return updateJob;
        }
        return job;
      });
      this.setState({ jobs: updatedJobs });
    });
  }

  createComment(jobId, content) {
    this.commentService
      .createComment(this.state.currentUser.userId, content, null, jobId)
      .then(() => this.updateJob(jobId));
  }

  deleteJob(jobId) {
    this.jobService.deleteJob(jobId).then(() => this.loadJob());
  }

  reportJob(jobId, message) {
    this.reportService.report(
      this.state.currentUser.userId,
      message,
      null,
      jobId
    ).then(text => alert(text))
  }

  render() {
    return (
      <Container style={{ width: "50%" }}>
        <CreateJob createJob={this.createJob} />
        {this.state.jobs &&
          this.state.jobs.map((job, i) => (
            <Jobitem
              isAdmin={this.props.isAdmin}
              createComment={this.createComment}
              report={this.reportJob}
              key={i}
              {...job}
            />
          ))}
      </Container>
    );
  }
}
