import { IconButton } from "@material-ui/core";
import { CloudDownloadRounded, Comment, Delete, Favorite, Report } from "@material-ui/icons";
import React, { useState } from "react";
import { Form, Button, Popover, Card, Container, OverlayTrigger, Col, Nav } from "react-bootstrap";
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
    <td>{props.report}</td>
    <td><IconButton onClick={() => handleDelete(props.id)}><Delete /></IconButton></td>
  </tr>
}

export default function Postitem(props) {
  const [showComments, setShow] = useState(false)
  const [reportMessage, setReportMessage] = useState("")

  return (
    <Container style={{ paddingTop: "20px" }} fixed>
      <Card>
        <Card.Header>
          <Card.Title>
            <Nav.Link href={"/user/" + props.user.id}>{props.user.firstname} {props.user.lastname}
              {props.isAdmin && <IconButton style={{ float: "right" }}><Delete /></IconButton>}
            </Nav.Link>
          </Card.Title>
        </Card.Header>

        <Card.Body>
          <Card.Text>{props.postTitle}</Card.Text>
          <p>{props.content}</p>
          {props.postType && <DocumentView postType={props.postType} fileUrl={props.fileUrl} width={400} height={200} />}
        </Card.Body>
        <Card.Footer>
          <a href={props.fileUrl} target="_blank" rel="noopener noreferrer" download>
            <IconButton><CloudDownloadRounded /></IconButton>
          </a>
          <IconButton onClick={() => setShow(!showComments)}><Comment /></IconButton>
          {showComments && <div>
            <CreateComment createComment={(content) => props.createComment(props.postId, content)} />
            {props.comments.map((comment, i) => <CommentItem key={i} {...comment} />)}
          </div>}
          <OverlayTrigger trigger="click" placement="right"
            overlay={<Popover id="popover-basic">
              <Popover.Title as="h3">Report Message</Popover.Title>
              <Popover.Content>
                <Form>
                  <Form.Row className="align-items-center">
                    <Col xs="auto">
                      <Form.Control className="mb-2" value={reportMessage} onChange={e => setReportMessage(e.target.value)} type="text" placeholder="Write something..." />
                    </Col>
                    <Col xs="auto">
                      <Button className="mb-2" onClick={() => props.report(props.postId, reportMessage)} >Report</Button>
                    </Col>
                  </Form.Row>
                </Form>
              </Popover.Content>
            </Popover>}>
            <IconButton style={{ alignItems: "flex-end" }}><Report /></IconButton>
          </OverlayTrigger>
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
