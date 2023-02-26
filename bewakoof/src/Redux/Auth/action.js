
import axios from "axios";
import { 
    LOGIN_FAILURE, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS 
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


export const login = (userData) => (dispatch)=> {
    dispatch(loginRequest())
  return  axios.post(`https://reqres.in/api/login`, userData)
  .then((res) => {
    dispatch(loginSuccess(res.data.token))
   console.log(res.data.token)
  })
  .catch((error) => {
    dispatch(loginFailure())
  })
}