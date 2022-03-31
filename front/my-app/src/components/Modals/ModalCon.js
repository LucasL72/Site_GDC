import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import ModalLostPass from "./ModalLostPass";

const ModalCon = (props) => {
  const [modalLostShow, setModalLostShow] = React.useState(false);
  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalConn" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalConn">
            Se Connecter/S'Inscrire {""}
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
                    label="Mot de Passe"
                    className="mb-3"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Votre Mot de Passe"
                      required
                    />
                  </FloatingLabel>
                </Col>

                <Col md={12}>
                  {" "}
                  <Button variant="success" type="submit" onClick={props.onHide}>
                    Se Connecter
                  </Button>{" "}
                  <Button variant="outline-success" href="/register">
                    S'Inscrire
                  </Button>
                </Col>
                <Col md={12}>
                  <Button className="mt-3" onClick={() => setModalLostShow(true)}>
                    Mot de passe oublié
                  </Button>
                  <ModalLostPass
                    show={modalLostShow}
                    onHide={() => setModalLostShow(false)}
                  />
                </Col>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalCon;
