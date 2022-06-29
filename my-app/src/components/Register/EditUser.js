import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../store/actions/UsersActions";
import jwt_decode from "jwt-decode";

const EditUser = (props) => {
  const userToken = localStorage.getItem("user_token");
  const { item } = props;
  const [password,setPassword] = useState("")
  const [email] = useState(jwt_decode(userToken).email)

  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const editData = {
      password:password,
      email:email,
      id: item.id,
    };
    dispatch(editUser(editData));
  };
  return (
    <div>
      <Container>
      <h2 className="text-center ssligne">Modifier</h2>
        <Row>
        <Form onSubmit={(e) => handleEdit(e)}>
            <Col md={12}>
              <Form.Label>Choisir une image de profil</Form.Label>
              <Form.Control className="mb-3" type="file" />
            </Col>
           
            <Row>
              <Col md={12}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    value={email}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Mot de Passe"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Confirmation Mot de Passe"
                  className="mb-3"
                >
                  <Form.Control type="password" required />
                </FloatingLabel>
              </Col>
            </Row>
            <div className="text-center mb-3">
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default EditUser;
