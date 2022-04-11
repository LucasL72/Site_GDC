import React from "react";
import Col from "react-bootstrap/Col";
import { urlImg } from "../../utils/url";
const PhotoAlbum = (props) => {
    const { item } = props;
  return (
    <Col md={4}>
      <div key={item.id} className="mb-2">
        <img
          src={`${urlImg + item.photo}`}
          alt={item.authorname}
          width="100%"
        />
      </div>
    </Col>
  );
};

export default PhotoAlbum;
