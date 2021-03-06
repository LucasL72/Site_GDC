import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ModalEditArt from "../Modals/ModalEditArt";
import React from "react";
import ModalDeleteArt from "../Modals/ModalDelete/ModalDeleteArt";
import { urlImgArt } from "../../utils/url";
import jwt_decode from "jwt-decode";
import Moment from "react-moment";
import "moment-timezone";

const CardArticle = (props) => {
  const [modalEditShow, setModalEditShow] = React.useState(false);
  const [modalDelShow, setModalDelShow] = React.useState(false);
  const { item } = props;
  const navigate = useNavigate();
  const toArticleID = async (id) => {
    navigate("/Blog/" + item.id, { state: { id, item } });
  };
  const CheckLog = () => {
    const userToken = localStorage.getItem("user_token");

    if (
      userToken === "visitor" ||
      (jwt_decode(userToken).isVerified === 1 &&
        jwt_decode(userToken).isBan === 0 &&
        jwt_decode(userToken).isAdmin === 0)
    )
      return (
        <>
          <Card.Img
            variant="top"
            src={`${urlImgArt + item.imgarticle}`}
            alt={item.title}
          />
          <Card.Body>
            <Card.Title className="text-center ftitleb">
              {item.title}
            </Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button
              variant="outline-success"
              type="button"
              onClick={() => toArticleID(item.id)}
              className="mb-2"
            >
              En savoir plus...
            </Button>{" "}
            <Card.Footer>
              <p className="text-muted">
                {" "}
                Posté le{" "}
                <Moment tz="Europe/Paris" format="DD MMMM YYYY à HH:mm">
                  {item.dateart}
                </Moment>
              </p>
            </Card.Footer>
          </Card.Body>
        </>
      );
    else if (
      jwt_decode(userToken).isVerified === 1 &&
      jwt_decode(userToken).isBan === 0 &&
      jwt_decode(userToken).isAdmin === 1
    )
      return (
        <>
          <Card.Img
            variant="top"
            src={`${urlImgArt + item.imgarticle}`}
            alt={item.title}
          />
          <Card.Body>
            <Card.Title className="text-center ftitleb">
              <strong>{item.title}</strong>
            </Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button
              variant="outline-success"
              type="button"
              onClick={() => toArticleID(item.id)}
            >
              En savoir plus...
            </Button>{" "}
          </Card.Body>
          <Card.Footer>
            <Button
              variant="outline-danger"
              type="button"
              onClick={() => setModalDelShow(true)}
              className="mx-auto"
            >
              Supprimer
            </Button>{" "}
            {/*
            //Boutton edit à corriger pour fonctionner
            <Button
              variant="outline-success"
              type="button"
              onClick={() => setModalEditShow(true)}
            >
              Editer
            </Button>
            <ModalEditArt
              show={modalEditShow}
              onHide={() => setModalEditShow(false)}
              item={item}
            />
      */}
            <ModalDeleteArt
              show={modalDelShow}
              onHide={() => setModalDelShow(false)}
              item={item}
            />
            <p className="text-muted">
              {" "}
              Posté le{" "}
              <Moment tz="Europe/Paris" format="DD MMMM YYYY à HH:mm">
                {item.dateart}
              </Moment>{" "}
            </p>
          </Card.Footer>
        </>
      );
  };

  return (
    <Col md={4} className="g-3">
      <Card border="success" className="scale" key={item.id}>
        <CheckLog />
      </Card>
    </Col>
  );
};

export default CardArticle;
