import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Qui = () => {
  return (
    <div>
      <Card border="success" className="scale">
        <Card.Img className="img-fluid" variant="top" src="../Docs/logo.png" />
        <Card.Body>
          <Card.Title>
            <strong>Qui Sommes Nous ? </strong>
          </Card.Title>
          <Card.Text>
            L'<strong>association</strong> vise à encourager les initiatives
            locales de ses membres en matière de{" "}
            <strong>
              transition écologique, développement durable, échanges de savoirs
              et connaissances, nouvelles façons de consommer, d’œuvrer...
            </strong>
          </Card.Text>
          <Button href="/Contact" variant="success">
            En savoir plus...
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Qui;
