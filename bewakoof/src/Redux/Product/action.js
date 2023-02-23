import axios from "axios";
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


export const getProduct = (dispatch) => {
    dispatch(getMenProductRequest());
    axios.get(`http://localhost:5000/menproduct`)
    .then((res) => {
        dispatch(getMenProductSuccess(res.data));
        console.log(res.data)
    })
    .catch((err) => {
        dispatch(getMenProductError())
    })
}