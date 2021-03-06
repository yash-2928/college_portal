import { CardActions, IconButton } from "@material-ui/core";
import { CloudDownload, Comment, Favorite, Report } from "@material-ui/icons";
import React, { useState } from "react";
import { Card, Col, Container } from "react-bootstrap";
import CommentItem from "./CommentItem";
import DocumentView from './DocumentView'




export default function Postitem(props) {

  return (
    <Container fixed>
      <Card>
        <Card.Header>
          <Card.Title>{props.user.firstname} {props.user.lastname}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{props.postTitle}</Card.Text>
          <p>{props.content}</p>
          {props.postType && <DocumentView postType={props.postType} fileUrl={props.fileUrl} />}
        </Card.Body>
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
