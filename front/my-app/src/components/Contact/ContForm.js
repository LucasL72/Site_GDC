import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createMessage, getMessage } from "../../store/actions/MessagesActions";
import EmailIcon from "@mui/icons-material/Email";
import ReCAPTCHA from "react-google-recaptcha";
const ContForm = () => {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    e.preventDefault();

    if (email && content && author) {
      dispatch(
        createMessage({
          email,
          content,
          author,
        })
      );
      setEmail("");
      setContent("");
      setAuthor("");
      dispatch(getMessage());
    }
  };
  return (
    <div className="contact mb-3">
      <h2 className="text-center ssligne">Nous Contacter</h2>

      <Container>
        <Row>
          <Col md={6}>
            <p className="justify-text">
              Vous pourrez ici envoyer directement un message à l'association ou
              à l'administration du site{" "}
            </p>
            <Row>
              <Col md={6}>
                <p>
                  <AddLocationAltIcon color="success" sx={{ fontSize: 30 }} />{" "}
                  56 Grande Rue 72450 Montfort-le-Gesnois
                </p>
              </Col>
              <Col md={6}>
                <p>
                  {" "}
                  <a
                    href="mailto: grainecitoyenmlg@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <EmailIcon color="success" sx={{ fontSize: 30 }} />
                  </a>
                  grainecitoyenmlg@gmail.com
                </p>
              </Col>
            </Row>
            <Form onSubmit={(e) => handleForm(e)}>
              <FloatingLabel
                controlId="name"
                label="Votre Nom"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Votre nom"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="email"
                label="Votre Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Votre Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput2"
                label="Votre message"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />

                <ReCAPTCHA
                  sitekey="6Ldv9WYgAAAAAKY8VrPRKpWNJVW7vANecIFNNNVK"
                  required
                />
              </FloatingLabel>
              <div className="text-center">
                <Button variant="outline-success" type="submit">
                  Envoyer
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={6}>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2226.6978810008372!2d0.3982507650633663!3d48.04860190640244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdde201c5d83d37!2zNDjCsDAyJzU0LjEiTiAwwrAyMyc1NS40IkU!5e0!3m2!1sfr!2sfr!4v1649930828755!5m2!1sfr!2sfr"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContForm;
