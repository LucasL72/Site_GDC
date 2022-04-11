import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { urlImg } from "../../utils/url";
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
                src={`${urlImg + state.item.imgarticle}`}
                alt={state && state.item.title}
                width="700"
                height="550"
              ></img>
            </div>
          </Col>
          <Col md={12}>
            <p className="text-justify">{state && state.item.contenu}</p>
            <p className="text-justify">Auteur :{state && state.item.auteur}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailBlog;
