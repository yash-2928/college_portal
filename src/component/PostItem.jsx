import { IconButton } from "@material-ui/core";
import { Comment, Delete } from "@material-ui/icons";
import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import CommentItem from "./CommentItem";
import CreateComment from "./CreateComment";
import DocumentView from './DocumentView';

export function PostTable(props) {

  const handleDelete = (postId) => {
    const confirmed = window.confirm("Do you want to delete this post?")
    if (confirmed) {
      props.deleteUser(postId);
    }
  }

  return <tr>
    <td>{props.postId}</td>
    <td>{props.user.firstname} {props.user.lastname}</td>
    <td>{props.postTitle}</td>
    <td>{props.content}</td>
    <td>{props.fileUrl}</td>
    <td><IconButton onClick={() => handleDelete(props.id)}><Delete /></IconButton></td>
  </tr>
}

export default function Postitem(props) {
  const [showComments, setShow] = useState(false)

  return (
    <Container style={{ paddingTop: "20px" }} fixed>
      <Card>
        <Card.Header>
          <Card.Title>
            <span>{props.user.firstname} {props.user.lastname}
              {props.isAdmin && <IconButton style={{ float: "right" }}><Delete /></IconButton>}
            </span>
          </Card.Title>
        </Card.Header>

        <Card.Body>
          <Card.Text>{props.postTitle}</Card.Text>
          <p>{props.content}</p>
          {props.postType && <DocumentView postType={props.postType} fileUrl={props.fileUrl} />}
        </Card.Body>
        <Card.Footer>
          <IconButton onClick={() => setShow(!showComments)}><Comment /></IconButton>
          {showComments && <div>
            <CreateComment createComment={(content) => props.createComment(props.postId, content)} />
            {props.comments.map((comment, i) => <CommentItem key={i} {...comment} />)}
          </div>}
        </Card.Footer>
      </Card>
    </Container>
  );
}

/*<div>
    <h1>{props.postTitle}</h1>
    <h3>{props.postDate}</h3>
    <p>{props.content}</p>
    <hr />
    <div style={{ padding: "0px 50px" }}>
        {props.comments?.map((comment, i) => <CommentItem key={i} {...comment} />)}
    </div>
</div>*/
