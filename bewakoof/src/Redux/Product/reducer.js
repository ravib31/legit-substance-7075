import { GET_MEN_PRODUCT_ERROR, GET_MEN_PRODUCT_REQUEST, GET_MEN_PRODUCT_SUCCESS, GET_WOMEN_PRODUCT_ERROR, GET_WOMEN_PRODUCT_REQUEST, GET_WOMEN_PRODUCT_SUCCESS } from "./actionType";

const initialState = {
    isLoading:false,
    isError:false,
    menproduct: []
};


export const reducer = (state=initialState, {type,payload}) => {
    switch(type){
        case GET_MEN_PRODUCT_REQUEST:
            return {...state, isLoading:true}
        case GET_MEN_PRODUCT_SUCCESS:
            return {...state, isLoading:false, menproduct:payload}
        case GET_MEN_PRODUCT_ERROR: 
             return {...state, isLoading:false, isError:true}        
        default:
            return state;
    }
}

const womenState = {
    isLoading:false,
    isError:false,
    womenproduct: []
}

export const Woreducer = (state=womenState, {type,payload}) => {
    switch(type){
        case GET_WOMEN_PRODUCT_REQUEST:
            return {...state, isLoading:true}
        case GET_WOMEN_PRODUCT_SUCCESS:
            return {...state, isLoading:false, womenproduct:payload}
        case GET_WOMEN_PRODUCT_ERROR: 
             return {...state, isLoading:false, isError:true}        
        default:
            return state;
    }
}