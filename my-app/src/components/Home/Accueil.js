import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Qui from "./Qui";
import Prog from "./Prog";
import Adhe from "./Adhe";

const accueil = () => {
  return (
    <div className="mb-4 mt-4">
      <Container>
        <h2 className="text-center ssligne mb-5"> Accueil</h2>
        <Row>
          <Col md={4}>
            {" "}
            <Prog />
          </Col>
          <Col md={4}>
            <Qui />
          </Col>
          <Col md={4}>
            <Adhe />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default accueil;
