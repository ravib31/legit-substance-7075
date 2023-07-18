import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import SingleCartItem from "../../Components/CartPageComponents/SingleCartItem";
import {
  getFromCartFun,
  getSingleProduct,
  deleteCartProduct,
  getTotalMrpPrice,
  getToatalDiscountPrice,
  getTotalCartProduct,
} from "../../Redux/Cart/action";
import styles from "./CartPage.module.css";
import * as types from "../../Redux/Cart/actionType";
import useCustomToast from "../../Layout/useCustomToast";
import InitialLoader from "../../Layout/InitialLoader";
import { getTokenFromCookies, isTokenExpired } from "../../utils/token.utils";

const CartPage = () => {
  const navigate=useNavigate()
  const showToast = useCustomToast();
  const { cartData, isLoading, isError, msg,quantityLoading,deleteLoading, totalMrp,totalDiscount,totalCartProduct} = useSelector(
    (store) => store.cartReducer
  );

  const {user}=useSelector((store)=>store.authReducer)
  console.log("user",user);

  //console.log('cartData',cartData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFromCartFun());
    dispatch(getTotalMrpPrice())
    dispatch(getToatalDiscountPrice())
    dispatch(getTotalCartProduct())
  }, [quantityLoading,deleteLoading]);

  const handleRemoveCartData = (id) => {
    console.log("deleted");
    dispatch(deleteCartProduct(id));

    showToast("Removed from Cart", "error", 3000);
  };

  useEffect(() => {
    const token = getTokenFromCookies();
    if (isTokenExpired (token)) {
      // Token has expired, perform necessary actions (e.g., logout)
      alert("Session Expired")
      navigate("/user/login")
      
    }
  }, [quantityLoading,deleteLoading,isLoading]);

  // if(isLoading){
  //   return <InitialLoader/>
  // }


  const checkoutHandler = async (amount) => {

    const { data: { key } } = await axios.get("http://www.localhost:8080/payment/getkey")

    const { data: { order } } = await axios.post("http://localhost:8080/payment/checkout", {
        amount
    })

    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Apna Ecommerce",
        description: "Exploring RazorPay",
        image: "https://avatars.githubusercontent.com/u/105533945?v=4",
        order_id: order.id,
        callback_url: "http://localhost:8080/payment/paymentverification",
        prefill: {
            name: user?.name,
            email: "sunil@example.com",
            contact: "user?."
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#0d0707"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
}


  if (cartData.length === 0) {
    return (
      <div className={styles.emptyBag}>
        <div>
          <img
            src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
            alt="Sunil"
          />
        </div>
        <p>Bag is Empty</p>

        <Link to={"/"}>
          <Button border={"1px solid green"}>Continue Shoping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.totalItem}>
        <b>My Bag</b>
        {totalCartProduct} items(s)
      </div>
      <div className={styles.cartpage_container}>
      {(isLoading || deleteLoading) && <h1 className={styles.loader}>Loading...</h1>}
        <div className={styles.allcartproducts}>
          {cartData &&
            cartData.map((el) => {
              return (
                <SingleCartItem
                  key={el._id}
                  {...el}
                  handleRemoveCartData={handleRemoveCartData}
                />
              );
            })}
        </div>
        <div className={styles.cartPageRightSide}>
          <div className={styles.cashbackDetails}>
            Whistles! Get extra 10% cashback on all prepaid orders above Rs.499.
            Use Code - PREP10.
          </div>
          <div className={styles.coupon}>
            Apply Coupon / Gift Card / Referral
          </div>
          <div className={styles.allPriceDetails}>
            <p className={styles.summary}>PRICE SUMMARY</p>
            <div className={styles.totolMrp}>
              <p>Total MRP (Incl. of taxes)</p>
              <p>₹{totalMrp}</p>
            </div>
            <div className={styles.shipingCharges}>
              <p>Shipping Charges </p>
              <p>FREE</p>
            </div>
            <div className={styles.bagDiscount}>
              <p>Bag Discount</p>
              <p>₹{totalDiscount}</p>
            </div>
            <hr />
            <div className={styles.total}>
              <div>
                <p>Total</p>
                <p>₹{totalMrp-totalDiscount}</p>
              </div>
              <div>
                <Link >
                  <Button onClick={()=>checkoutHandler(totalMrp-totalDiscount)} className={styles.button} >CONTINUE</Button>
                </Link>
              </div>
            </div>
            <div className={styles.img}>
              <img
                src="https://images.bewakoof.com/web/cart-badge-trust.svg"
                alt="img"
              />
              <img
                src="https://images.bewakoof.com/web/cart-easy-return.svg"
                alt="img"
              />
              <img
                src="https://images.bewakoof.com/web/quality-check.svg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
