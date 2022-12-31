import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Prog = () => {
  return (
    <div>
      <Card className="scale" border="success">
        <Card.Img
          className="img-fluid"
          variant="top"
          src="../Docs/prog2022.png"
        />
        <Card.Body>
          <Card.Title>
            <strong>Programme 2022</strong>
          </Card.Title>
          <Card.Text>Le Programme de l'année 2022, celui de 2023 est en-cours de validation. </Card.Text>
          <Button
            variant="success"
            target="_blank"
            href="../Docs/prog2022.png"
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
