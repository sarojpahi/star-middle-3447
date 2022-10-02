import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./UserAuth";

export const PrivateRoute = ({ children }) => {
  const { user } = React.useContext(AuthContext);
  if (!user) {
    return <Navigate to="login" />;
  }
  return children;
};
