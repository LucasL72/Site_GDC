import CardArticle from "./CardArticle";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const ListArticle = (props) => {
  const { list } = props;

  return (
    <div className="listCard mt-3">
      <Container>
        <Row xs={2} md={3} className="g-4">
          {list.length > 0 &&
            list.map((item) => {
              return <CardArticle key={item.id} item={item} />;
            })}
        </Row>
      </Container>
    </div>
  );
};

export default ListArticle;
