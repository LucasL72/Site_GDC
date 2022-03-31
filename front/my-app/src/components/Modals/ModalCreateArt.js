import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch } from "react-redux";
import { createArticle, getArticles } from "../../store/actions/ArticlesActions";

const ModalCreateArt = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const dispatch = useDispatch();
  

  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    e.preventDefault();

    console.log("submit form create article");

    if (title && description) {
      dispatch(createArticle({ title, description }));
      setTitle("");
      setDesc("");
      dispatch(getArticles());
    }
  };
  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalCreate"  centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalCreate">
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
          <Form onSubmit={(e) => handleForm(e)}>
            <Row>
              <Col sm={12}>
                <FloatingLabel controlId="floatingInputTitle" label="Titre">
                  <Form.Control
                    type="text"
                    placeholder="Titre"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mb-3"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputDesc" label="Description">
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={description}
                  onChange={(e) => setDesc(e.target.value)}
                  className="mb-3"
                />
              </FloatingLabel>
            </Col>

            <Col sm={12}>
              <div className="text-center">
                <Button cla variant="outline-dark" type="submit" onClick={props.onHide}>
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

export default ModalCreateArt;
