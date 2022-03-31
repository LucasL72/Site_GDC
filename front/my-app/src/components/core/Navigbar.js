import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import ModalCon from "../Modals/ModalCon";

const Navigbar = () => {
  const [modalConnShow, setModalConnShow] = React.useState(false);
  const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <a
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <img
        src="../Docs/creative1.jpg"
        width="50"
        height="50"
        alt="profil pic"
        className="rounded-circle icon"
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
              src="../logoGDC.png"
              width="50"
              height="50"
              className="d-inline-block align-top "
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
              <a
                href="https://www.facebook.com/Graine-de-Citoyen-Montgesnois-103923238009537/?ref=page_internal"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon color="disabled" sx={{ fontSize: 40 }} />
              </a>
            </Nav>
            <Nav className="justify-content-end">
              <Button
                href="https://www.helloasso.com/associations/graine-de-citoyen-montgesnois/adhesions/adhesions-2022-1"
                variant="warning"
                target="_blank"
                rel="noreferrer"
              >
                Adhérer
              </Button>
            
              <a
                className="btn btn-full"
                onClick={() => setModalConnShow(true)}
              >
                S'Inscrire/Se Connecter
              </a>
              <ModalCon
                show={modalConnShow}
                onHide={() => setModalConnShow(false)}
              />
              <Dropdown drop="start">
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-button-dark-example1"
                ></Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="/Profil">Mon Profil</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Se déconnecter</Dropdown.Item>
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
