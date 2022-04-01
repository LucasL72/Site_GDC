import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const ModalAddPic = (props) => {
  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalAddPic" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalAddPic">
            Créer un article {""}
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
              <FloatingLabel controlId="floatingInputTitle" label="Auteur">
                <Form.Control
                  type="text"
                  placeholder="Titre"
                  className="mb-3"
                />
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

export default ModalAddPic;
