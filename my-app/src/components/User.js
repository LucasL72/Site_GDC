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
        <Col className="mx-auto mt-3" md={6}>
          <Card text="light" className="user-details">
            <Card.Header className="text-center">
              <h2 className="text-center ssligne"> Mon Profil</h2>
              <img
                className="rounded-circle icon img-fluid"
                SS
                src={`${urlImgUsers + jwt_decode(userToken).imguser}`}
                alt="Profile pic"
                width="175"
                height="250"
              ></img>
            </Card.Header>
            <Card.Body className="text-center">
              <Row>
                <Col md={12}>
                  <h4 className="text-center ssligne"> Vos informations</h4>
                  <Card.Title>
                    Pseudo : {jwt_decode(userToken).pseudo}
                  </Card.Title>
                  <Card.Title>
                    Email : {jwt_decode(userToken).email}{" "}
                  </Card.Title>
                  <Card.Title>Nom : {jwt_decode(userToken).nom} </Card.Title>
                  <Card.Title>
                    Prénom : {jwt_decode(userToken).prenom}{" "}
                  </Card.Title>
                  <Card.Title>
                    Adresse : {jwt_decode(userToken).adresse}{" "}
                  </Card.Title>
                  <Card.Title>Ville : {jwt_decode(userToken).city} </Card.Title>
                  <Card.Title>
                    Code Postal : {jwt_decode(userToken).postal}{" "}
                  </Card.Title>
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
