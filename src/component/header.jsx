import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            {this.props.isAdmin && <Nav.Link href="/admin">Admin</Nav.Link>}
            <Nav.Link href="/post">Post</Nav.Link>
            <Nav.Link href="/job">Job</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl style={{ marginRight: '16px' }} type="text" placeholder="Search" className="mr-sm-2" />
            <Button style={{ marginRight: '10px' }} variant="outline-info">Search</Button>
            <Button style={{ marginRight: '12px' }} onClick={this.props.logout}>Logout</Button>
          </Form>
        </Navbar>
      </>
    );
  }
}

export default Header;
