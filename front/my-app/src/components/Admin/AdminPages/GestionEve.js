import React from "react";
import Carou from "../../Home/Carou";
import Button from "react-bootstrap/Button";
import ModalAddEvent from "../../Modals/ModalAddEvent";

const GestionEve = () => {
  const [modalAddEventShow, setModalAddEventShow] = React.useState(false);
  return (
    <div>
      <h1 className="text-center ssligne"> Gestion des Evènements</h1>
      <div className="text-center">
        <Button onClick={() => setModalAddEventShow(true)} variant="primary">
          Ajouter un évènement
        </Button>
      </div>
      <Carou />

      <ModalAddEvent
        show={modalAddEventShow}
        onHide={() => setModalAddEventShow(false)}
      />
    </div>
  );
};

export default GestionEve;
