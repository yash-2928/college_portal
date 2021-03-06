import { CardActions, IconButton } from "@material-ui/core";
import { CloudDownload, Comment, Favorite, Report, Delete } from "@material-ui/icons";
import React, { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import CommentItem from "./CommentItem";
import CreateComment from "./CreateComment";
import DocumentView from './DocumentView'




export default function Postitem(props) {
  const [showComments, setShow] = useState(false)

  return (
    <Container fixed>
      <Card>
        <Card.Header>
          <Card.Title>
            <span>{props.user.firstname} {props.user.lastname}</span>
            {props.isAdmin && <IconButton style={{ float: "right" }}><Delete /></IconButton>}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{props.postTitle}</Card.Text>
          <p>{props.content}</p>
          {props.postType && <DocumentView postType={props.postType} fileUrl={props.fileUrl} />}
        </Card.Body>
        <Card.Footer>
          <IconButton onClick={() => setShow(!showComments)}><Comment /></IconButton>
          {/* <Button onClick={() => setShow(!showComments)}>{showComments ? "Hide" : "Show"}</Button> */}
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
