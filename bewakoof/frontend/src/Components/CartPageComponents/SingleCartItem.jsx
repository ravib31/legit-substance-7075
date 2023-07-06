import { Button, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { updateCartItemQuantity } from "../../Redux/Cart/action";
import styles from "./SingleCartItem.module.css";
import { useDispatch } from "react-redux";

const SingleCartItem = ({
  _id,
  title,
  actualPrice,
  selectedSize,
  discountedPrice,
  image,
  handleRemoveCartData,
  quantity
}) => {
  const dispatch = useDispatch();
  const actual_price = actualPrice * quantity;
  const price = (actualPrice - discountedPrice) * quantity;
  
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleQuantity = (change) => {
    const updatedQuantity = newQuantity + change;
    setNewQuantity(updatedQuantity);
    dispatch(updateCartItemQuantity(_id, { quantity: updatedQuantity }));
  };
  return (
    <div className={styles.cardItem_container}>
      <div className={styles.cartItem_container_details}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.price}>
            <span>₹{price}</span>
            <span>₹{actual_price}</span>
          </p>
          <p>You Save ₹{actual_price-price}!</p>
          <div className={styles.selectTag}>
            <p>size:{selectedSize}</p>

            <div>
            {quantity<=1?<Button onClick={()=>handleRemoveCartData(_id)}>Delete</Button>:<Button onClick={(()=>handleQuantity(-1))}>-</Button>}
            <span>{quantity}</span>
            <Button onClick={(()=>handleQuantity(+1))}>+</Button>
            </div>
          </div>
        </div>
        <div className={styles.cartItem_image}>
          <img src={image} alt="img" />
        </div>
      </div>
      <p className={styles.stockLeft}>Hurry! Only 1 left!</p>
      <div className={styles.button}>
        <Button
          onClick={() => {
            handleRemoveCartData(_id);
          }}
        >
          Remove
        </Button>
        <Button>Move to Wishlist</Button>
      </div>
    </div>
  );
};

export default SingleCartItem;



// {/* <select >
//               Size
//               <option value="M">Size M</option>
//               <option value="S">S</option>
//               <option value="L">L</option>
//               <option value="XL">XL</option>
//               <option value="2XL">2XL</option>
//               <option value="3XL">3Xl</option>
//             </select> */}
//             {/* <select onChange={(e)=>handleQuantity(e)}>
//               Size
//               <option value="1">Qty:1</option>
//               <option value="2">Qty:2</option>
//               <option value="3">Qty:3</option>
//               <option value="4">Qty:4</option>
//               <option value="5">Qty:5</option>
//               <option value="6">Qty:6</option>
//             </select> */}