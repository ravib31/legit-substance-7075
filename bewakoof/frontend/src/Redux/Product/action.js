import axios from "axios";
// import { GET_ALL_PRODUCT, GET_MEN_PRODUCT_ERROR, GET_MEN_PRODUCT_REQUEST, GET_MEN_PRODUCT_SUCCESS, GET_WOMEN_PRODUCT_ERROR, GET_WOMEN_PRODUCT_REQUEST, GET_WOMEN_PRODUCT_SUCCESS } from "./actionType"
import * as types from "./actionType";
import { getTokenFromCookies } from "../../utils/token.utils";
import baseurl from '../../urlconfig'

export const getMenProductRequest = () => {
  return { type: types.GET_MEN_PRODUCT_REQUEST };
};

export const getMenProductSuccess = (payload) => {
  return { type: types.GET_MEN_PRODUCT_SUCCESS, payload };
};

export const getMenProductError = () => {
  return { type: types.GET_MEN_PRODUCT_ERROR };
};

export const getWomenProductRequest = () => {
  return { type: types.GET_WOMEN_PRODUCT_REQUEST };
};

export const getWomenProductSuccess = (payload) => {
  return { type: types.GET_WOMEN_PRODUCT_SUCCESS, payload };
};

export const getWomenProductError = () => {
  return { type: types.GET_WOMEN_PRODUCT_ERROR };
};

export const getMenProduct = (params) => (dispatch) => {
  dispatch(getMenProductRequest());
 return axios
    .get(`${baseurl}/products/men`, {
      params: {
        category: params.category,
        sort: params.sort,
      },
     
    })
    .then((res) => {
      // console.log(res.data);
      dispatch(getMenProductSuccess(res.data.menData));
    })
    .catch((err) => {
      dispatch(getMenProductError());
      alert("error")
    });
};

export const getAllProduct = () => (dispatch) => {
  axios
    .get(`${baseurl}/products`)
    .then((res) => {
      dispatch({ type: types.GET_ALL_PRODUCT, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSingleProduct = (id) => (dispatch) => {
    console.log("actionid",id);
    dispatch({ type: types.GET_SINGLE_PRODUCT_REQUEST });
    axios.get(`${baseurl}/products/${id}`,{
      headers: {
        Authorization: getTokenFromCookies() || null,
      },
    })
      .then((res) => {
        // console.log(res);
        dispatch({
          type: types.GET_SINGLE_PRODUCT_SUCCESS,
          payload: res.data.singleData,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: types.GET_SINGLE_PRODUCT_ERROR, payload: err });
      });
  };

export const delProduct = (id) => (dispatch) => {
  axios
    .delete(`${baseurl}/products/${id}`, {
      headers: {
        Authorization: getTokenFromCookies() || null,
      },
    })

    .then((res) => {
      // console.log(res)
      dispatch(getAllProduct());
    })
    .catch((err) => {
      console.log(err);
    });
};

// WOMEN PRODUCT

export const getWomenProduct = (params) => (dispatch) => {
  dispatch(getWomenProductRequest());
  axios
    .get(`${baseurl}/products/women`, {
      params: {
        category: params.category,
        sort: params.sort,
      },
    })
    .then((res) => {
      // console.log(res);
      dispatch(getWomenProductSuccess(res.data.womenData));
    })
    .catch((err) => {
      dispatch(getWomenProductError());
    });
};
