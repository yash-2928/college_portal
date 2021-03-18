import { IconButton } from "@material-ui/core";
import { Dashboard, Person, PhotoLibrary, Work } from "@material-ui/icons";
import React from "react";
import { Nav, Sidenav } from "rsuite";

class Drower extends React.Component {
  
  render() {
    return (
        <div style={{ width: 250 }}>
        <Sidenav activeKey="1">
          <Sidenav.Body>
            <Nav>
              <Nav.Link eventKey="1">
              <IconButton><Dashboard /></IconButton>
              Dashboard
              </Nav.Link>
              <Nav.Link eventKey="2">
              <IconButton><Person /></IconButton>
                User 
              </Nav.Link>
              <Nav.Link eventKey="3">
              <IconButton><PhotoLibrary /></IconButton>
                Posts
              </Nav.Link>
              <Nav.Link eventKey="4">
              <IconButton><Work /></IconButton>
                Jobs
              </Nav.Link>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    );
  }
}

export default Drower;
