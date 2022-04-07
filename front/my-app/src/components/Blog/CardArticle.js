import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ModalEditArt from "../Modals/ModalEditArt";
import React from "react";
import ModalDelete from "../Modals/ModalDelete";


const CardArticle = (props) => {
  const [modalEditShow, setModalEditShow] = React.useState(false);
  const [modalDelShow, setModalDelShow] = React.useState(false);
  const { item } = props;
  const navigate = useNavigate();

  const toArticleID = async (id) => {
    navigate("/Blog/" + id, { state: { id, item } });
  };

  return (
    <Col md={4} className="g-3">
      <Card key={item.id} className="scale">
        <Card.Img variant="top" src={"http://localhost:3030/./api/assets/Images/Articles/creative1.webp"} alt={item.title} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button
            cla
            variant="outline-dark"
            type="submit"
            onClick={() => toArticleID(item.id)}
          >
            Page ID
          </Button>
        </Card.Body>
        <Card.Footer>
          <Button
            cla
            variant="outline-danger"
            type="submit"
            onClick={() => setModalDelShow(true)}
          >
            Delete
          </Button>{" "}
          <Button
            cla
            variant="outline-success"
            type="submit"
            onClick={() => setModalEditShow(true)}
          >
            Edit
          </Button>
          <ModalEditArt
            show={modalEditShow}
            onHide={() => setModalEditShow(false)}
            item={item}
          />
          <ModalDelete
            show={modalDelShow}
            onHide={() => setModalDelShow(false)}
            item={item}
          />
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardArticle;
