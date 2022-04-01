import React from 'react';
import Button from "react-bootstrap/Button";
import ModalAddPic from '../../Modals/ModalAddPic';
import Album from '../../Pics/Album';


const GestionPics = () => {
    const [modalAddPicShow, setModalAddPicShow] = React.useState(false);
    return (
        <div>
            <h1 className='text-center ssligne'>Gestion de l'Album Photos</h1>
            <div className="text-center">
            <Button onClick={() => setModalAddPicShow(true)} variant="primary">Ajouter une Photo</Button>
            </div>
            <Album />
            <ModalAddPic  show={modalAddPicShow}
                    onHide={() => setModalAddPicShow(false)} />
        </div>
    );
};

export default GestionPics;