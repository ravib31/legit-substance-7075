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



export const getProduct =() => (dispatch) => {
    dispatch(getMenProductRequest());
    axios.get(`http://localhost:8080/products?type=men`,{
        headers:{
            "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSX0lEIjoiNjQzMWFkOGE1ZGNmMjE2OTNmMzNiMTE2IiwiaWF0IjoxNjgxMDI4OTg5fQ.r017Lil3xYjyEFwYRD-ZIAPASKsoDjj3XKkV_22YrR0"
        }
    })
    .then((res) => {
        console.log(res)
        dispatch(getMenProductSuccess(res.data));
    })
    .catch((err) => {
        dispatch(getMenProductError())
    })
}



export const getAllProduct=()=>(dispatch)=>{
    axios.get(`https://lucky-getup-duck.cyclic.app/products`)
    .then((res) => {
        dispatch({type:GET_ALL_PRODUCT,payload:res.data})
    })
    .catch((err) => {
        console.log(err)
    })
}

export const delProduct =(id)=> (dispatch) => {
    axios.delete(`https://lucky-getup-duck.cyclic.app/products/${id}`)
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


export const getWomenProduct =() => (dispatch) => {
    dispatch(getWomenProductRequest());
    axios.get(`http://localhost:8080/products?type=women`,{
        headers:{
            "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSX0lEIjoiNjQzMWFkOGE1ZGNmMjE2OTNmMzNiMTE2IiwiaWF0IjoxNjgxMDI4OTg5fQ.r017Lil3xYjyEFwYRD-ZIAPASKsoDjj3XKkV_22YrR0"
        }
    })
    .then((res) => {
        dispatch(getWomenProductSuccess(res.data));
        
    })
    .catch((err) => {
        dispatch(getWomenProductError())
    })
}

