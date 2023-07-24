// import * as types from "./actionType.payment";
// import axios from "axios";


// src/Redux/Cart/action.js
import baseurl from "../../urlconfig";
import { getTokenFromCookies } from "../../utils/token.utils";
import * as types from "./actionType.payment";
import axios from "axios";

const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        resolve();
      };
      document.body.appendChild(script);
    });
  };

export const paymentProcessAction = (amount,user) => async (dispatch) => {
    try {
        console.log({amount});
      dispatch({ type: types.PAYMENT_REQUEST });
  
      const { data: { key } } = await axios.get(`${baseurl}/payment/getkey`);
      const { data: { order } } = await axios.post(`${baseurl}/payment/checkout`, { amount });
  
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Apna Ecommerce",
        description: "Exploring RazorPay",
        image: "https://avatars.githubusercontent.com/u/105533945?v=4",
        order_id: order.id,
        callback_url: `${baseurl}/payment/paymentverification`,
        prefill: {
          name:user?.name, 
          email: user?.email,
          contact:user?.phone, 
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#0d0707",
        },
      };

      await loadRazorpay();
  
      const razor = new window.Razorpay(options);
      razor.open();
  
      return new Promise((resolve, reject) => {
        // Set up the callback for the Razorpay checkout success and failure events
        razor.on("payment.success", (response) => {
          // Handle successful payment
          console.log("Payment Success: ", response);
          dispatch({ type: types.PAYMENT_SUCCESS, payload: response });
          resolve(response); // Resolve the promise with the response object
        });
  
        razor.on("payment.error", (error) => {
          // Handle payment error
          console.error("Payment Error: ", error);
          dispatch({ type: types.PAYMENT_FAILURE });
          reject(error); // Reject the promise with the error
        });
  
        razor.on("payment.cancel", () => {
          // Handle payment cancellation by the user
          console.log("Payment Cancelled");
          const error = new Error("Payment Cancelled");
          dispatch({ type: types.PAYMENT_FAILURE });
          reject(error); // Reject the promise with the error
        });
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: types.PAYMENT_FAILURE });
      return Promise.reject(error);
    }
  };
  

export const clearCartProduct = () => (dispatch) => {
    axios
      .delete(`${baseurl}/cart/clearCart`,{
        headers:{
            Authorization: getTokenFromCookies() || null,
          }
      })
      .then((res) => {
        dispatch({ type: types.CLEAR_CART, payload: res.data });
      })
      .catch((err) => {
           console.log(err);
      });
  };