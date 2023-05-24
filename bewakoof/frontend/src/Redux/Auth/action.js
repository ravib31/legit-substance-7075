
import axios from "axios";
import { 
    LOGIN_FAILURE, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS ,
    REGISTER_FAILURE, 
  REGISTER_REQUEST, 
  REGISTER_SUCCESS 
} from "./actionType"

export const loginRequest = () => {
    return {type:LOGIN_REQUEST}
};

export const loginSuccess = (payload) => {
    return {type:LOGIN_SUCCESS, payload}
};

export const loginFailure = () => {
    return {type:LOGIN_FAILURE}
};

export const registerRequest = () => {
  return {type:REGISTER_REQUEST}
};

export const registerSuccess = (payload) => {
  return {type:REGISTER_SUCCESS, payload}
};

export const registerFailure = () => {
  return {type:REGISTER_FAILURE}
};


export const login = (userData) => (dispatch)=> {
    dispatch(loginRequest())
  return axios.post("http://localhost:8080/user/login",{
    userData,
    headers:{
        "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSX0lEIjoiNjQzMWFkOGE1ZGNmMjE2OTNmMzNiMTE2IiwiaWF0IjoxNjgxMTIwNDQ4fQ.8PRWSwJRt2RKTfSrjZ5nW5mHOfxGFQuY5W2NToYT1mI"
    }
})
  .then((res) => {
    dispatch(loginSuccess(res.data.token))
   console.log(res.data.token)
  })
  .catch((error) => {
    dispatch(loginFailure())
  })
}


export const register = (userData) => async(dispatch)=> {
  dispatch(registerRequest())
  try {
    let res=await axios.post("http://localhost:8080/user/register",userData);
    dispatch(registerSuccess(res.data.msg))
  } catch (error) {
    dispatch(registerFailure())
    
  }

}