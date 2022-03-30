import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
const NotFound = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="text-center">
              <h1>Error 404</h1>
              <img
                className=" img-fluid"
                src="../logoGDC.png"
                alt="logo assoc"
                width="500"
                height="600"
              ></img>
            </div>
          </Col>
          <Col md={12}>
            <div className="text-center mt-3">
              <Button href="/" variant="outline-dark">
                Retourner au site
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
