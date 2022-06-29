import React from "react";
import Col from "react-bootstrap/Col";
import { urlImgAlbum } from "../../utils/url";
import Button from "react-bootstrap/Button";
import ModalDeletePic from "../Modals/ModalDelete/ModalDeletePic";
import jwt_decode from "jwt-decode";
import { ImageViewer } from "react-image-viewer-dv"

const PhotoAlbum = (props) => {
  const [modalDelShow, setModalDelShow] = React.useState(false);
  const { item } = props;
  const CheckLog = () => {
    const userToken = localStorage.getItem("user_token");
    if (
      userToken === "visitor" ||
      (jwt_decode(userToken).isVerified === 1 &&
        jwt_decode(userToken).isBan === 0 &&
        jwt_decode(userToken).isAdmin === 0)
    )
      return (
        <div key={item.id} className="mb-4 img-border">
          <ImageViewer>
            <img
              src={`${urlImgAlbum + item.photo}`}
              alt={item.authorname}
              className="img-border"
              width="100%"
            />
          </ImageViewer>
        </div>
      );
    else if (
      jwt_decode(userToken).isVerified === 1 &&
      jwt_decode(userToken).isBan === 0 &&
      jwt_decode(userToken).isAdmin === 1
    )
      return (
        <div key={item.id} className="mb-4 img-border">
          <ImageViewer>
            <img
              src={`${urlImgAlbum + item.photo}`}
              alt={item.authorname}
              className="img-border"
              width="100%"
            />
          </ImageViewer>
          <div className="text-center">
            <Button
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
      );
  };

  return (
    <Col md={3}>
      <CheckLog />
    </Col>
  );
};

export default PhotoAlbum;
