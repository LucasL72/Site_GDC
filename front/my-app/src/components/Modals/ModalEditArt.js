import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch } from "react-redux";
import { editArticle } from "../../store/actions/ArticlesActions";
import { urlImgArt } from "../../utils/url";

const ModalEditArt = (props) => {
  const { item } = props;
  const [stateImgUpload, setStateImgUpload] = useState("");
  const [imgPreview, setPreview] = useState("");
  const [imgSelect, setSelect] = useState("");
  const [imgarticle, setImg] = useState("");
  const [title, setTitle] = useState(item.title);
  const [description, setDesc] = useState(item.description);
  const [contenu, setCont] = useState(item.contenu);
  const [auteur, setAuteur] = useState(item.auteur);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setStateImgUpload("Image non enregistrée");
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onloadend = () => {
        setSelect(true);
        setPreview(reader.result);
        setImg(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditArt = (e) => {
    e.preventDefault();

    if (!imgarticle) {
      setStateImgUpload("image obligatoire");
    } else {
      setStateImgUpload("");
    }
    const dataArticle = {
      title,
      description,
      contenu,
      auteur,
    };
    const formdata = new FormData();
    Object.entries(dataArticle).forEach(([cle, valeur]) => {
      formdata.append(cle, valeur);
    });
    if (imgSelect) {
      formdata.append("image", imgarticle);
    };
    setSelect(false);
    dispatch(editArticle(formdata));
  };
  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalEdit" key={item.id} centered>
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
          <Form onSubmit={(e) => handleEditArt(e)}>
            <Col md={12}>
              <Form.Label>Choisir votre image</Form.Label>
              <Form.Control
                type="file"
                className="mb-3"
                name="imgarticle"
                accept="image/*"
                onChange={handleInputChange}
              />
              {imgSelect ? (
                <img
                  src={`${imgPreview}`}
                  width="200"
                  height="200"
                  className="img-fluid"
                  alt=""
                />
              ) : (
                <img
                  src={`${urlImgArt + item.imgarticle}`}
                  width="200"
                  height="200"
                  className="img-fluid"
                  alt=""
                />
              )}
              {{ stateImgUpload } && (
                <p className="text-danger">{stateImgUpload}</p>
              )}
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
