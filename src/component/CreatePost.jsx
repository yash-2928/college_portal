import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

export default function CreatePost(props) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [type, setType] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createPost(title, content, type);
    }

    return <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="title">
            <Form.Label column sm="3">Title</Form.Label>
            <Col sm="9">
                <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter Post Title" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="content">
            <Form.Label column sm="3">Content</Form.Label>
            <Col sm="9">
                <Form.Control as="textarea" value={content} onChange={e => setContent(e.target.value)} placeholder="Write Something..." />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="type">
            <Form.Label column sm="3">type</Form.Label>
            <Col sm="9">
                <Form.Control type="file" value={type} onChange={e => setType(e.target.value)} accept=".jpeg, .png, .pdf, .docs" />
            </Col>
        </Form.Group>

        <Button variant="primary" type="submit">Post</Button>
    </Form>
}