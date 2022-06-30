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

const EditUser = () => {
  const userToken = localStorage.getItem("user_token");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [email] = useState(jwt_decode(userToken).email);
  const dispatch = useDispatch();

  const sendForm = (e) => {
    e.preventDefault();

    const editData = {
      password: password,
      email: email,
      id: jwt_decode(userToken).id,
    };
    dispatch(editUser(editData));
    alert("mot de passe changé ! ");
    window.location.reload();
  };
  return (
    <div>
      <Container>
        <h2 className="text-center ssligne">Modifier mot de passe</h2>
        <Row>
          <Form onSubmit={(e) => sendForm(e)}>
            <Row>
              <Col md={12}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control type="email" value={email} />
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
                  <Form.Control
                    type="password"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required
                  />
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
