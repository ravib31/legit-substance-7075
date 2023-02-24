import * as types from './actionType'
const initialState = {
    isLoading:false,
    isError:false,
    cart: []
};


export const reducer = (state=initialState, {type,payload}) => {
    switch(type){
        case types.GET_CART_PRODUCT_REQUEST:
            return {...state, isLoading:true}
        case types.GET_CART_PRODUCT_SUCCESS:
            return {...state, isLoading:false, cart:payload}
        case types.GET_CART_PRODUCT_ERROR: 
             return {...state, isLoading:false, isError:true} 
             
             case types.POST_CART_PRODUCT_REQUEST:
                return {...state,isLoading:true}
                case types.POST_CART_PRODUCT_SUCCESS:
                    return {...state,isLoading:false,cart:[...state.cart,payload]}
                    case types.POST_CART_PRODUCT_ERROR:
                        return {...state,isLoading:false,isError:true}
        default:
            return state;
    }
    
}