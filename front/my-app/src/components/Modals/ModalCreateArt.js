import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useSelector, useDispatch } from "react-redux";
import {
  createArticle,
  getArticles,
} from "../../store/actions/ArticlesActions";
import axios from "axios";

const ModalCreateArt = (props) => {
  const [imgarticle, setImgarticle] = useState({ file: [], filepreview: null });
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [contenu, setCont] = useState("");
  const [auteur, setAuteur] = useState("");
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);

  const handleInputChange = (e) => {
    e.preventDefault();

    setImgarticle({
      ...imgarticle,
      file: e.target.files[0],
      filepreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    const formdata = new FormData();
    for (const [key, value] of Object.entries(listArticles)) {
      formdata.append(key, value);
    }
    formdata.append("image", imgarticle.file);

    axios
      .post("http://localhost:3030/Admin/Blog", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res, req) => {
        // then print response status
        console.warn(res);
      });
    e.preventDefault();

    if (title && description && contenu && auteur) {
      dispatch(
        createArticle({ imgarticle, title, description, contenu, auteur })
      );
      setTitle("");
      setImgarticle("");
      setDesc("");
      setCont("");
      setAuteur("");
      dispatch(getArticles());
    }
  };
  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalCreate" centered>
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
            <Col md={12}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choisir votre image</Form.Label>
                <Form.Control
                  type="file"
                  className="mb-3"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </Form.Group>
              {imgarticle.filepreview !== null ? (
                <img
                  src={imgarticle.filepreview}
                  width="2000"
                  height="2000"
                  className="img-fluid"
                  alt="imgarticle"
                />
              ) : null}
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
            <Col sm={12}>
              <div className="text-center">
                <Button
                  cla
                  variant="outline-dark"
                  type="submit"
                  onClick={props.onHide}
                  value="send"
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

export default ModalCreateArt;
