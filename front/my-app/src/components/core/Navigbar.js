import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
const Navigbar = () => {
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
                {" "}
                <Nav.Link href="/Photos">Photos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Admin">Admin</Nav.Link>
              </Nav.Item>
              <Button
                href="https://www.helloasso.com/associations/graine-de-citoyen-montgesnois/adhesions/adhesions-2022-1"
                variant="dark"
                target="_blank"
                rel="noreferrer"
              >
                Adhérer
              </Button>
            </Nav>
            <Nav className="justify-content-end">
              <NavDropdown title="Action" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/Profil">Profil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigbar;
