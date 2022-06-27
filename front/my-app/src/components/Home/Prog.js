import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Prog = () => {
  return (
    <div>
      <Card className="scale" border="success">
        <Card.Img
          className="img-fluid"
          variant="top"
          src="../Docs/gdc_prog.png"
        />
        <Card.Body>
          <Card.Title >Programme 2022</Card.Title>
          <Card.Text>
           Le Programme de l'année
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
