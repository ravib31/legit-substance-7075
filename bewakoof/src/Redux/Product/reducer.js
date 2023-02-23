import { GET_MEN_PRODUCT_ERROR, GET_MEN_PRODUCT_REQUEST, GET_MEN_PRODUCT_SUCCESS } from "./actionType";

const initialState = {
    isLoading:false,
    isError:false,
    menProduct: []
};


export const reducer = (state=initialState, {type,payload}) => {
    switch(type){
        case GET_MEN_PRODUCT_REQUEST:
            return {...state, isLoading:true}
        case GET_MEN_PRODUCT_SUCCESS:
            return {...state, isLoading:false, menProduct:payload}
        case GET_MEN_PRODUCT_ERROR: 
             return {...state, isLoading:false, isError:true}        
        default:
            return state;
    }
}