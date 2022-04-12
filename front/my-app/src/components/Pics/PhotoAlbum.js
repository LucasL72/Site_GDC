import React from "react";
import Col from "react-bootstrap/Col";
import { urlImgAlbum } from "../../utils/url";
const PhotoAlbum = (props) => {
    const { item } = props;
  return (
    <Col md={4}>
      <div key={item.id} className="mb-2">
        <img
          src={`${urlImgAlbum + item.photo}`}
          alt={item.authorname}
          width="100%"
        />
      </div>
    </Col>
  );
};

export default PhotoAlbum;
