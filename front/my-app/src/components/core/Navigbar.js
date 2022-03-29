import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import React from "react";
const Navigbar = () => {
  const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <a
      href="./logoGDC.png"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <img
        src="./logoGDC.png"
        width="40"
        height="40"
        alt="Logo association"
      ></img>
    </a>
  ));
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="Green" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo association"
              src="./logoGDC.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link href="/">Accueil</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Blog">Actualités</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Photos">Photos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Contact">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Admin">Admin</Nav.Link>
              </Nav.Item>
              <Button
                href="https://www.helloasso.com/associations/graine-de-citoyen-montgesnois/adhesions/adhesions-2022-1"
                variant="warning"
                target="_blank"
                rel="noreferrer"
              >
                Adhérer
              </Button>
            </Nav>
            <Nav className="justify-content-end">
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                ></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/Profil">Profil</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#action/3.4">Log out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigbar;
