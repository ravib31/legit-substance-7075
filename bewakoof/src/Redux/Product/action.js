import { GET_MEN_PRODUCT_ERROR, GET_MEN_PRODUCT_REQUEST, GET_MEN_PRODUCT_SUCCESS } from "./actionType"

export const getMenProductRequest = () => {
    return {type:GET_MEN_PRODUCT_REQUEST};
};

export const getMenProductSuccess = (payload) => {
    return {type:GET_MEN_PRODUCT_SUCCESS,payload}
}

export const getMenProductError = () => {
    return {type: GET_MEN_PRODUCT_ERROR}
}