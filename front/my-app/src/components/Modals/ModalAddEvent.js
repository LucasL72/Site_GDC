import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const ModalAddEvent = (props) => {
  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalAddEvent" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalAddEvent">
            Ajouter un évènement {""}
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
          <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Date">
                <Form.Control
                  type="date"
                  placeholder="Titre"
                  className="mb-3"
                />
              </FloatingLabel>
            </Col>
          <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Titre">
                <Form.Control
                  type="text"
                  placeholder="Titre"
                  className="mb-3"
                />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputDesc" label="Description">
                <Form.Control as="textarea" rows={2} className="mb-3" />
              </FloatingLabel>
            </Col>

            <Col sm={12}>
              <div className="text-center">
                <Button
                  cla
                  variant="outline-dark"
                  type="submit"
                  onClick={props.onHide}
                >
                  Submit
                </Button>
              </div>
            </Col>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalAddEvent;
