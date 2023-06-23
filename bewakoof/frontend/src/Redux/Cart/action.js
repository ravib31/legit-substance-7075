import axios from "axios";
import * as types from "./actionType";
import { getTokenFromCookies } from "../../utils/token.utils";

export const getCartProduct = () => (dispatch) => {
  dispatch({ type: types.GET_CART_PRODUCT_REQUEST });
  axios

    .get(`http://localhost:8080/cart`,{
      // headers:{
      //   "Authorization": localStorage.getItem("token") || null
      // }
    })


    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.GET_CART_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CART_PRODUCT_ERROR });
      console.log("err", err);
    });
};

export const addToCartFun = (obj) => (dispatch) => {
  // console.log(obj);
  dispatch({ type: types.POST_CART_PRODUCT_REQUEST });
  axios

    .post(`http://localhost:8080/cart`, obj,{
      headers:{
        "Authorization":getTokenFromCookies()  || null
      }
    })

    .then((res) => {
      console.log(res);
      dispatch({type:types.POST_CART_PRODUCT_SUCCESS,payload:res.data.msg})
    })
    .catch((err) => {
      dispatch({ type: types.POST_CART_PRODUCT_ERROR ,payload:err });
      
    });
};

export const getFromCartFun = () => (dispatch) => {
  // console.log(obj);
  dispatch({ type: types.GET_CART_PRODUCT_REQUEST });
  axios

    .get(`http://localhost:8080/cart`,{
      headers:{
        "Authorization":getTokenFromCookies()  || null
      }
    })

    .then((res) => {
      console.log(res);
      dispatch({type:types.GET_CART_PRODUCT_SUCCESS,payload:res.data.cartsData})
    })
    .catch((err) => {
      dispatch({ type: types.GET_CART_PRODUCT_ERROR ,payload:err });
      
    });
};


export const getSingleProduct = (id) => (dispatch) => {
  return axios.get(`http://localhost:8080/products/${id}`,{
   headers:{
      "Authorization":getTokenFromCookies()  || null
  }
  });
};
