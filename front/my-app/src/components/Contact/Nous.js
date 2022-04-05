import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Nous = () => {
  return (
    <div>
      <Container>
        <h2 className="text-center ssligne"> Qui Sommes Nous ? </h2>
        <Row>
          <Col md={6}>
            <div className="text-center">
              <img
                className="img-fluid scale"
                src="./Docs/logo.png"
                alt="Logo GDC"
                width="500"
                height="350"
              ></img>
            </div>
          </Col>
          <Col md={6}>
            <h2 className="text-center ssligne">
              {" "}
              "Graine de Citoyen Montgesnois"{" "}
            </h2>
            <p className="text-justify">
              L'association vise à encourager les initiatives locales de ses
              membres en matière de transition écologique, développement
              durable, échanges de savoirs et connaissances, nouvelles façons de
              consommer, d’œuvrer... L'association n'a pas de président ni de
              secrétaire. Seuls la trésorière et le trésorier adjoint ont été
              élus. La direction collégiale (6 personnes à ce jour) valide les
              activités (par exemple : "mise en place d'une conférence sur le
              jardinage", "atelier produits cosmétiques", "initiation à la
              taille des fruitiers"). Les membres de l’association peuvent
              rejoindre l’activité qui les intéresse ou en proposer dans le
              respect des valeurs de l’association.
            </p>
            <p className="text-justify">
              Rejoignez l'aventure ! L'équipe de la Direction collégiale de
              Graine de Citoyen Montgesnois Amandine, Céline, Chloé, Gilles,
              Jérémy, Karine et Stéphane
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nous;
