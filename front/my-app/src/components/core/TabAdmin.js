import React from "react";
import { Nav, Container } from "react-bootstrap";
const TabAdmin = () => {
  return (
    <div className="mt-2">
      <Container fluid>
        <Nav justify variant=" tabs" defaultActiveKey="/home">
          <Nav.Item className="tab-tabs">
            <Nav.Link href="/Admin">Admin</Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab-tabs">
            <Nav.Link href="/Admin/User" eventKey="link-1">
              Gestion User
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab-tabs">
            <Nav.Link href="/Admin/Blog" eventKey="link-1">
              Gestion Articles & Commentaires
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab-tabs">
            <Nav.Link href="/Admin/Photos" eventKey="link-1">
              Gestion Photos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab-tabs">
            <Nav.Link href="/Admin/Events" eventKey="link-1">
              Gestion Evènements
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab-tabs">
            <Nav.Link href="/Admin/Messages" eventKey="link-1">
              Gestion Messages
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
};

export default TabAdmin;
