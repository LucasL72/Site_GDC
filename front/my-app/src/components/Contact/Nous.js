import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Nous = () => {
  return (
    <div>
      <Container>
        <h2 className="text-center ssligne"> Qui Sommes Nous ? </h2>
        <Row>
          <Col md={6}>
            <img
              className="img-fluid"
              src="./Docs/logo.png"
              alt="Logo GDC"
            ></img>
          </Col>
          <Col md={6}>
            <h2 className="text-center ssligne"> "Graine de citoyen Montgesnois"  </h2>
            <p className="text-justify">Lorem Lorem </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nous;
