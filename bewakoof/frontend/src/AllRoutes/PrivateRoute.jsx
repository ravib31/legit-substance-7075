

import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation ,Navigate} from 'react-router-dom'
import { getTokenFromCookies } from '../utils/token.utils'
import {useCustomToast} from '../Layout/useCustomToast'

const PrivateRoute = ({children}) => {
  const showToast=useCustomToast();
    const token=getTokenFromCookies();
    const location=useLocation();
    const {state}=location
  if(!token){
    showToast("Please Login First","error", 3000)
    return <Navigate to={"/user/login"} state={location.pathname} />
  }
  return children
}

export default PrivateRoute 