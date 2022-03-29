import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const Banner = () => {
  return (
    <div className="banner mt-3">
      <Container>
        <Col md={12}>
          <h3 className="text-center ssligne mt-5">Evènement à venir</h3>
        </Col>
      </Container>
    </div>
  );
};

export default Banner;
