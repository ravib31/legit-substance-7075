import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleCartItem from "../../Components/CartPageComponents/SingleCartItem";
import { getCartProduct, removeCartData } from "../../Redux/Cart/action";
import styles from "./CartPage.module.css";


const CartPage = () => {
 const cartData= useSelector((store)=>(store.cartReducer.cart))
 console.log('cartData',cartData);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCartProduct());
  },[])

  
  return (
    <div>
      <div>
        <b>My Bag</b>
        {0} items(s)
      </div>
      <div className={styles.cartpage_container}>
        <div className={styles.allcartproducts}>
          {cartData && cartData.map((el)=>{
            return (
              <SingleCartItem key={el.id} {...el} />
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
              <p>$100</p>
            </div>
            <div className={styles.shipingCharges}>
              <p>Shipping Charges </p>
              <p>FREE</p>
            </div>
            <div className={styles.bagDiscount}>
              <p>Bag Discount</p>
              <p>$100</p>
            </div>
            <div className={styles.total}>
              <div>
                <p>Total</p>
                <p>555rS</p>
              </div>
              <div>
                <Button>CONTINUE</Button>
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
