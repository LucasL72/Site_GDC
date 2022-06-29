import React from "react";
import Coms from "./Coms";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ListComs = (props) => {
  const { list } = props;
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            {list.length > 0 &&
              list.map((item) => {
                return <Coms key={item.id} item={item} />;
              })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListComs;
