import axios from "axios";
import * as types from "./actionType";

export const getCartProduct = () => (dispatch) => {
  dispatch({ type: types.GET_CART_PRODUCT_REQUEST });
  axios
    .get(`http://localhost:5000/cart`)

    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.GET_CART_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CART_PRODUCT_ERROR });
      console.log("err", err);
    });
};

export const postCartProduct = (obj) => (dispatch) => {
  // console.log(obj);
  dispatch({ type: types.POST_CART_PRODUCT_REQUEST });
  axios
    .post(`http://localhost:5000/cart`, obj)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: types.POST_CART_PRODUCT_ERROR });
      console.log("err", err);
    });
};

export const getSingleProduct = (id) => (dispatch) => {
  return axios.get(`http://localhost:5000/products/${id}`,{
   headers:{
      "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSX0lEIjoiNjQzMWFkOGE1ZGNmMjE2OTNmMzNiMTE2IiwiaWF0IjoxNjgwOTc3MzIzfQ.Ve07P_YT_6TbsKlVj195IwIJngHqR_GH94K2b6w9OMk"
  }
  });
};
