import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { createEvent, getEvent } from "../../store/actions/EventActions";

const ModalAddEvent = (props) => {
  const [title, setTitle] = useState("");
  const [content, setCont] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const dispatch = useDispatch();
  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    e.preventDefault();

    if (title && content && date) {
      dispatch(createEvent({ title, content, date, heure }));
      setTitle("");
      setCont("");
      setDate("");
      setHeure("");
      dispatch(getEvent());
    }
    alert("Evenements ajouté !");
  };

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
          <Form onSubmit={(e) => handleForm(e)}>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Date">
                <Form.Control
                  type="date"
                  placeholder="Date"
                  className="mb-3"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Heure">
                <Form.Control
                  type="time"
                  placeholder="Heure"
                  className="mb-3"
                  value={heure}
                  onChange={(e) => setHeure(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Titre">
                <Form.Control
                  type="text"
                  placeholder="Titre"
                  className="mb-3"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputDesc" label="Description">
                <Form.Control
                  as="textarea"
                  rows={2}
                  maxLength={255}
                  className="mb-3"
                  value={content}
                  onChange={(e) => setCont(e.target.value)}
                />
              </FloatingLabel>
            </Col>

            <Col sm={12}>
              <div className="text-center">
                <Button
                  variant="outline-dark"
                  type="submit"
                  onClick={props.onHide}
                  value="send"
                >
                  Confirmer
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
