import React from "react";
import { useNavigate } from "react-router-dom";
const VerifAuth = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <div>
      <h2 className="text-center">
        {" "}
        Votre compte est vérifié, vous allez être redirigé vers la page
        d'accueil pour vous connecter.
      </h2>

      <div className="text-center">
        <img
          className=" img-fluid logo"
          src="../../logoGDC.png"
          alt="logo assoc"
          width="200"
          height="200"
        ></img>
      </div>
    </div>
  );
};

export default VerifAuth;
