import React from "react";
import CardArticle from "./CardArticle";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Widget from "../Home/Widget";

const ListNews = (props) => {
  const { list } = props;
  return (
    <div className="mt-3 mb-3">
      <Container>
        <Row md={4} className="g-2">
          {list.length > 0 &&
            list.map((item) => {
              return <CardArticle item={item} />;
            })}
          <Widget />
        </Row>
      </Container>
    </div>
  );
};

export default ListNews;
