import { Button } from "@chakra-ui/react";
import React from "react";
import SingleCartItem from "../../Components/CartPageComponents/SingleCartItem";
import styles from "./CartPage.module.css";

const CartPage = () => {
  return (
    <div>
      <div>
        <b>My Bag</b>
        {0} items(s)
      </div>
      <div className={styles.cartpage_container}>
        <div className={styles.allcartproducts}>
          <SingleCartItem />
        </div>
        <div className={styles.cartPageRightSide}>
          <div className={styles.cashbackDetails}>
            Whistles! Get extra 10% cashback on all prepaid orders above Rs.499.
            Use Code - PREP10.
          </div>
          <div className={styles.coupon}>Apply Coupon / Gift Card / Referral</div>
          <div className={styles.allPriceDetails}>
            <p className={styles.summary}>PRICE SUMMARY</p>
            <div className={styles.flexkarnahai}>
              <p>Total MRP (Incl. of taxes)</p>
              <p>$100</p>
            </div>
            <div>
              <p>Shipping Charges </p>
              <p>FREE</p>
            </div>
            <div>
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
    </div>
  );
};

export default CartPage;
