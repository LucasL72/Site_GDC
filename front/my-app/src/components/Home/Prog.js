import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Prog = () => {
  return (
    <div>
      <Card border="success">
        <Card.Img
          className="img-fluid"
          variant="top"
          src="../Docs/gdc_prog.png"
        />
        <Card.Body>
          <Card.Title>Programme 2022</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            cla
            variant="success"
            target="_blank"
            href="../Docs/gdc_prog.png"
            download
          >
            Télécharger le Programme
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Prog;
