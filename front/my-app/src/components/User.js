import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import jwt_decode from "jwt-decode";
import { urlImgUsers } from "../utils/url";

const User = () => {
  const userToken = localStorage.getItem("user_token");
  return (
    <div>
      <Container>
        <Col md={12} className="mt-3">
          <Card text="light" className="user-details">
            <Card.Header className="text-center  ssligne h2">Mon Profil</Card.Header>
            <Card.Body>
              <Row md={2}>
                <Col md={6}>
                  <h4 className="text-center ssligne"> Votre Photo de profil</h4>
                  <img
                    className="img-fluid rounded-circle circle"
                    src={`${urlImgUsers + jwt_decode(userToken).imguser }`}
                    alt="Profile pic"
                    width="600"
                    height="500"
                  ></img>
                </Col>
                <Col md={6}>
                  <h4 className="text-center ssligne"> Vos informations</h4>
                  <Card.Title>Pseudo :  {jwt_decode(userToken).pseudo}</Card.Title>
                  <Card.Title>Email : {jwt_decode(userToken).email} </Card.Title>
                  <Card.Title>Nom : </Card.Title>
                  <Card.Title>Prénom : </Card.Title>
                  <Card.Title>Adresse : </Card.Title>
                  <Card.Title>Ville : </Card.Title>
                  <Card.Title>Code Postal : </Card.Title>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
};

export default User;
