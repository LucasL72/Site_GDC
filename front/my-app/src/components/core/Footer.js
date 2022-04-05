import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
              <li>
                Réseau Pro de Saint Mars la Brière (lien :
                https://www.reseaupro.fr/a-saintmarslabriere )
              </li>
              <li>
                les Hunaudières Matériaux à Ruaudin (lien :
                https://hunaudieresmateriaux.fr)
              </li>
              <li>
                le CFPPA la germinière : https://agrocampus-lagerminiere.fr
              </li>
              <li>Crédit Agricole de Montfort le Gesnois</li>
              <li>Municipalité de Montfort-Le-Gesnois</li>
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
                <LocalPhoneIcon color="disabled" sx={{ fontSize: 30 }} />A check
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
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="text-center">
              <a
                href="https://www.facebook.com/Graine-de-Citoyen-Montgesnois-103923238009537/?ref=page_internal"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon color="disabled" fontSize="large" />
              </a>
              <a
                href="https://www.youtube.com/channel/UClvNSJpDc7GoYhQonhXKUqQ"
                target="_blank"
                rel="noreferrer"
              >
                <YouTubeIcon color="disabled" fontSize="large" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className="text-center">
              Created by Lucas Ledoux©2022 <a href="/Cgu">Mentions légales</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
