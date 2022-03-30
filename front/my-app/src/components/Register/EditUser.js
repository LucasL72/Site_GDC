import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const EditUser = () => {
  return (
    <div>
      <Container>
        <Row>
          <Form>
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
                <Form.Control type="pseudo"  />
              </FloatingLabel>
            </Col>
            <Col md={12}>
              <FloatingLabel controlId="floatingInput" label="Votre Email">
                <Form.Control type="email"  />
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
                <Form.Control type="adress"  />
              </FloatingLabel>
            </Col>
            <Row>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Ville"
                  className="mb-3"
                >
                  <Form.Control type="city" />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Code Postal"
                  className="mb-3"
                >
                  <Form.Control type="Postal Code"  />
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
                  <Form.Control type="password" required />
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

export default EditUser;
