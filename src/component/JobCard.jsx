import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import UserIcon from "../images/user.png";
import CommentItem from "./CommentItem";
import CreateComment from "./CreateComment";
import moment from "moment";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: "20px",
    position: "relative",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function JobCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [showComments, setShow] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dateString = props.postDate;
  const date = moment(dateString);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            alt="profile image"
            //user props
            src={props.user.fileUrl || UserIcon}
            className={classes.large}
            className={classes.avatar}
          />
        }
        action={
          <IconButton onClick={() => props.deleteJob(props.jobId)}>
            <Delete />
          </IconButton>
        }
        title={props.user.firstname + props.user.lastname + props.jobId}
        subheader={date.format("DD/MM/YYYY")}
      />
      <CardMedia
        className={classes.media}
        //post props
        image={props.fileUrl}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.companyName}
          <br />
          {props.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse onClick={() => setShow(!showComments)}>
        <CardContent>
          <Typography paragraph>
            {showComments && (
              <div>
                <CreateComment
                  createComment={(content) =>
                    props.createComment(props.jobId, content)
                  }
                />
                {props.comments.map((comment, i) => (
                  <CommentItem key={i} {...comment} />
                ))}
              </div>
            )}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
