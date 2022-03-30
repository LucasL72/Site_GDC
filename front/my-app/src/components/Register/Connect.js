import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Connect = () => {
  return (
    <div>
      <Container>
        <Row>
          <Form>
            <Col md={12}>
              <FloatingLabel controlId="floatingInput" label="Votre Email">
                <Form.Control type="email" />
              </FloatingLabel>
              <Form.Text className="text-muted mb-3">
                We'll never share your email with anyone else.
              </Form.Text>
            </Col>

            <Col md={12}>
              <FloatingLabel
                controlId="floatingInput"
                label="Mot de Passe"
                className="mb-3"
              >
                <Form.Control type="password" required />
              </FloatingLabel>
            </Col>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Agree to terms and conditions"
                required
              />
            </Form.Group>
            <div className="text-center mb-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Connect;
