import React from "react";
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../../store/actions/UsersActions";
import TablUsers from "../User/TablUsers";
import DangerousIcon from "@mui/icons-material/Dangerous";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { red } from "@mui/material/colors";
import { orange } from "@mui/material/colors";

const GestionUser = () => {
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.users.listUsers);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-center ssligne">Gestion des Utilisateurs</h1>

        <TablUsers list={listUsers} />
        <p className="text-muted">
          Le bouton
          <DangerousIcon sx={{ color: orange[500] }} />
          sert à supprimer un utlisateur : il pourra recréer un compte sans problème.
        </p>
        <p className="text-muted">
          Le bouton
          <RemoveCircleIcon sx={{ color: red[500] }} />
          sert à bannir un utilisateur : un utilisateur bannit ne pourra plus se
          connecter ou recréeer un compte avec son adresse mail.
        </p>
      </Container>
    </div>
  );
};

export default GestionUser;
