import React from "react";
import Button from "react-bootstrap/Button";
import ModalAddEvent from "../../Modals/ModalAddEvent";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvent } from "../../../store/actions/EventActions";
import ListEvents from "../Event/ListEvents";
import TablEvents from "../Event/TablEvents";

const GestionEve = () => {
  const [modalAddEventShow, setModalAddEventShow] = React.useState(false);
  const dispatch = useDispatch();
  const listEvents = useSelector((state) => state.events.listEvents);

  useEffect(() => {
    dispatch(getEvent());
  }, []);
  return (
    <div>
      <h1 className="text-center ssligne"> Gestion des Evènements</h1>
      <div className="text-center">
        <Button onClick={() => setModalAddEventShow(true)} variant="primary">
          Ajouter un évènement
        </Button>
      </div>
      <ListEvents list={listEvents} />
      <TablEvents list={listEvents}/>
      <ModalAddEvent
        show={modalAddEventShow}
        onHide={() => setModalAddEventShow(false)}
      />
    </div>
  );
};

export default GestionEve;
