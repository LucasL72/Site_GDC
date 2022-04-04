import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
  const [contenu, setCont] = useState(item.contenu);
  const [auteur, setAuteur] = useState(item.auteur);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const editData = {
      title: title,
      description: description,
      contenu:contenu,
      auteur:auteur,
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
            <Col md={12}>
              <Form.Label>Choisir votre image</Form.Label>
              <Form.Control type="file" className="mb-3" />
            </Col>{" "}
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
              <FloatingLabel controlId="floatingInputDesc" label="Contenu">
                <Form.Control
                  as="textarea"
                  rows={4}
                  className="mb-3"
                  value={contenu}
                  onChange={(e) => setCont(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Auteur">
                <Form.Control
                  type="text"
                  placeholder="Auteur"
                  className="mb-3"
                  value={auteur}
                  onChange={(e) => setAuteur(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <div className="text-center">
              <Button
                cla
                variant="outline-dark"
                type="submit"
                onClick={props.onHide}
                value="send"
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
