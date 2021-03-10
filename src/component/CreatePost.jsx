import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function CreatePost(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createPost(title, content, file);
  };

  return (
    <Form
      style={{
        border: "1px solid black",
        borderRadius: "7px",
        paddingLeft: "160px",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginTop: "30px",
      }}
      onSubmit={handleSubmit}
    >
      <Form.Group as={Row} controlId="title">
        <Col sm="9">
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Post Title"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="content">
        <Col sm="9">
          <Form.Control
            as="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write Something..."
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="type">
        <Col sm="9">
          <Form.Control
            type="file"
            onChange={(e) =>
              setFile(e.target.files.length > 0 ? e.target.files[0] : null)
            }
            accept=".jpeg, .png, .pdf, .docs"
          />
        </Col>
      </Form.Group>

      <Button variant="primary" type="submit">
        Post
      </Button>
    </Form>
  );
}
