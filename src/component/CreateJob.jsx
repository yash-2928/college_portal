import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

export default function CreateJob(props) {
  const [companyName, setCompanyName] = useState("");
  const [jobContent, setJobContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createJob(companyName, jobContent, file);
  };

  return (
    <Form
      style={{
        border: "1px solid black",
        borderRadius: "7px",
        paddingTop: "20px",
        paddingLeft: "140px",
        paddingBottom: "20px",
        marginTop: "30px",
      }}
      onSubmit={handleSubmit}
    >
      <Form.Row>
        <Col sm={6}>
          <Form.Control
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter Company Name"
          />
        
          <Form.Control
            as="textarea"
            style={{marginTop: "5px"}}
            value={jobContent}
            onChange={(e) => setJobContent(e.target.value)}
            placeholder="Write Something about Job..."
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

          <Button style={{position:"absolute", bottom: "7px", right: "30px"}} variant="primary" type="submit">
            Post Job
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}
