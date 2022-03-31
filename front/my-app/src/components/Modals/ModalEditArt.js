import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch } from "react-redux";
import { editArticle } from "../../store/actions/ArticlesActions";

const ModalEditArt = (props) => {
  const { item } = props;
  const [title, setTitle] = useState(item.title);
  const [description, setDesc] = useState(item.description);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const editData = {
      title: title,
      description: description,
      id: item.id,
    };

    dispatch(editArticle(editData));
  };
  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalEdit" centered>
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
          <Form onSubmit={(e) => handleEdit(e)}>
            <Row>
              <Col md={12}>
                {" "}
                <FloatingLabel controlId="floatingInputTitle" label="Titre">
                  <Form.Control
                    type="text"
                    placeholder="Titre de l'article"
                    value={title}
                    className="mb-3"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col md={12}>
                {" "}
                <FloatingLabel controlId="floatingInputDesc" label="Description">
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    value={description}
                    className="mb-3"
                    onChange={(e) => setDesc(e.target.value)}
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

export default ModalEditArt;
