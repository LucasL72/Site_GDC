import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../store/actions/UsersActions";

const ModalEditUser = (props) => {
  const { item } = props;
  const [pseudo, setPseudo] = useState(item.pseudo);
  const [prenom, setPrenom] = useState(item.prenom);
  const [nom, setNom] = useState(item.nom);
  const [adresse, setAdresse] = useState(item.adresse);
  const [city, setCity] = useState(item.city);
  const [postal, setPostal] = useState(item.postal);
  const [email, setEmail] = useState(item.email);

  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const editData = {
      pseudo:pseudo,
      prenom:prenom,
      nom:nom,
      adresse:adresse,
      city:city,
      postal:postal,
      email:email,
      id: item.id,
    };
    dispatch(editUser(editData));
  };
  return (
    <div>
      <Modal {...props} size="lg" aria-labelledby="ModalEdit" centered>
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
              <FloatingLabel controlId="floatingInputTitle" label="Pseudo">
                <Form.Control
                  type="text"
                  placeholder="Pseudo"
                  className="mb-3"
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Email">
                <Form.Control
                  type="text"
                  placeholder="Email"
                  className="mb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Row>
              <Col sm={6}>
                <FloatingLabel controlId="floatingInputTitle" label="Prénom">
                  <Form.Control
                    type="text"
                    placeholder="Prénom"
                    className="mb-3"
                    value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col sm={6}>
                <FloatingLabel controlId="floatingInputTitle" label="Nom">
                  <Form.Control
                    type="text"
                    placeholder="Nom"
                    className="mb-3"
                    value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Adresse">
                <Form.Control
                  type="text"
                  placeholder="Adresse"
                  className="mb-3"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Row>
              <Col sm={6}>
                <FloatingLabel controlId="floatingInputTitle" label="Ville">
                  <Form.Control
                    type="text"
                    placeholder="Prénom"
                    className="mb-3"
                    value={city}
                  onChange={(e) => setCity(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col sm={6}>
                <FloatingLabel
                  controlId="floatingInputTitle"
                  label="Code Postal"
                >
                  <Form.Control
                    type="text"
                    placeholder="Code Postal"
                    className="mb-3"
                    value={postal}
                    onChange={(e) => setPostal(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <div className="text-center">
              <Button
                
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

export default ModalEditUser;
