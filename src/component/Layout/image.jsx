import React from "react";
import { CardActions, Container, IconButton } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Download from '@material-ui/icons/GetApp';
import ReportIcon from '@material-ui/icons/Report';
import { Card, Col } from "react-bootstrap";
import { Comment } from "@material-ui/icons/Comment";

class Image extends React.Component {
  render() {
    return (
      <Container fixed>
        <Card>
          <Card.Header>
            <Col>
              <Card.Img src="" roundedCircle />
              <Card.Text>User Name</Card.Text>
              <Card.Date></Card.Date>
            </Col>
          </Card.Header>
          <Card.Body>
            <Card.Img variant="bottom" src="" />
            <Card.Text>
              your post title and content here
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="download">
                <Download />
              </IconButton>
              <IconButton aria-label="comment">
                <Comment />
              </IconButton>
              <IconButton aria-label="report">
                <ReportIcon />
              </IconButton>
            </CardActions>
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}

export default Image;
