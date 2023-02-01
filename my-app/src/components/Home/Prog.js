import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Prog = () => {
  return (
    <div>
      <Card className="scale" border="success">
        <Card.Img
          className="img-fluid"
          variant="top"
          src="../Docs/2023_Programme.jpg"
        />
        <Card.Body>
          <Card.Title>
            <strong>Programme 2023</strong>
          </Card.Title>
          <Card.Text>Le Programme de l'année 2023 </Card.Text>
          <Button
            variant="success"
            target="_blank"
            href="../Docs/Programme_2023.pdf"
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
