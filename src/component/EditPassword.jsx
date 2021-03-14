import { Form, Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react'

export default function EditPassword(props) {

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const updatePassword = () => {
        if (currentPassword && newPassword) {
            props.updatePassword(currentPassword, newPassword)
        }
    }

    return <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                        onChange={e => setCurrentPassword(e.target.value)}
                        value={currentPassword}
                        type="password"
                        placeholder="Enter Current Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        onChange={e => setNewPassword(e.target.value)}
                        value={newPassword}
                        type="password"
                        placeholder="Enter New Password" />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={updatePassword}>Update</Button>
        </Modal.Footer>
    </Modal>
}