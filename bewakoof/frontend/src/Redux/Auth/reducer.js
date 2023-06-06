import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isAuth: false,
  token: "",
  msg:"",
  isError: false,
  user:{}
};

export const reducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isError:false, isAuth: true, token: payload.token,msg:payload.msg ,user:payload.user };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true ,msg:payload};
    case REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case REGISTER_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, msg: payload };
    case REGISTER_FAILURE:
      return { ...state, isLoading: false, isError: true, };
    default:
      return state;
  }
};
