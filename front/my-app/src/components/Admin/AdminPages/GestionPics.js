import React from "react";
import Button from "react-bootstrap/Button";
import { getPic } from "../../../store/actions/PicsActions";
import ModalAddPic from "../../Modals/ModalAddPic";
import Album from "../../Pics/Album";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const GestionPics = () => {
  const [modalAddPicShow, setModalAddPicShow] = React.useState(false);
  const dispatch = useDispatch();
  const listPics = useSelector((state) => state.pics.listPics);

  useEffect(() => {
    dispatch(getPic());
  }, []);
  return (
    <div>
      <h1 className="text-center ssligne">Gestion de l'Album Photos</h1>
      <div className="text-center mb-2">
        <Button onClick={() => setModalAddPicShow(true)} variant="primary">
          Ajouter une Photo
        </Button>
      </div>
      <Album list={listPics} />
      <ModalAddPic
        show={modalAddPicShow}
        onHide={() => setModalAddPicShow(false)}
      />
    </div>
  );
};

export default GestionPics;
