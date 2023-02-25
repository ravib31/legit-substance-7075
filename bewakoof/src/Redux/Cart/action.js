import axios from "axios";
import * as types from './actionType'

export const getCartProduct=(payload)=>(dispatch)=>{
    dispatch({type:types.GET_CART_PRODUCT_REQUEST})
     axios.get(`http://localhost:5000/cart`)

     .then((res)=>{
        dispatch({type:types.GET_CART_PRODUCT_SUCCESS,payload:res.data})
     }).catch((err)=>{
        dispatch({type:types.GET_CART_PRODUCT_ERROR})
        console.log('err',err);
     })
}

export const postCartProduct=(obj)=>(dispatch)=>{
    dispatch({type:types.POST_CART_PRODUCT_REQUEST})
     axios.post(`http://localhost:5000/cart`,{obj:obj,Quantity:1})
     .then((res)=>{
       console.log(res);
     }).catch((err)=>{
        dispatch({type:types.POST_CART_PRODUCT_ERROR})
        console.log("err",err);
     })
}


export const getSingleProduct =(id)=> (dispatch) => {
    dispatch({type:types.GET_PRODUCT_REQUEST})
   return axios.get(`http://localhost:5000/menproduct/${id}`)
    // .then((res) => {
    //    dispatch({type:types.GET_PRODUCT_SUCCESS,payload:res.data})
    //     console.log(res.data)
    // })
    // .catch((err) => {
    //     dispatch({type:types.GET_PRODUCT_ERROR})
    // })
}