import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'

export default function CreateComment(props) {

    const [content, setContent] = useState("");

    const handleSubmit = e => {
        e.preventDefault()
        props.createComment(content)
    }

    return <Form onSubmit={handleSubmit}>
        <Form.Control as="textarea" value={content} onChange={e => setContent(e.target.value)} placeholder="Comment here" />
        <br />
        <Button style={{ float: "right" }} variant3="primary" type="submit">Comment</Button>
    </Form>
}