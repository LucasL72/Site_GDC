import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ModalCon from "../Modals/ModalCon";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { urlImgUsers } from "../../utils/url";

const Navigbar = () => {
  const CheckLoggedIn = () => {
    const [modalConnShow, setModalConnShow] = React.useState(false);
    const navigate = useNavigate();
    const logout = () => {
      localStorage.setItem('user_token', 'visitor')
      navigate("/");
    };
    const userToken = localStorage.getItem("user_token");
    const CustomToggle = React.forwardRef(({ onClick }, ref) => (
      <a
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
       <img
        src={`${urlImgUsers + jwt_decode(userToken).imguser }`}
        width="60"
        height="60"
        alt={jwt_decode (userToken).pseudo}
        className="rounded-circle icon"
      ></img>
      </a>
    ));

    if (!userToken)
      return (
        <>
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
            <Button
              href="https://www.helloasso.com/associations/graine-de-citoyen-montgesnois/adhesions/adhesions-2022-1"
              variant="warning"
              target="_blank"
              rel="noreferrer"
            >
              Adhérer
            </Button>
            <a
              href="https://www.facebook.com/Graine-de-Citoyen-Montgesnois-103923238009537/?ref=page_internal"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon color="disabled" sx={{ fontSize: 40 }} />
            </a>
            <a
              href="https://www.youtube.com/channel/UClvNSJpDc7GoYhQonhXKUqQ"
              target="_blank"
              rel="noreferrer"
            >
              <YouTubeIcon color="disabled" sx={{ fontSize: 40 }} />
            </a>
          </Nav>
          <Nav>
            <a
              className="btn btn-full text-center"
              onClick={() => setModalConnShow(true)}
            >
              S'Inscrire/Se Connecter
            </a>
            <ModalCon
              show={modalConnShow}
              onHide={() => setModalConnShow(false)}
            />
          </Nav>
        </>
      );
      else if (userToken === "visitor")
      return (
        <>
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
            <Button
              href="https://www.helloasso.com/associations/graine-de-citoyen-montgesnois/adhesions/adhesions-2022-1"
              variant="warning"
              target="_blank"
              rel="noreferrer"
            >
              Adhérer
            </Button>
            <a
              href="https://www.facebook.com/Graine-de-Citoyen-Montgesnois-103923238009537/?ref=page_internal"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon color="disabled" sx={{ fontSize: 40 }} />
            </a>
            <a
              href="https://www.youtube.com/channel/UClvNSJpDc7GoYhQonhXKUqQ"
              target="_blank"
              rel="noreferrer"
            >
              <YouTubeIcon color="disabled" sx={{ fontSize: 40 }} />
            </a>
          </Nav>
          <Nav>
            <a
              className="btn btn-full text-center"
              onClick={() => setModalConnShow(true)}
            >
              S'Inscrire/Se Connecter
            </a>
            <ModalCon
              show={modalConnShow}
              onHide={() => setModalConnShow(false)}
            />
          </Nav>
        </>
      );
    else if (jwt_decode (userToken).isVerified === 1 && jwt_decode (userToken).isBan === 0 && jwt_decode (userToken).isAdmin === 1)
      return (
        <>
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
            <a
              href="https://www.facebook.com/Graine-de-Citoyen-Montgesnois-103923238009537/?ref=page_internal"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon color="disabled" sx={{ fontSize: 40 }} />
            </a>
            <a
              href="https://www.youtube.com/channel/UClvNSJpDc7GoYhQonhXKUqQ"
              target="_blank"
              rel="noreferrer"
            >
              <YouTubeIcon color="disabled" sx={{ fontSize: 40 }} />
            </a>
          </Nav>
          <Nav>
            <Dropdown drop="start">
              <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-button-dark-example1"
              ></Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="/Profil">Mon Profil</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logout}>Se déconnecter</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </>
      );
    else
      return (
        <>
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
            <Button
              href="https://www.helloasso.com/associations/graine-de-citoyen-montgesnois/adhesions/adhesions-2022-1"
              variant="warning"
              target="_blank"
              rel="noreferrer"
            >
              Adhérer
            </Button>
            <a
              href="https://www.facebook.com/Graine-de-Citoyen-Montgesnois-103923238009537/?ref=page_internal"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon color="disabled" sx={{ fontSize: 40 }} />
            </a>
            <a
              href="https://www.youtube.com/channel/UClvNSJpDc7GoYhQonhXKUqQ"
              target="_blank"
              rel="noreferrer"
            >
              <YouTubeIcon color="disabled" sx={{ fontSize: 40 }} />
            </a>
          </Nav>
          <Nav>
            <Dropdown drop="start">
              <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-button-dark-example1"
              ></Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="/Profil">Mon Profil</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logout}>Se déconnecter</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </>
      );
      
  };

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
            <CheckLoggedIn />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigbar;
