import { IconButton } from "@material-ui/core";
import { Dashboard, Person, PhotoLibrary, Work } from "@material-ui/icons";
import React from "react";
import { Icon, Nav, Sidenav } from "rsuite";

export default function Drower(props) {

  return (
    <div style={{ width: 250 }}>
      <Sidenav activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
              Dashboard
              </Nav.Item>
            <Nav.Item eventKey="2">
              <IconButton><Person /></IconButton>
                User
              </Nav.Item>
            <Nav.Item eventKey="3">
              <IconButton><PhotoLibrary /></IconButton>
                Posts
              </Nav.Item>
            <Nav.Item eventKey="4">
              <IconButton><Work /></IconButton>
                Jobs
              </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}
