// import { GET_ALL_PRODUCT, GET_MEN_PRODUCT_ERROR, GET_MEN_PRODUCT_REQUEST, GET_MEN_PRODUCT_SUCCESS, GET_WOMEN_PRODUCT_ERROR, GET_WOMEN_PRODUCT_REQUEST, GET_WOMEN_PRODUCT_SUCCESS } from "./actionType";
import * as types from './actionType';
const initialState = {
    isLoading:false,
    isError:false,
    menproduct: [],
    product:[],
    singleProduct:{}
};


export const reducer = (state=initialState, {type,payload}) => {
    switch(type){
        case types.GET_MEN_PRODUCT_REQUEST:
            return {...state, isLoading:true}
        case types.GET_MEN_PRODUCT_SUCCESS:
            return {...state, isLoading:false, menproduct:payload}
        case types.GET_ALL_PRODUCT:
            return {...state, isLoading:false, product:payload}
        case types.GET_MEN_PRODUCT_ERROR: 
             return {...state, isLoading:false, isError:true}  
             
         case types.GET_SINGLE_PRODUCT_REQUEST:
            return {...state,isLoading:true}
            case types.GET_SINGLE_PRODUCT_SUCCESS:
                return {...state,isLoading:false,singleProduct:payload} 
                case types.GET_SINGLE_PRODUCT_ERROR:
                    return {...state,isError:true,isLoading:false}   
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
        case types.GET_WOMEN_PRODUCT_REQUEST:
            return {...state, isLoading:true}
        case types.GET_WOMEN_PRODUCT_SUCCESS:
            return {...state, isLoading:false, womenproduct:payload}
        case types.GET_WOMEN_PRODUCT_ERROR: 
             return {...state, isLoading:false, isError:true}        
        default:
            return state;
    }
}