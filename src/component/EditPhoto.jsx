import { Form, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

export default function EditPhoto(props) {
  const [file, setFile] = useState("null");

  const updatePhoto = () => {
    props.updatePhoto(file);
  };

  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header closeButton>
        <Modal.Title>Change Profile Pic</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control
              type="file"
              onChange={(e) =>
                setFile(e.target.files.length > 0 ? e.target.files[0] : null)
              }
              accept=".jpeg, .png"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={updatePhoto}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
}
