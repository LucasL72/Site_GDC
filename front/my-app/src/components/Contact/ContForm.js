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
                  <LocalPhoneIcon color="success" sx={{ fontSize: 20 }} />A
                  check
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
                  Envoyer
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={6}>
            <div className="map">
              <iframe
                width="600"
                height="500"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=0.39383625997288624%2C48.045830926303054%2C0.403878450524644%2C48.05057897698671&amp;layer=mapnik&amp;marker=48.04820500636105%2C0.3988573552487651"
              ></iframe>
              <br />
              <small>
                <a href="https://www.openstreetmap.org/?mlat=48.04821&amp;mlon=0.39886#map=17/48.04821/0.39886">
                  Afficher une carte plus grande
                </a>
              </small>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContForm;
