import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { UnbanUser } from "../../store/actions/UsersActions";

const ModalUnban = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const handleStatut = async (id) => {
    dispatch(UnbanUser(id));
  };
  return (
    <div>
      <div>
        <Modal {...props} size="lg" aria-labelledby="ModalDel" centered>
          <Modal.Header closeButton>
            <Modal.Title id="ModalDel">
              Gestion Statut {""}
              <img
                alt="Logo association"
                src="../logoGDC.png"
                width="50"
                height="50"
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Voulez-vous vraiment effectuer cette action ? </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button
              cla
              variant="outline-danger"
              type="submit"
              onClick={() => handleStatut(item.id)}
            >
              Confirmer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ModalUnban;
