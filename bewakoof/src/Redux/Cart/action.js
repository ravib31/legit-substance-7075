import axios from "axios";
import * as types from './actionType'

export const getCartProduct=()=>(dispatch)=>{
    dispatch({type:types.GET_CART_PRODUCT_REQUEST})
     axios.get(`http://localhost:5000/cart`)

     .then((res)=>{
        console.log(res.data);
        dispatch({type:types.GET_CART_PRODUCT_SUCCESS,payload:res.data})
     }).catch((err)=>{
        dispatch({type:types.GET_CART_PRODUCT_ERROR})
        console.log('err',err);
     })
}

export const postCartProduct=(obj)=>(dispatch)=>{
    // console.log(obj);
    dispatch({type:types.POST_CART_PRODUCT_REQUEST})
     axios.post(`http://localhost:5000/cart`,obj)
     .then((res)=>{
       console.log(res);
     }).catch((err)=>{
        dispatch({type:types.POST_CART_PRODUCT_ERROR})
        console.log("err",err);
     })
}


export const getSingleProduct =(id)=> (dispatch) => {
   return axios.get(`https://wicked-tick-overshirt.cyclic.app/products/${id}`)
   
    
   
}

