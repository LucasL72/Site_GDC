import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/actions/UsersActions";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Newuser = () => {
  const [stateImgUpload, setStateImgUpload] = useState("");
  const [imgPreview, setPreview] = useState("");
  const [imgSelect, setSelect] = useState("");
  const [imguser, setImg] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toHome = async () => {
    navigate("/");
  };
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
  const handleFormUser = async (e) => {
    e.preventDefault();
    if (!imguser) {
      setStateImgUpload("image obligatoire");
    } else {
      setStateImgUpload("");
    }
    const dataUser = {
      pseudo,
      prenom,
      nom,
      adresse,
      city,
      postal,
      email,
      password,
    };
    const formdata = new FormData();
    Object.entries(dataUser).forEach(([cle, valeur]) => {
      formdata.append(cle, valeur);
    });
    if (imgSelect) {
      formdata.append("image", imguser);
    }
    setSelect(false);

    dispatch(createUser(formdata));
    alert("Votre compte a été créé")
    toHome();

  };

  return (
    <div>
      <Container>
        <Row>
          <Form onSubmit={(e) => handleFormUser(e)}>
            <Col md={12}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choisir une image de profil</Form.Label>
                <Form.Control
                  type="file"
                  className="mb-3"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </Form.Group>
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
            </Col>
            <Col md={12}>
              <FloatingLabel
                controlId="floatingInput1"
                label="Votre Nom d'utilisateur"
                className="mb-3"
              >
                <Form.Control
                  type="pseudo"
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Row>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingInput2"
                  label="Votre Nom"
                  className="mb-3"
                >
                  <Form.Control
                    type="name"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingInput3"
                  label="Votre Prénom"
                  className="mb-3"
                >
                  <Form.Control
                    type="name"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Col md={12}>
              <FloatingLabel controlId="floatingInput4" label="Votre Email">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
              <Form.Text className="text-muted">
                Nous ne partagerons jamais votre mail.
              </Form.Text>
            </Col>
            <Col md={12}>
              <FloatingLabel
                controlId="floatingInput5"
                label="Votre Adresse"
                className="mb-3"
              >
                <Form.Control
                  type="adress"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Row>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingInput6"
                  label="Ville"
                  className="mb-3"
                >
                  <Form.Control
                    type="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingInput7"
                  label="Code Postal"
                  className="mb-3"
                >
                  <Form.Control
                    type="Postal Code"
                    value={postal}
                    onChange={(e) => setPostal(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingInput8"
                  label="Mot de Passe"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingInput9"
                  label="Confirmation Mot de Passe"
                  className="mb-3"
                >
                  <Form.Control type="password" required />
                </FloatingLabel>
              </Col>
            </Row>
            <ReCAPTCHA
              sitekey="6Ldv9WYgAAAAAKY8VrPRKpWNJVW7vANecIFNNNVK"
              required
            />

            <div className="text-center mb-3">
              <Button variant="outline-success" type="submit" value="send">
                Submit
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Newuser;
