import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../store/actions/UsersActions";

const EditUser = (props) => {
  const { item } = props;
  const [password,setPassword] = useState("")

  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const editData = {
      password:password,
      id: item.id,
    };
    dispatch(editUser(editData));
  };
  return (
    <div>
      <Container>
      <h2 className="text-center ssligne">Modifier</h2>
        <Row>
        <Form onSubmit={(e) => handleEdit(e)}>
            <Col md={12}>
              <Form.Label>Choisir une image de profil</Form.Label>
              <Form.Control className="mb-3" type="file" />
            </Col>
           
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

export default EditUser;
