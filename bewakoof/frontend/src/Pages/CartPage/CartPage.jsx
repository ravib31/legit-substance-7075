import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleCartItem from "../../Components/CartPageComponents/SingleCartItem";
import { getCartProduct, getSingleProduct, removeCartData } from "../../Redux/Cart/action";
import styles from "./CartPage.module.css";
import * as types from '../../Redux/Cart/actionType';

const CartPage = () => {
  
 const cartData= useSelector((store)=>(store.cartReducer.cart))
 const [totalItem,setTotalItems]=useState(0)
 const [sellingPrice,setsellingPrice]=useState(0)
 
 const [totalMrp,setToalMrp]=useState(0)
 //console.log('cartData',cartData);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCartProduct());
    
  },[])

  useEffect(()=>{
    cartData.map((el)=>{
      setToalMrp((prev)=>prev+el.actualPrice)
      setTotalItems(cartData.length);
      setsellingPrice(prev=>prev+el.discountedPrice)
    })
  },[cartData])

  console.log(totalItem,totalMrp,sellingPrice);
  

  const handleRemoveCartData=(id)=>{
 
         axios.delete(` http://localhost:8080/cart/${id}`,{
          headers:{
            "Authorization":localStorage.getItem("token") || null
          }
         }).then((res)=>{
          dispatch(getSingleProduct(id)).then((res)=>{
            console.log(res);
            setToalMrp((prev)=>prev-res.data.actualPrice)
            setsellingPrice(prev=>prev-res.data.discountedPrice)
          })
        // 
          dispatch(getCartProduct())
         })
  }


  
  if(cartData.length===0){
    return(
      <div className={styles.emptyBag}>
        <div>
          <img src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png" alt="" />
        </div>
        <p>Nothing in the bag</p>
        
      <Link to={"/"}><Button border={'1px solid green'}>Continue Shoping</Button></Link>
      </div>
    )
  }

  dispatch({type:types.TOTALMRP,payload:totalMrp})
  dispatch({type:types.TOTALPRICE,payload:sellingPrice})

  return (
    <div>
      <div className={styles.totalItem}>
        <b>My Bag</b>
        {totalItem} items(s)
      </div>
      <div className={styles.cartpage_container}>
        <div className={styles.allcartproducts}>
          {cartData && cartData.map((el)=>{
            
            return (
              <SingleCartItem key={el._id} {...el} handleRemoveCartData={handleRemoveCartData}  />
            )
          })}
        </div>
        <div className={styles.cartPageRightSide}>
          <div className={styles.cashbackDetails}>
            Whistles! Get extra 10% cashback on all prepaid orders above Rs.499.
            Use Code - PREP10.
          </div>
          <div className={styles.coupon}>Apply Coupon / Gift Card / Referral</div>
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
              <p>₹{totalMrp-sellingPrice}</p>
            </div>
            <hr />
            <div className={styles.total}>
              <div>
                <p>Total</p>
                <p>₹{sellingPrice}</p>
              </div>
              <div>
              <Link to="/checkout"><Button className={styles.button}>CONTINUE</Button></Link>
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
