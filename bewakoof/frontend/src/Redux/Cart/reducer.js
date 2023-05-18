import * as types from './actionType'
const initialState = {
    isLoading:false,
    isError:false,
    totalPrice:0,
    totalMrp:0,
    cart: []
};


export const reducer = (state=initialState, {type,payload}) => {
    console.log(payload);
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
                        case types.TOTALMRP:
                            return {...state,totalMrp:payload}
                            case types.TOTALPRICE:
                                return {...state,totalPrice:payload}
        default:
            return state;
    }
    
}