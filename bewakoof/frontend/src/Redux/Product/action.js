import axios from "axios";
// import { GET_ALL_PRODUCT, GET_MEN_PRODUCT_ERROR, GET_MEN_PRODUCT_REQUEST, GET_MEN_PRODUCT_SUCCESS, GET_WOMEN_PRODUCT_ERROR, GET_WOMEN_PRODUCT_REQUEST, GET_WOMEN_PRODUCT_SUCCESS } from "./actionType"
import * as types from './actionType'
export const getMenProductRequest = () => {
    return {type:types.GET_MEN_PRODUCT_REQUEST};
};

export const getMenProductSuccess = (payload) => {
    return {type:types.GET_MEN_PRODUCT_SUCCESS,payload}
}

export const getMenProductError = () => {
    return {type: types.GET_MEN_PRODUCT_ERROR}
}



export const getProduct =() => (dispatch) => {
    dispatch(getMenProductRequest());
    axios.get(`http://localhost:5000/products?type=men`,{
        headers:{
            "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSX0lEIjoiNjQzMWFkOGE1ZGNmMjE2OTNmMzNiMTE2IiwiaWF0IjoxNjgxMTMwMzU4fQ.3Ic5eTVd_ottS-itvAddx_Qe25-Phn4p3PKKtvaV4qc"
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
    axios.get(`http://localhost:5000/products`)
    .then((res) => {
        dispatch({type:types.GET_ALL_PRODUCT,payload:res.data})
    })
    .catch((err) => {
        console.log(err)
    })
}

export const getSingleProduct=(id)=>(dispatch)=>{
    dispatch({type:types.GET_SINGLE_PRODUCT_REQUEST})
    axios.get(`http://localhost:5000/products/${id}`)
    .then((res) => {
        dispatch({type:types.GET_ALL_PRODUCT,payload:res.data})
    })
    .catch((err) => {
        console.log(err)
    })
}

export const delProduct =(id)=> (dispatch) => {

    axios.delete(`http://localhost:8080/products/${id}`,{
        headers:{
            "Authorization":localStorage.getItem("token") || null
          }
    })

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
    return {type: types.GET_WOMEN_PRODUCT_REQUEST}
}                 

export const getWomenProductSuccess = (payload) => {
    return {type: types.GET_WOMEN_PRODUCT_SUCCESS, payload}
}

export const getWomenProductError = () => {
    return {type: types.GET_WOMEN_PRODUCT_ERROR}
}


export const getWomenProduct =() => (dispatch) => {
    dispatch(getWomenProductRequest());
    axios.get(`http://localhost:5000/products?type=women`,{
        headers:{
            "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSX0lEIjoiNjQzMWFkOGE1ZGNmMjE2OTNmMzNiMTE2IiwiaWF0IjoxNjgxMTMwMzU4fQ.3Ic5eTVd_ottS-itvAddx_Qe25-Phn4p3PKKtvaV4qc"
        }
    })
    .then((res) => {
        dispatch(getWomenProductSuccess(res.data));
        
    })
    .catch((err) => {
        dispatch(getWomenProductError())
    })
}

