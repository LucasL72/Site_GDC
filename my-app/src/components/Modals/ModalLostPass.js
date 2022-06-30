import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Lostpass } from "../../store/actions/UsersActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const ModalLostPass = (props) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ici la fonction est asynchrone
  const handleFormLost = async (e) => {
    e.preventDefault();
    if (email) {
      dispatch(Lostpass({ email }));
      setEmail("");
    }
    alert("email envoyé");
    navigate("/");
  };
  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalConn" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalConn">
            Mot de passe oublié {""}
            <img
              alt="Logo association"
              src="../logoGDC.png"
              width="50"
              height="50"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Form onSubmit={(e) => handleFormLost(e)}>
                <Col md={12}>
                  {" "}
                  <FloatingLabel controlId="floatingInput" label="Votre Email">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Votre Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FloatingLabel>
                  <Form.Text className="text-muted mb-3"></Form.Text>
                </Col>
                <Col md={12}>
                  {" "}
                  <Button
                    variant="success"
                    type="submit"
                    onClick={props.onHide}
                  >
                    Envoyer
                  </Button>
                </Col>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" href="/" type="button">
            Retour à l'accueil
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalLostPass;
