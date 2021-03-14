import { Form, Button, Modal } from 'react-bootstrap';
import React from 'react'

export default class EditPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: props.currentUser.password
        }

        this.updatePasswordRequest = this.updatePasswordRequest.bind(this)
        this.handleFieldUpdate = this.handleFieldUpdate.bind(this)
    }

    handleFieldUpdate(field, value) {
        this.setState({ [field]: value });
    }

    updatePassword() {
        this.props.updatePasswordRequest({ ...this.state });
        this.props.close();
    }

    render() {
        return <Modal show={this.props.show} onHide={this.props.close}>
            <Modal.Header closeButton>
                <Modal.Title>Change Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onChange={e => this.handleFieldUpdate("password", e.target.value)}
                            value={this.state.password}
                            type="password"
                            placeholder="Enter new Password" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.updatePassword}>Update</Button>
            </Modal.Footer>
        </Modal>
    }
}