import React from "react";
import Button from "react-bootstrap/Button";
import ModalDeleteCom from "../Modals/ModalDelete/ModalDeleteCom";
import jwt_decode from "jwt-decode";
const Coms = (props) => {
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
        <>
          <cite>
            <img
              src="../logoGDC.png"
              width="60"
              height="60"
              alt="img profile"
            ></img>{" "}
            {item.pseudouser} / article n° {item.articles_id}
          </cite>
          <blockquote className="text-break">{item.content}</blockquote>
          <p class="text-muted">Posté le {item.datecom}</p>
        </>
      );
    else if (
      jwt_decode(userToken).isVerified === 1 &&
      jwt_decode(userToken).isBan === 0 &&
      jwt_decode(userToken).isAdmin === 1
    )
      return (
        <>
          <cite>
            <img src="../logoGDC.png" width="60" height="60" alt="img profile">
            </img>{" "}
            {item.pseudouser} / article n° {item.articles_id}
          </cite>
          <blockquote className="text-break">{item.content}</blockquote>
          <p class="text-muted">Posté le {item.datecom}</p>
          <div className="text-center">
            <Button
              variant="outline-danger"
              type="submit"
              onClick={() => setModalDelShow(true)}
            >
              Supprimer
            </Button>{" "}
            <ModalDeleteCom
              show={modalDelShow}
              onHide={() => setModalDelShow(false)}
              item={item}
            />
          </div>
        </>
      );
  };

  return (
    <div className="coms mt-3">
      <CheckLog />
    </div>
  );
};

export default Coms;
