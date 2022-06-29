import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { createCom, getCom } from "../../store/actions/ComsActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddComs = (props) => {
  const [content, setCont] = useState("");
  const dispatch = useDispatch();

  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    e.preventDefault();

    if (content) {
      dispatch(createCom({ content }));
      setCont("");
      dispatch(getCom());
    }
  };
  return (
    <div>
      <Container>
        <Col md={12}>
          <h3 className="text-center ssligne"> Ajouter un commentaire</h3>
        </Col>
        <Form onSubmit={(e) => handleForm(e)}>
          <Col md={12}>
            <FloatingLabel
              controlId="floatingInput"
              label="Votre message"
              className="mb-3"
            >
              <Form.Control
                name="message"
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setCont(e.target.value)}
              />
            </FloatingLabel>
            <div className="text-center mb-3">
              <Button variant="outline-success" type="submit">
                Envoyer
              </Button>
            </div>
          </Col>
        </Form>
      </Container>
    </div>
  );
};

export default AddComs;
