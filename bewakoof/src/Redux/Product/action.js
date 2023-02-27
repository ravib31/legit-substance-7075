import axios from "axios";
import { GET_ALL_PRODUCT, GET_MEN_PRODUCT_ERROR, GET_MEN_PRODUCT_REQUEST, GET_MEN_PRODUCT_SUCCESS, GET_WOMEN_PRODUCT_ERROR, GET_WOMEN_PRODUCT_REQUEST, GET_WOMEN_PRODUCT_SUCCESS } from "./actionType"

export const getMenProductRequest = () => {
    return {type:GET_MEN_PRODUCT_REQUEST};
};

export const getMenProductSuccess = (payload) => {
    return {type:GET_MEN_PRODUCT_SUCCESS,payload}
}

export const getMenProductError = () => {
    return {type: GET_MEN_PRODUCT_ERROR}
}



export const getProduct =(param) => (dispatch) => {
    dispatch(getMenProductRequest());
    axios.get(`https://wicked-tick-overshirt.cyclic.app/products?type=men`, param)
    .then((res) => {
        dispatch(getMenProductSuccess(res.data));
        // console.log(res.data)
    })
    .catch((err) => {
        dispatch(getMenProductError())
    })
}

export const getAllProduct=()=>(dispatch)=>{
    axios.get(`https://wicked-tick-overshirt.cyclic.app/products`)
    .then((res) => {
        dispatch({type:GET_ALL_PRODUCT,payload:res.data})
    })
    .catch((err) => {
        console.log(err)
    })
}

export const delProduct =(id)=> (dispatch) => {
    axios.delete(`https://wicked-tick-overshirt.cyclic.app/products/${id}`)
    .then((res) => {
        console.log(res)
        dispatch(getAllProduct());
       ;
    })
    .catch((err) => {
        console.log(err)
    })
}

                 // WOMEN PRODUCT

export const getWomenProductRequest = () => {
    return {type: GET_WOMEN_PRODUCT_REQUEST}
}                 

export const getWomenProductSuccess = (payload) => {
    return {type: GET_WOMEN_PRODUCT_SUCCESS, payload}
}

export const getWomenProductError = () => {
    return {type: GET_WOMEN_PRODUCT_ERROR}
}


export const getWomenProduct =(param) => (dispatch) => {
    dispatch(getWomenProductRequest());
    axios.get(`https://wicked-tick-overshirt.cyclic.app/products?type=women`, param)
    .then((res) => {
        dispatch(getWomenProductSuccess(res.data));
        
    })
    .catch((err) => {
        dispatch(getWomenProductError())
    })
}

