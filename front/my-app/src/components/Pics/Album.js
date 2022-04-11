import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PhotoAlbum from "./PhotoAlbum";

const Album = (props) => {
  const { list } = props;
  return (
    <div>
      <Container fluid>
        <Row>
          {list.length > 0 &&
            list.map((item) => {
              return <PhotoAlbum key={item.id} item={item} />;
            })}
        </Row>
      </Container>
    </div>
  );
};

export default Album;
