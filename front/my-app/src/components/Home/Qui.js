import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Qui = () => {
  return (
    <div>
      <Card border="success" className="scale">
        <Card.Img className="img-fluid" variant="top" src="../Docs/logo.png" />
        <Card.Body>
          <Card.Title >Qui Sommes Nous ? </Card.Title>
          <Card.Text>
            L'association vise à encourager les initiatives locales de ses
            membres en matière de transition écologique, développement durable,
            échanges de savoirs et connaissances, nouvelles façons de consommer,
            d’œuvrer...
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
