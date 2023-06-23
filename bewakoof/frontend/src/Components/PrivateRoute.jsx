import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getTokenFromCookies, isTokenExpired } from "../utils/token.utils";

export const PrivateRoute = ({ children }) => {
  const token = getTokenFromCookies();
  const location = useLocation();
  console.log(token);
  if (token && !isTokenExpired(token) && location.pathname === "/user/login") {
    return <Navigate to="/" replace={true} />;
  } else if (!token || isTokenExpired(token)) {
    return (
      <Navigate state={location.pathname} to={"/user/login"} replace={true} />
    );
  }

  return children;
};
