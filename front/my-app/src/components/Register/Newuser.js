import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, getUser } from "../../store/actions/UsersActions";

const Newuser = () => {
  const [pseudo, setPseudo] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    e.preventDefault();

    if (
      pseudo &&
      prenom &&
      nom &&
      adresse &&
      city &&
      postal &&
      email &&
      password
    ) {
      dispatch(
        createUser({
          pseudo,
          prenom,
          nom,
          adresse,
          city,
          postal,
          email,
          password,
        })
      );
      setPseudo("");
      setPrenom("");
      setNom("");
      setAdresse("");
      setCity("");
      setPostal("");
      setEmail("");
      setPassword("");
      dispatch(getUser());
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Form onSubmit={(e) => handleForm(e)}>
            <Col md={12}>
              <Form.Label>Choisir une image de profil</Form.Label>
              <Form.Control className="mb-3" type="file" />
            </Col>
            <Col md={12}>
              <FloatingLabel
                controlId="floatingInput"
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
                  controlId="floatingInput"
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
                  controlId="floatingInput"
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
              <FloatingLabel controlId="floatingInput" label="Votre Email">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
              <Form.Text className="text-muted mb-3">
                We'll never share your email with anyone else.
              </Form.Text>
            </Col>
            <Col md={12}>
              <FloatingLabel
                controlId="floatingInput"
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
                  controlId="floatingInput"
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
                  controlId="floatingInput"
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
                  controlId="floatingInput"
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
                  controlId="floatingInput"
                  label="Confirmation Mot de Passe"
                  className="mb-3"
                >
                  <Form.Control type="password" required />
                </FloatingLabel>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Agree to terms and conditions"
                required
              />
            </Form.Group>
            <div className="text-center mb-3">
              <Button variant="outline-success" type="submit">
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
