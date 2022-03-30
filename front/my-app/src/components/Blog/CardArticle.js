import { useState } from "react";
import EditArticle from "./EditArticle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteArticle } from "../../store/actions/ArticlesActions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const CardArticle = (props) => {
  const { item } = props;
  const [editToggle, setEditToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    dispatch(deleteArticle(id));
  };

  const toArticleID = async (id) => {
    console.log("go to article id");
    navigate("/Blog/" + id, { state: { id, item } });
  };

  const toggler = (bool) => setEditToggle(bool);

  return (
    <Col md={4} className="g-4">
      <Card key={item.id}>
        <Card.Img variant="top" src="../Docs/creative1.jpg" alt={item.title} />
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
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </Button>
          <Button
            cla
            variant="outline-success"
            type="submit"
            onClick={() => setEditToggle(!editToggle)}
          >
            Edit
          </Button>
        </Card.Footer>
        {editToggle ? (
          <EditArticle item={item} toggler={toggler} />
        ) : (
          <p></p>
        )}
      </Card>
    </Col>
  );
};

export default CardArticle;