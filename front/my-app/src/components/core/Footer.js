import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="Footer">
      <p className="text-center">Graine de Citoyen Montgesnois</p>
      <Container fluid>
        <Row>
          <Col md={4}>
            <div className="text-center">
              <p>Plan du site</p>
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
            </div>
          </Col>

          <Col md={4}>
            <p className="text-center">Nos Partenaires</p>
          </Col>
          <Col md={4}>
            <p className="text-center">Contact</p>
            <p>Tél:</p>
            <p>Adresse: grainecitoyenmlg@gmail.com </p>
            <p>Email: </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="text-center">
              <FacebookIcon fontSize="large" />
              <InstagramIcon fontSize="large" />
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
