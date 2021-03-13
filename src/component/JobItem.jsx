import { IconButton } from "@material-ui/core";
import { Comment, Delete } from "@material-ui/icons";
import { React, useState } from "react";
import { Card, Container } from "react-bootstrap";
import DocumentView from "./DocumentView";
import CreateComment from "./CreateComment";
import CommentItem from "./CommentItem";


export function JobTable(props) {

  const handleDelete = (JobId) => {
    const confirmed = window.confirm("Do you want to delete this Job?")
    if (confirmed) {
      props.deleteUser(JobId);
    }
  }

  return <tr>
    <td>{props.jobId}</td>
    <td>{props.user.firstname} {props.user.lastname}</td>
    <td>{props.jobTitle}</td>
    <td>{props.content}</td>
    <td>{props.fileUrl}</td>
    <td>{props.report}</td>
    <td><IconButton onClick={() => handleDelete(props.id)}><Delete /></IconButton></td>
  </tr>
}

export default function Jobitem(props) {
  const [showComments, setShow] = useState(false)

  return (
    <Container style={{ paddingTop: "20px" }} fixed>
      <Card>
        <Card.Header>
          <Card.Title>
            <span>{props.user.firstname} {props.user.lastname}</span>
            {props.isAdmin && <IconButton style={{ float: "right" }}><Delete /></IconButton>}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{props.companyName}</Card.Text>
          <Card.Text>{props.jobTitle}</Card.Text>
          <p>{props.content}</p>
          <Card.Text>{props.link}</Card.Text>
          {props.postType && <DocumentView postType={props.postType} fileUrl={props.fileUrl} />}
        </Card.Body>
        <Card.Footer>
          <IconButton onClick={() => setShow(!showComments)}><Comment /></IconButton>
          {showComments && <div>
            <CreateComment createComment={(content) => props.createComment(props.jobId, content)} />
            {props.comments.map((comment, i) => <CommentItem key={i} {...comment} />)}
          </div>}
        </Card.Footer>
      </Card>
    </Container>
  );
}