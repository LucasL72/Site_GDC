import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ModalEditUser = (props) => {
  return (
    <div>
      *
      <Modal {...props} size="lg" aria-labelledby="ModalEdit" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalEdit">
            Editer {""}
            <img
              alt="Logo association"
              src="../logoGDC.png"
              width="50"
              height="50"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Col md={12}>
              <Form.Label>Choisir votre image</Form.Label>
              <Form.Control type="file" className="mb-3" />
            </Col>{" "}
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Pseudo">
                <Form.Control
                  type="text"
                  placeholder="Pseudo"
                  className="mb-3"
                />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Email">
                <Form.Control
                  type="text"
                  placeholder="Email"
                  className="mb-3"
                />
              </FloatingLabel>
            </Col>
            <Row>
              <Col sm={6}>
                <FloatingLabel controlId="floatingInputTitle" label="Prénom">
                  <Form.Control
                    type="text"
                    placeholder="Prénom"
                    className="mb-3"
                  />
                </FloatingLabel>
              </Col>
              <Col sm={6}>
                <FloatingLabel controlId="floatingInputTitle" label="Nom">
                  <Form.Control
                    type="text"
                    placeholder="Nom"
                    className="mb-3"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Adresse">
                <Form.Control
                  type="text"
                  placeholder="Adresse"
                  className="mb-3"
                />
              </FloatingLabel>
            </Col>
            <Row>
              <Col sm={6}>
                <FloatingLabel controlId="floatingInputTitle" label="Ville">
                  <Form.Control
                    type="text"
                    placeholder="Prénom"
                    className="mb-3"
                  />
                </FloatingLabel>
              </Col>
              <Col sm={6}>
                <FloatingLabel
                  controlId="floatingInputTitle"
                  label="Code Postal"
                >
                  <Form.Control
                    type="text"
                    placeholder="Prénom"
                    className="mb-3"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <div className="text-center">
              <Button
                cla
                variant="outline-dark"
                type="submit"
                onClick={props.onHide}
              >
                Valider Modification ?
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalEditUser;
