import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { red } from '@mui/material/colors';

const Footer = () => {
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
            <div className="text-center">
              <p className="ftitle">Plan du site</p>
              <Nav className="flex-column">
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
                  <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/Admin">Admin</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col md={4}>
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
                >
                  <img
                    src="../Docs/reso_pro.png"
                    alt="reseau-pro"
                    height="50"
                    width="50"
                  ></img>
                </a>{" "}
                Réseau Pro de Saint Mars la Brière
              </li>
              <li className="mt-2">
                <a
                  href="https://hunaudieresmateriaux.fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="../Docs/hunmat.png"
                    alt="huneaudiére_materieux"
                    height="50"
                    width="50"
                  ></img>
                </a>{" "}
                Hunaudières Matériaux à Ruaudin
              </li>
              <li className="mt-2">
                <a
                  href="https://agrocampus-lagerminiere.fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="../Docs/germiniere.png"
                    alt="agrocampus-lagerminière"
                    height="50"
                    width="50"
                  ></img>
                </a>{" "}
                CFPPA la germinière
              </li>
              <li className="mt-2">
                <img
                  src="../Docs/ca.webp"
                  height="50"
                  width="50"
                  alt="Crédit agricole"
                ></img>{" "}
                Crédit Agricole de Montfort le Gesnois
              </li>
              <li className="mt-2">
                <a
                  href="https://www.montfort-le-gesnois.fr/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-part"
                >
                  <img
                    src="../Docs/mtfcolor2.webp"
                    alt="commune Montfort-le-gesnois"
                    height="50"
                    width="50"
                  ></img>
                </a>{" "}
                Commune de Montfort-Le-Gesnois
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
                >
                  <EmailIcon color="disabled" sx={{ fontSize: 30 }} />
                </a>
                grainecitoyenmlg@gmail.com
              </p>
            </div>
            <Row className="mt-5">
              <Col md={12} >
                <div className="text-center">
                  <p className="ftitle">Nos réseaux sociaux</p>
                  <a
                    href="https://www.facebook.com/Graine-de-Citoyen-Montgesnois-103923238009537/?ref=page_internal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon  fontSize="large" />
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
              Created by Lucas Ledoux©2022{" "}
              <a
                href="https://github.com/LucasL72"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon color="disabled" fontSize="large" />
              </a>{" "}
              <a href="/Cgu">Mentions légales</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
