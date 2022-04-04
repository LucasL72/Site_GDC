import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch } from "react-redux";
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

  const handleInputChange = (event) => {
    setImgarticle({
      ...imgarticle,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  const [isSuccess, setSuccess] = useState(null);

  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    e.preventDefault();

    console.log("submit form create article");
    const formData = new FormData();
    formData.append("imgarticle", imgarticle.file);

    axios
      .post("http://localhost:3030/Admin/Blog/img", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        // then print response status
        console.warn(res);
        if (res.data.success === 1) {
          setSuccess("Image upload successfully");
        }
      });

    if (title && description && contenu && auteur) {
      dispatch(createArticle({ title, description, contenu, auteur }));
      setTitle("");
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
              <Form.Label>Choisir votre image</Form.Label>
              <Form.Control
                type="file"
                className="mb-3"
                name="imgarticle"
                onChange={handleInputChange}
              />
              {isSuccess !== null ? <h4> {isSuccess} </h4> : null}
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
