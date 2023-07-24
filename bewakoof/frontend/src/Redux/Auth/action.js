
import axios from "axios";
import * as types from './actionType';
import { setTokenInCookies } from "../../utils/token.utils";
import baseurl from "../../urlconfig";

export const loginRequest = () => {
    return {type:types.LOGIN_REQUEST}
};

export const loginSuccess = (payload) => {
    return {type:types.LOGIN_SUCCESS, payload}
};

export const loginFailure = (payload) => {
    return {type:types.LOGIN_FAILURE,payload}
};

export const registerRequest = () => {
  return {type:types.REGISTER_REQUEST}
};

export const registerSuccess = (payload) => {
  return {type:types.REGISTER_SUCCESS, payload}
};

export const registerFailure = () => {
  return {type:types.REGISTER_FAILURE}
};


// export const login = (userData) => (dispatch)=> {
//     dispatch(loginRequest())
//   return axios.post("http://localhost:8080/user/login",{
//     userData,
//     headers:{
//         "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSX0lEIjoiNjQzMWFkOGE1ZGNmMjE2OTNmMzNiMTE2IiwiaWF0IjoxNjgxMTIwNDQ4fQ.8PRWSwJRt2RKTfSrjZ5nW5mHOfxGFQuY5W2NToYT1mI"
//     }
// })
//   .then((res) => {
//     console.log(res);
//     dispatch(loginSuccess(res.data.token))
//    console.log(res.data.token)
//   })
//   .catch((error) => {
//     dispatch(loginFailure())
//   })
// }

export const login=(userData)=>(dispatch)=>{
  dispatch(loginRequest());
  return axios.post(`${baseurl}/user/login`,userData)
  .then((res)=>{
    
    setTokenInCookies(res&& res.data.token)
    dispatch(loginSuccess(res.data))
  }).catch((error)=>{
    console.log(error);
    dispatch(loginFailure(error.response.data.msg)) 
    console.log(error.response.data.msg);
  })
}


export const register = (userData) => async(dispatch)=> {
  dispatch(registerRequest())
  try {
    let res=await axios.post(`${baseurl}/user/register`,userData);
    console.log(res);
    dispatch(registerSuccess(res.data.msg))
  } catch (error) {
    console.log(error);
    dispatch(registerFailure(error.response.data.msg))
    
  }

}

export const loginWithGoogle = () => async(dispatch)=> {
  dispatch({type:types.GOOGLE_LOGIN_REQUEST})
  try {
    let res=await axios.get(`${baseurl}/auth/google`);
    console.log(res);
    dispatch({type:types.GOOGLE_LOGIN_SUCCESS,payload:res})
  } catch (error) {
    console.log(error);
    dispatch({type:types.GOOGLE_LOGIN_FAILURE,payload:error})
    
  }

}

