import React from "react";
import Col from "react-bootstrap/Col";
import { urlImgAlbum } from "../../utils/url";
import Button from "react-bootstrap/Button";
import ModalDeletePic from "../Modals/ModalDelete/ModalDeletePic";

const PhotoAlbum = (props) => {
  const [modalDelShow, setModalDelShow] = React.useState(false);
  const { item } = props;
  return (
    <Col md={4}>
      <div key={item.id} className="mb-2 img-border">
        <img
          src={`${urlImgAlbum + item.photo}`}
          alt={item.authorname}
          width="100%"
          className="img-border"
        />
        <div className="text-center">
          <Button
            cla
            variant="outline-danger"
            type="submit"
            onClick={() => setModalDelShow(true)}
          >
            Supprimer
          </Button>{" "}
        </div>
        <ModalDeletePic
          show={modalDelShow}
          onHide={() => setModalDelShow(false)}
          item={item}
        />
      </div>
    </Col>
  );
};

export default PhotoAlbum;
