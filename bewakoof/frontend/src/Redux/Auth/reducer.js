import { 
    LOGIN_FAILURE, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS 
  } from "./actionType";
  
  const initialState = {
      isLoading:false,
      isAuth: false,
      token: "",
      isError:false,
      
  }
  
  export const reducer = (state=initialState, {type, payload}) => {
      switch(type){
        case LOGIN_REQUEST:
          return{...state, isLoading:true }
        case LOGIN_SUCCESS:
          return{...state, isLoading:false,isAuth:true, token:payload}
        case LOGIN_FAILURE:
          return{...state, isLoading:false, isError:true}
                
          default:
              return state;
      }
  }
  