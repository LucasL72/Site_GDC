import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Lostpass = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const editData = {
      email: email,
      password: password,
    };

    dispatch(editData);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <div className="text-center">
              <img
                className=" img-fluid logo"
                src="../../logoGDC.png"
                alt="logo assoc"
                width="300"
                height="300"
              ></img>
            </div>
          </Col>
          <h2 className="text-center ssligne"> Mot de Passe oublié </h2>
          <Col md={12}>
            <Row>
              <Form onSubmit={(e) => handleForm(e)}>
                <Col md={12}>
                  <FloatingLabel controlId="floatingInput" label="Votre Email">
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FloatingLabel>
                  <Form.Text className="text-muted mb-3">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Col>
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
                  <Button variant="outline-success" type="submit" value="send">
                    Submit
                  </Button>
                </div>
              </Form>
            </Row>

            <Col md={12}>
              <div className="text-center mt-3">
                <Button href="/" variant="outline-dark">
                  Retourner au site
                </Button>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Lostpass;
