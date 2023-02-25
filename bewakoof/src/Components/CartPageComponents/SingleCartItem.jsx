import { Button, Select } from "@chakra-ui/react";
import React from "react";
import styles from "./SingleCartItem.module.css";

const SingleCartItem = () => {
  return (
    <div className={styles.cardItem_container}>
      <div className={styles.cartItem_container_details}>
        <div>
          <p className={styles.title}>
            Men's Smoked Paprika Cut N Sew Color Block Polo T-Shirt
          </p>
          <p className={styles.price}>
            <span>₹566</span>
            <span>₹1899</span>
          </p>
          <p>You Save ₹133!</p>
          <div className={styles.selectTag}>
            <select >
              Size
              <option value="M">Size:M</option>
              <option value="S">Size:S</option>
              <option value="L">Size:L</option>
              <option value="XL">Size:XL</option>
              <option value="2XL">Size:2XL</option>
              <option value="3XL">Size:3Xl</option>
            </select>
            <select>
              Size
              <option value="1">Qty:1</option>
              <option value="2">Qty:2</option>
              <option value="3">Qty:3</option>
              <option value="4">Qty:4</option>
              <option value="5">Qty:5</option>
              <option value="6">Qty:6</option>
            </select>
          </div>
        </div>
        <div className={styles.cartItem_image}>
          <img
            src="https://images.bewakoof.com/t1080/men-s-black-solid-oversize-jogger-with-zipper-561660-1676899163-1.jpg"
            alt=""
          />
        </div>
      </div>
      <p className={styles.stockLeft}>Hurry! Only 1 left!</p>
      <div className={styles.button}>
        <Button>Remvove</Button>
        <Button>Move to Wishlist</Button>
      </div>
      
    </div>
  );
};

export default SingleCartItem;
