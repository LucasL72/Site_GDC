import React from "react";
import { Nav, Container } from "react-bootstrap";
const TabAdmin = () => {
  return (
    <div className="mt-2">
      <Container fluid>
        <Nav justify variant=" tabs" defaultActiveKey="/home">
          <Nav.Item className="tab-tabs">
            <Nav.Link href="/#/admin">Admin</Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab-tabs">
            <Nav.Link href="/#/admin/User" eventKey="link-1">
              Gestion Utilisateurs
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab-tabs">
            <Nav.Link href="/#/admin/Blog" eventKey="link-1">
              Gestion Articles
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab-tabs">
            <Nav.Link href="/#/admin/Photos" eventKey="link-1">
              Gestion Photos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab-tabs">
            <Nav.Link href="/#/admin/Events" eventKey="link-1">
              Gestion Evènements
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab-tabs">
            <Nav.Link href="/#/admin/Messages" eventKey="link-1">
              Gestion Messages
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
};

export default TabAdmin;
