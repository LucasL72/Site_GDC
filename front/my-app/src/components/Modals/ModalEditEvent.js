import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editEvent } from "../../store/actions/EventActions";

const ModalEditEvent = (props) => {
  const { item } = props;
  const [title, setTitle] = useState(item.title);
  const [content, setCont] = useState(item.content);
  const [date, setDate] = useState(item.date);
  const [heure, setHeure] = useState(item.heure);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const editData = {
      title: title,
      date: date,
      heure: heure,
      content: content,
      id: item.id,
    };

    dispatch(editEvent(editData));
  };

  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalEditEvent" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalEditEvent">
             Modifier évènement {""}
            <img
              alt="Logo association"
              src="../logoGDC.png"
              width="50"
              height="50"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleEdit(e)}>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Date">
                <Form.Control
                  type="date"
                  placeholder="Titre"
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
                   Valider Modification ?
                </Button>
              </div>
            </Col>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalEditEvent;
