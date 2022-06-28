import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Adhe = () => {
  return (
    <div>
      <Card border="success" className="scale">
        <Card.Img
          className="img-fluid"
          variant="top"
          src="../Docs/fond_gdc.jpg"
        />
        <Card.Body>
          <Card.Title>
            <strong>Adhésion 2022</strong>
          </Card.Title>
          <Card.Text>Avez-vous pensé à votre adhésion 2022 ?</Card.Text>
          <Button
            href="https://www.helloasso.com/associations/graine-de-citoyen-montgesnois/adhesions/adhesions-2022-1"
            target="_blank"
            variant="success"
          >
            En savoir plus...
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Adhe;
