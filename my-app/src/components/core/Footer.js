import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { red } from "@mui/material/colors";
import jwt_decode from "jwt-decode";

const Footer = () => {
  const CheckLoggedInFooter = () => {
    const userToken = localStorage.getItem("user_token");

    if (!userToken)
      return (
        <>
          <div className="text-center">
            <p className="ftitle">Plan du site</p>
            <Nav className="flex-column">
              <Nav.Item className="navnav">
                <Nav.Link href="/">Accueil</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navnav">
                <Nav.Link href="/#/Blog">Actualités</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navnav">
                {" "}
                <Nav.Link href="/#/Photos">Nos Photos</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navnav">
                <Nav.Link href="/#/Contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </>
      );
    else if (userToken === "visitor")
      return (
        <>
          <div className="text-center">
            <p className="ftitle">Plan du site</p>
            <Nav className="flex-column">
              <Nav.Item className="navnav">
                <Nav.Link href="/">Accueil</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navnav">
                <Nav.Link href="/#/Blog">Nos Actualités</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navnav">
                {" "}
                <Nav.Link href="/#/Photos">Nos Photos</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navnav">
                <Nav.Link href="/#/Contact">Qui Sommes Nous ?</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </>
      );
    else if (
      jwt_decode(userToken).isVerified === 1 &&
      jwt_decode(userToken).isBan === 0 &&
      jwt_decode(userToken).isAdmin === 1
    )
      return (
        <>
          <div className="text-center">
            <p className="ftitle">Plan du site</p>
            <Nav className="flex-column">
              <Nav.Item className="navnav">
                <Nav.Link href="/">Accueil</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navnav">
                <Nav.Link href="/#/Blog">Nos Actualités</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navnav">
                {" "}
                <Nav.Link href="/#/Photos">Nos Photos</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navnav">
                <Nav.Link href="/#/Contact">Qui Sommes Nous ?</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navnav">
                <Nav.Link href="/#/admin">Admin</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </>
      );
    else
      return (
        <>
          <div className="text-center">
            <p className="ftitle">Plan du site</p>
            <Nav className="flex-column">
              <Nav.Item className="navnav">
                <Nav.Link href="/">Accueil</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navnav">
                <Nav.Link href="/#/Blog">Nos Actualités</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navnav">
                {" "}
                <Nav.Link href="/#/Photos">Nos Photos</Nav.Link>
              </Nav.Item>
              <Nav.Item className="navnav">
                <Nav.Link href="/#/Contact">Qui Sommes Nous ?</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </>
      );
  };
  return (
    <div className="Footer">
      <div className="text-center">
        <Nav.Link href="/">
          <img
            alt="Logo association"
            src="../logoGDC.png"
            width="50"
            height="50"
          />
        </Nav.Link>
      </div>
      <Container fluid>
        <Row>
          <Col md={4}>
            <CheckLoggedInFooter />
          </Col>
          <Col md={4} className="text-center">
            <p className=" ftitle text-center">Nos Partenaires</p>
            <p className="text-wrap fs-6 text-break lh-1 text-justify">
              Ils ont contribué à nos activités, soit par le don de matériaux,
              de temps ou encore en nous soutenant financièrement :
            </p>
            <ul>
              <li className="mt-2">
                <a
                  href="https://www.reseaupro.fr/"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <img
                    src="../Docs/reso_pro.png"
                    alt="reseau-pro"
                    height="50"
                    width="50"
                    className="icon rounded-circle"
                  ></img>
                  Réseau Pro de Saint Mars la Brière
                </a>{" "}
              </li>
              <li className="mt-2">
                <a
                  href="https://hunaudieresmateriaux.fr"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <img
                    src="../Docs/hunmat.png"
                    alt="huneaudiére_materieux"
                    height="50"
                    width="50"
                    className="icon rounded-circle"
                  ></img>
                  Hunaudières Matériaux à Ruaudin
                </a>{" "}
              </li>
              <li className="mt-2">
                <a
                  href="https://agrocampus-lagerminiere.fr"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <img
                    src="../Docs/germiniere.png"
                    alt="agrocampus-lagerminière"
                    height="50"
                    width="50"
                    className="icon rounded-circle"
                  ></img>
                  CFPPA la germinière
                </a>{" "}
              </li>
              <li className="mt2">
                <a
                  href="https://www.credit-agricole.fr/ca-anjou-maine/particulier/agence/anjou-maine/montfort-le-gesnois-2894.html"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <img
                    src="../Docs/ca.webp"
                    height="50"
                    width="50"
                    alt="Crédit agricole"
                    className="icon rounded-circle"
                  ></img>{" "}
                  Crédit Agricole de Montfort le Gesnois
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://www.montfort-le-gesnois.fr/"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <img
                    src="../Docs/mtfcolor2.webp"
                    alt="commune Montfort-le-gesnois"
                    height="50"
                    width="50"
                    className="icon rounded-circle"
                  ></img>
                  Commune de Montfort-Le-Gesnois
                </a>{" "}
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <div className="text-center">
              <p className="ftitle">Nos coordonnées</p>
              <p>
                <AddLocationAltIcon color="disabled" sx={{ fontSize: 30 }} /> 56
                Grande Rue 72450 Montfort-le-Gesnois
              </p>
              <p>
                {" "}
                <a
                  href="mailto: grainecitoyenmlg@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  <EmailIcon color="disabled" sx={{ fontSize: 30 }} /> Nous
                  Contacter
                </a>
              </p>
            </div>
            <Row className="mt-5">
              <Col md={12}>
                <div className="text-center">
                  <p className="ftitle">Nos réseaux sociaux</p>
                  <a
                    href="https://www.facebook.com/Graine-de-Citoyen-Montgesnois-103923238009537/?ref=page_internal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon fontSize="large" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UClvNSJpDc7GoYhQonhXKUqQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <YouTubeIcon sx={{ color: red[500] }} fontSize="large" />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12}>
            <p className="text-center">
              Created by ©Lucas Ledoux 2022{" "}
              <a
                href="https://www.linkedin.com/in/lucas-ledoux-244b0a175/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon color="disabled" sx={{ fontSize: 30 }} />
              </a>{" "}
              <a className="link" href="/#/Cgu">
                Mentions légales
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
