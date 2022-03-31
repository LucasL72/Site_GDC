import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const Header = () => {
  return (
    <>
      <div className="Header">
        <Container>
          <Row>
            <Col md={12}>
              <div className="home-title">
                <h1 className="text-break">Graine de Citoyen Montgesnois</h1>
                <div className="typewriter-container">
                  <div className="typewriter">
                    <p className="welcome">Rejoignez l'aventure!</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
