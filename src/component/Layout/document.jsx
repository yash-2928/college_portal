import React from "react";
import { CardActions, IconButton } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Download from '@material-ui/icons/GetApp';
import ReportIcon from '@material-ui/icons/Report';
import { Comment } from "@material-ui/icons/Comment";
import { Card } from "react-bootstrap";

class Document extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img
          width={64}
          height={64}
          className="mr-3"
          src="/public/Images/pdf_img.png"
          alt="Generic placeholder"
        />
        <Card.Body>
          <h5>{this.state.postTitel}</h5>
          <p>
           {this.state.postContent}         
          </p>
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
    );
  }
}

export default Document;