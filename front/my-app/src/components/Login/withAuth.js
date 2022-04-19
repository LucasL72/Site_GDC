import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function withAuth(Component) {
  const AuthRoute = () => {
    if (!localStorage.getItem("user_token")) return <Navigate to="/" />;
    else {
      const token = jwt_decode(localStorage.getItem("user_token"));
      if (token.isVerified === 1 && token.isBan === 0) return <Component />;
      else return <Navigate to="/" />;
    }
  };

  return AuthRoute;
}
