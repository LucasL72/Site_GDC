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
            <div className="text-center">
              <img
                className="img-fluid"
                src="./Docs/logo.png"
                alt="Logo GDC"
                width="500"
                height="350"
              ></img>
            </div>
          </Col>
          <Col md={6}>
            <h2 className="text-center ssligne">
              {" "}
              "Graine de Citoyen Montgesnois"{" "}
            </h2>
            <p className="text-justify">Lorem Lorem </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nous;
