import React from "react";
import Container from "react-bootstrap/Container";
import PhotoAlbum from "./PhotoAlbum";
import Row from "react-bootstrap/Row";

const Album = (props) => {
  const { list } = props;
  return (
    <div>
      <Container>
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
