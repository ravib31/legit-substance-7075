import * as types from "./actionType";
const initialState = {
  isLoading: false,
  isError: false,
  msg:"",
  cartData:[]
};

export const reducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case types.GET_CART_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_CART_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, cartData: [...payload] };
    case types.GET_CART_PRODUCT_ERROR:
      return { ...state, isLoading: false, isError: true };

    case types.POST_CART_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case types.POST_CART_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, msg:payload  };
    case types.POST_CART_PRODUCT_ERROR:
      return { ...state, isLoading: false, isError: payload };
    
      case types.DELETE_CART_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case types.DELETE_CART_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, msg:payload.msg  };
    case types.DELETE_CART_PRODUCT_ERROR:
      return { ...state, isLoading: false, isError: payload };
        
    default:
      return state;
  }
};
