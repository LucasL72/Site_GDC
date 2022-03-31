import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const ModalLostPass = (props) => {
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
              <Form>
                <Col md={12}>
                  {" "}
                  <FloatingLabel controlId="floatingInput" label="Votre Email">
                    <Form.Control
                      type="email"
                      placeholder="Votre Email"
                      required
                    />
                  </FloatingLabel>
                  <Form.Text className="text-muted mb-3">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Col>
                <Col md={12}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Votre Pseudo"
                    className="mb-3"
                  >
                    <Form.Control
                      type="name"
                      placeholder="Votre pseudo"
                      required
                    />
                  </FloatingLabel>
                </Col>
                <Col md={12}>
                  {" "}
                  <Button variant="success" type="submit">
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
