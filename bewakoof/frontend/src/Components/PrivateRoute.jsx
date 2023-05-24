import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    const isAuth = useSelector((store) => store.authentication.isAuth);
    const location = useLocation();
    console.log(isAuth)
  if(!isAuth){
    return <Navigate state={location.pathname} to={"/login"} replace={true} />
  }

  return children;
}