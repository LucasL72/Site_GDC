import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { createPic } from "../../store/actions/PicsActions";

const ModalAddPic = (props) => {
  const [stateImgUpload, setStateImgUpload] = useState("");
  const [imgPreview, setPreview] = useState("");
  const [imgSelect, setSelect] = useState("");
  const [photo, setImg] = useState("");
  const [authorname, setAuteur] = useState("");
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

  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    e.preventDefault();
    if (!photo) {
      setStateImgUpload("image obligatoire");
    } else {
      setStateImgUpload("");
    }
    const dataAlbum = {
      authorname,
    };
    const formdata = new FormData();
    Object.entries(dataAlbum).forEach(([cle, valeur]) => {
      formdata.append(cle, valeur);
    });
    if (imgSelect) {
      formdata.append("image", photo);
    }
    setSelect(false);

    dispatch(createPic(formdata));
    window.location.reload();
    alert("Photo ajouté !");
  };
  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalAddPic" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalAddPic">
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
                accept="image/*"
                onChange={handleInputChange}
              />
              <p className="text-danger">Limité à moins de 1mo SVP</p>
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
                  src={`${imgPreview}`}
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
              <FloatingLabel controlId="floatingInputTitle" label="Auteur">
                <Form.Control
                  type="text"
                  placeholder="Titre"
                  className="mb-3"
                  value={authorname}
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

export default ModalAddPic;
