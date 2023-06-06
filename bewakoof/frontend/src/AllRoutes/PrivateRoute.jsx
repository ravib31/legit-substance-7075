

import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation ,Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isAuth=useSelector((store)=>store.authReducer.isAuth)
    const location=useLocation();
    const {state}=location
  if(!isAuth){
    return <Navigate to={"/user/login"} state={location.pathname} />
  }
  return children
}

export default PrivateRoute 