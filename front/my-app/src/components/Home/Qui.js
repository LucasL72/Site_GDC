import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Qui = () => {
  return (
    <div>
      <Card border="success">
        <Card.Img className="img-fluid" variant="top" src="../Docs/logo.png" />
        <Card.Body>
          <Card.Title>Qui Sommes Nous ? </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button href="/Contact" variant="success">
            En savoir plus..
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Qui;
