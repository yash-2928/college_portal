import { CardActions, IconButton } from "@material-ui/core";
import { CloudDownload, Comment, Favorite, Report } from "@material-ui/icons";
import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import CommentItem from "./CommentItem";

export default class PostItem extends React.Component {

  comment() {
    <div style={{ padding: "0px 50px" }}>
      {this.props.comments?.map((comment, i) => (
        <CommentItem key={i} {...comment} />
      ))}
    </div>;
  }

  rander() {
    return (
      <Container fixed>
        <Card>
          <Card.Header>
            <Col>
              <Card.Img src="" roundedCircle />
              <Card.Text>
                {this.props.firstname}
                {this.props.lastname}
              </Card.Text>
              <Card.Date>{this.props.postDate}</Card.Date>
            </Col>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {this.props.postTitle}
              {this.props.contant}
            </Card.Text>
            {this.props.postType.startsWith('image') && <Card.Img variant="bottom" src={this.props.fileUrl} />}
            {this.props.postType === "application/pdf" && <div></div>}
          </Card.Body>
          <Card.Footer>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Favorite />
              </IconButton>
              <IconButton aria-label="download">
                <CloudDownload />
              </IconButton>
              <IconButton onclick={this.comment()} aria-label="comment">
                <Comment />
              </IconButton>
              <IconButton aria-label="report">
                <Report />
              </IconButton>
            </CardActions>
          </Card.Footer>
        </Card>
      </Container>
    );
  }
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