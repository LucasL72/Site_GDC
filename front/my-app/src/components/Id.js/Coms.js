import React from "react";
import Button from "react-bootstrap/Button";
import ModalDeleteCom from "../Modals/ModalDelete/ModalDeleteCom";
const Coms = (props) => {
  const [modalDelShow, setModalDelShow] = React.useState(false);
  const { item } = props;

  return (
    <div className="coms mt-3">
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
      <div className="text-center">
        <Button
          cla
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
    </div>
  );
};

export default Coms;
