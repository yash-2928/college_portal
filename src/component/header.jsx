import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto" style={{ marginLeft: '190px' }}>
            {this.props.isAdmin && <Nav.Link href="/admin">Admin</Nav.Link>}
            <Nav.Link href="/post">Post</Nav.Link>
            <Nav.Link href="/job">Job</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
          <Form inline>
            <Button style={{ marginRight: '190px' }} onClick={this.props.logout}>Logout</Button>
          </Form>
        </Navbar>
      </>
    );
  }
}

export default Header;
