import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const DetailBlog = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/Blog");
  }, [navigate, state]);
  return (
    <div>
      <Container>
        <h1 className="text-center ssligne">{state && state.item.title}</h1>
        <Row>
          <Col md={12}>
            <div className="text-center">
              <img
                className="img-fluid"
                src="../Docs/creative1.jpg"
                alt={state && state.item.title}
                width="700"
                height="550"
              ></img>
            </div>
          </Col>
          <Col md={12}>
            <h2 className="text-decoration-underline"> Description: </h2>
            <p className="text-justify">{state && state.item.description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailBlog;
