import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { replyMessage } from "../../store/actions/MessagesActions";

const ModalAnswer = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const [form, setForm] = useState("");
  const [author, setAut] = useState(item.author);
  const [email, setEmail] = useState(item.email);

  const handleChange = (prop) => (event) => {
    setForm({ ...form, [prop]: event.target.value });
  };

  const submitReplyMessage = (e) => {
    e.preventDefault();
    dispatch(replyMessage(form, { author, email }));
    setAut("");
    setEmail("");
  };

  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="ModalAnswer"
        key={item.id}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="ModalAnswer">
            Répondre à {author}
            <img
              alt="Logo association"
              src="../logoGDC.png"
              width="50"
              height="50"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => submitReplyMessage(e)}>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputDesc" label="Email">
                <Form.Control
                  as="textarea"
                  rows={2}
                  className="mb-3"
                  value={email}
                />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel
                controlId="floatingInputDesc"
                label="Votre Message"
              >
                <Form.Control
                  as="textarea"
                  rows={2}
                  className="mb-3"
                  onChange={handleChange(`reply`)}
                />
              </FloatingLabel>
            </Col>

            <Col sm={12}>
              <div className="text-center">
                <Button
                  
                  variant="outline-dark"
                  type="submit"
                  onClick={props.onHide}
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

export default ModalAnswer;
