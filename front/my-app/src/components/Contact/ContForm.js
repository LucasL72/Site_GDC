import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Button from "react-bootstrap/Button";
const ContForm = () => {
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
                  <AddLocationAltIcon color="success" sx={{ fontSize: 20 }} />{" "}
                  56 Grande Rue 72450 Montfort-le-Gesnois
                </p>
              </Col>
              <Col md={6}>
                <p>
                  <LocalPhoneIcon color="success" sx={{ fontSize: 20 }} />
                 A check
                </p>
              </Col>
            </Row>
            <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="Votre Nom"
                className="mb-3"
              >
                <Form.Control name="name" type="nom" placeholder="Votre nom" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Votre Email"
                className="mb-3"
              >
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Votre Email"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Votre message"
                className="mb-3"
              >
                <Form.Control name="message" as="textarea" rows={3} />
              </FloatingLabel>
              <div className="text-center">
                <Button variant="outline-success" type="submit">
                  envoyer
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={6}>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4326.629045406348!2d0.41732808844362074!3d48.04845077057328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e2f67876ed1b51%3A0xbfd7682136aff8b8!2sMairie%20de%20Montfort-le-Gesnois!5e0!3m2!1sfr!2sfr!4v1648477006529!5m2!1sfr!2sfr"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContForm;
