import React, { useState } from "react";
import styles from "./Payment.module.css";
import { BsCreditCard2Back } from "react-icons/bs";
import { RiWallet3Line } from "react-icons/ri";

import { BsBank2 } from "react-icons/bs";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import {
  InputGroup,
  Input,
  Checkbox,
  Button,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  Link,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

// import {  } from '@chakra-ui/icons'

const AllPaymentWays=["cart","upi","cash-on-delivery"]

const Payment = () => {
  const data = useSelector((store) => store.cartReducer);
  const [paymentStatus, setPaymentStatus] = useState(1);

  const handlePayment = () => {
    setTimeout(()=>{
      setPaymentStatus(2)
    },2000)
   setTimeout(()=>{
    setPaymentStatus(5);
   },5000)
  };
  console.log(paymentStatus);

  if(paymentStatus===2){
      
      return <img style={{width:"600px",height:"400px", margin:"auto"}} src="https://thumbs.gfycat.com/AcclaimedPositiveGull-size_restricted.gif" alt="" />
  }
  if(paymentStatus===5){
    return(
      <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='600px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Payment Successfull
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thank you for shoping from Befour
  </AlertDescription>
  <Link to="/"><Button>Shop More</Button></Link>
</Alert>
    )
  }else

  return (
    <div>
      <p className={styles.heading}>Choose your payment method</p>
      <div className={styles.container}>
        <div className={styles.left_container}>
          <div>
            <p className={styles.paymentMethod}>
              {" "}
              <span>
                <BsCreditCard2Back />
              </span>
              Debit/Credit Cards{" "}
            </p>
            <p className={styles.paymentMethod}>
              <span>
                <RiWallet3Line />
              </span>
              Wallet{" "}
            </p>
            <div className={styles.paymentMethod}>
              <img
                width={"20px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXR0KOAPkuQo-XfV2yo4YcnOtbA2Jm_S_QyDg-pYI&s"
                alt=""
              />

              <p>UPI</p>
            </div>
            <p className={styles.paymentMethod}>
              {" "}
              <span>
                <BsBank2 />
              </span>
              Net Banking{" "}
            </p>
            <p className={styles.paymentMethod}>
              <span>
                <HiOutlineCurrencyRupee />
              </span>
              Cash On Delivery{" "}
            </p>
          </div>
          <div className={styles.inputTag}>
            <Input
              type={"number"}
              variant="flushed"
              placeholder="Card Number"
            />
            <div className={styles.expiryDetails}>
              <Input variant="flushed" placeholder="Valid Through (MM/YY)" />
              <Input variant="flushed" placeholder="CVV" />
            </div>
            <Input variant="flushed" placeholder="Name On Card" />
            <Checkbox
              className={styles.Checkbox}
              size="md"
              colorScheme="green"
              defaultChecked
            >
              Save card details for later
            </Checkbox>
            <p>
              This transaction you make is totally secure. We don't save your
              CVV number.
            </p>
            <Button onClick={handlePayment} width={"100%"}>
              ₹{data.totalPrice}Pay
            </Button>
          </div>
        </div>

        
        <div className={styles.right_container}>
          <p className={styles.summary}>PRICE SUMMARY</p>
          <div className={styles.priceDetails}>
            <p>Total MRP (Incl. of taxes) </p>
            <p>₹{data.totalMrp}</p>
          </div>
          <div className={styles.priceDetails}>
            <p>Shipping Charges</p>
            <p>FREE</p>
          </div>
          <div className={styles.priceDetails}>
            <p>Discount on MRP </p>
            <p>₹{data.totalMrp - data.totalPrice}</p>
          </div>
          <hr />
          <div className={styles.finalAmount}>
            <p>Final amount</p>
            <p>₹{data.totalPrice}</p>
          </div>
          <div className={styles.image}>
            <img
              src="https://images.bewakoof.com/web/cart-badge-trust.svg"
              alt=""
            />
            <img
              src="https://images.bewakoof.com/web/frame-easy-trust.svg"
              alt=""
            />
            <img
              src="https://images.bewakoof.com/web/Globe-gray-badge.svg"
              alt=""
            />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Payment;
