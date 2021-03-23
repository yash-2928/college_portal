import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

export default function CreatePost(props) {
  //const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createPost(content, file);
  };

  return (
    <Form
      style={{
        border: "1px solid black",
        borderRadius: "7px",
        paddingLeft: "70px",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginTop: "30px",
      }}
      onSubmit={handleSubmit}
    >
      <Form.Row>
        <Col sm={7}>
          <Form.Control
            as="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write Something..."
          />
        </Col>

        <Col>
          <Form.Control
            type="file"
            onChange={(e) =>
              setFile(e.target.files.length > 0 ? e.target.files[0] : null)
            }
            accept=".jpeg, .png, .pdf, .docs"
          />
        
          <Button style={{marginTop:"5px", marginLeft:"3px" }} variant="primary" type="submit">
            Post
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}
