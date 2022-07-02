import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import ModalLostPass from "./ModalLostPass";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login, check } from "../../store/actions/UsersActions";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { red } from "@mui/material/colors";

const ModalCon = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    e.preventDefault();
    if (email && password) {
      await dispatch(login({ email, password }));
      setEmail("");
      setPassword("");
      dispatch(check());
      navigate("/Profil");
    }
  };

  const [modalLostShow, setModalLostShow] = React.useState(false);
  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalConn" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalConn">
            Se Connecter/S'Inscrire {""}
            <img
              alt="Logo association"
              src="../logoGDC.png"
              width="50"
              height="50"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Form onSubmit={(e) => handleForm(e)}>
                <Col md={12}>
                  {" "}
                  <FloatingLabel controlId="floatingInput" label="Votre Email">
                    <Form.Control
                      type="email"
                      placeholder="Votre Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FloatingLabel>
                </Col>
                <Col md={12} className="mt-2">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Mot de Passe"
                    className="mb-3"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Votre Mot de Passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </FloatingLabel>
                </Col>

                <Col md={12}>
                  {" "}
                  <Button
                    variant="success"
                    type="submit"
                    onClick={props.onHide}
                  >
                    Se Connecter
                  </Button>{" "}
                  <Button variant="outline-success" href="/#/Register">
                    S'Inscrire
                  </Button>{" "}
                  <Button href="/#/Lostpassword">
                    Mot de passe oublié
                  </Button>
                  <ModalLostPass
                    show={modalLostShow}
                    onHide={() => setModalLostShow(false)}
                  />
                </Col>
              </Form>
              <Row className="mt-3">
                <Col md={12}>
                  <div className="text-center">
                    <a
                      href="https://www.facebook.com/Graine-de-Citoyen-Montgesnois-103923238009537/?ref=page_internal"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FacebookIcon fontSize="large" />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UClvNSJpDc7GoYhQonhXKUqQ"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <YouTubeIcon sx={{ color: red[500] }} fontSize="large" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalCon;
