import Button from "react-bootstrap/Button";
import React from "react";
import ModalCreateArt from "../../Modals/ModalCreateArt";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const CreateArt = () => {
  const [modalCreateShow, setModalCreateShow] = React.useState(false);
  return (
    <>
      <Container>
        <Col md={12}>
          <h1 className="text-center ssligne"> Gestion Articles</h1>
          <div className="text-center">
            <Button type="button" className="mt-3" onClick={() => setModalCreateShow(true)}>
              Créer Article
            </Button>
          </div>
        </Col>
      </Container>

      <ModalCreateArt
        show={modalCreateShow}
        onHide={() => setModalCreateShow(false)}
      />
    </>
  );
};

export default CreateArt;
