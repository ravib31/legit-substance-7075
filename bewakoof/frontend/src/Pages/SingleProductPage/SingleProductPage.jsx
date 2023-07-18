import React, { useEffect, useState } from "react";
import styles from "./SingleProductPage.module.css";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import Size from "./Size";
import Description from "./Description";
import { Input } from "@chakra-ui/input";
import { useDispatch, useSelector } from "react-redux";
import { addToCartFun, getFromCartFun, postCartProduct } from "../../Redux/Cart/action";
import { getSingleProduct } from "../../Redux/Product/action";
import { useNavigate } from "react-router-dom";
import { Alert } from "@chakra-ui/alert";
import { TiTick } from "react-icons/ti";
import axios from "axios";
import InitialLoader from "../../Layout/InitialLoader";
import useCustomToast from "../../Layout/useCustomToast";
import Loader from "../../Layout/Loader";
import SingleProductLoader from "../../Layout/SingleProductLoader";

const SingleProductPage = () => {
  const [chestsize, setchestSize] = useState();
  const [fronlength, setFronLength] = useState();
  const [sleevelength, setSleevelength] = useState();
  const [sizeClick, setClickSize] = useState(false);

  const allsizes = ["S", "M", "L", "XL", "2XL", "3XL"];
  const navigate = useNavigate();
  const showToast = useCustomToast();
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  console.log(id);
  const { product, isLoading } = useSelector(
    (store) => store.SingleProductPageReducer
  );
  const { cartData } = useSelector((store) => store.cartReducer);
  const cartStatus = localStorage.getItem("cartStatus");
  const [buttonText, setButtonText] = useState(
    cartStatus ? "Go to Cart" : "Add to Cart"
  ); // State for button text

  
  const { title, rating, actualPrice, fit, discountedPrice, image } = product;
console.log("product",product?.discountedPrice);
  const [mainImage, setMainImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  

  useEffect(() => {
    if (image && image.length > 0) {
      setMainImage(image[0]);
    }
  }, [image]);

  React.useEffect(() => {
    dispatch(getSingleProduct(id));
    dispatch(getFromCartFun());
  }, [dispatch, id,]);

  useEffect(()=>{
    checkIfProductInCart();
  },[cartData,id])

  const checkIfProductInCart = () => {
    const isInCart = cartData.some(
      (item) => String(item.checkId) === String(id)
    );
   if(isInCart){
    setButtonText("Go to Cart")
   }
    return isInCart;
  };

  

  useEffect(() => {}, [cartData]);

  const handleClick = (el, i) => {
    setMainImage(el);
  };
  const handleSizeDetails = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    console.log("selectedSize", selectedSize);
  }, [selectedSize]);

  let payload = {
    checkId: product._id,
    type: product.type,
    image: product?.image?.[0],
    title: product.title,
    category: product.category,
    actualPrice: product.actualPrice,
    loyaltyPrice: product.loyaltyPrice,
    discountedPrice: product.discountedPrice,
    fit: product.fit,
    rating: product.rating,
    userID: product.userID,
    size: product?.size,
    selectedSize: selectedSize,
  };

  // console.log(payload);

  const handleAddToCart = () => {
    const isInCart = checkIfProductInCart();
    console.log("isInCart",isInCart);
    if (isInCart || buttonText === "Go to Cart") {
      // Redirect user to cart page
      navigate("/cart");
      return;
    } else if(!selectedSize){
      showToast("Please Select Size", "error", 3000);
      return;
    }
    else {
      dispatch(addToCartFun(payload));
      showToast("Added to the cart", "success", 3000);
      setButtonText("Go to Cart"); // Update the button text
      // localStorage.setItem("cartStatus", "added");

      // Check if the product was removed from the cart
      if (cartStatus === "removed") {
        setButtonText("Add to Cart");
        localStorage.removeItem("cartStatus");
      }
    }
  };

  if (isLoading) {
    return <SingleProductLoader />;
  }
  console.log(sizeClick);
  return (
    <>
      <div className={styles.product_page_container}>
        {/* sidebar different-diffrent images */}
        <div className={styles.productPage_left}>
          <div className={styles.allimages}>
            {image?.map((el, i) => (
              <img
                key={i + 1}
                src={el}
                alt="img"
                onClick={() => handleClick(el, i)}
              />
            ))}
          </div>
          <div>
            {mainImage && (
              <img className={styles.mainImage} src={mainImage} alt="Img" />
            )}
          </div>
        </div>
        {/* product description */}
        <div className={styles.product_page_right}>
          <h3 className={styles.companyTag}>Bewakoof@</h3>
          <p className={styles.title}>{title}</p>
          <p className={styles.rating}>
            {rating}{" "}
            <span>
              <AiFillStar color="yellow" />
            </span>
          </p>
          <div className={styles.priceDetails}>
            <b> ₹{discountedPrice}</b>
            <span> ₹{actualPrice}</span>
            <span>
              {Math.floor((100 / actualPrice) * (actualPrice - discountedPrice))}%
              OFF
            </span>
          </div>
          <p>inclusive of all taxes</p>
          <div className={styles.overSize}>
            <p>{fit}</p>
            <p>DESIGN OF THE WEEK</p>
          </div>
          <hr />
          <p className={styles.membership}>
            TriBe members get an extra discount of ₹60 and FREE shipping.
            <Link style={{ color: "green" }}>Learn more</Link>
          </p>
          <hr />

          <div className={styles.sizeText}>
            <p>SELECT SIZE</p>
            <p>Size Guide</p>
          </div>
          <div className={`${sizeClick ? styles.allsizeNot : styles.allsizes}`}>
            {/* size code here */}

            {/* {allsizes.map((el, i) => {
              return (
                <Size
                  key={i + 1}
                  handleSizeDetails={handleSizeDetails}
                  allsize={el}
                  selectedSize={selectedSize}
                />
              );
            })} */}

            <Size
              handleSizeDetails={handleSizeDetails}
              allsize="S"
              selectedSize={selectedSize}
            />
            <Size
              handleSizeDetails={handleSizeDetails}
              allsize="M"
              selectedSize={selectedSize}
            />
            <Size
              handleSizeDetails={handleSizeDetails}
              allsize="L"
              selectedSize={selectedSize}
            />
            <Size
              handleSizeDetails={handleSizeDetails}
              allsize="XL"
              selectedSize={selectedSize}
            />
            <Size
              handleSizeDetails={handleSizeDetails}
              allsize="2XL"
              selectedSize={selectedSize}
            />
            <Size
              handleSizeDetails={handleSizeDetails}
              allsize="3XL"
              selectedSize={selectedSize}
            />
          </div>
          {/* <div>
            {sizeClick && (
              <p className={styles.sizeDetails}>
                <span>Garment:</span>Chest (in inch):<span>{chestsize}</span> |
                Front Length (in inch):<span>{fronlength}</span> | Sleeve Length
                (in Inch):<span>{sleevelength}</span>
              </p>
            )}
          </div> */}
          <div className={styles.button}>
            { <Button onClick={handleAddToCart}>
              <span style={{ marginRight: "10px" }}>
                <HiOutlineShoppingBag size={"20px"} />
              </span>
              {buttonText}
            </Button>}
            <Button>
              <span style={{ marginRight: "10px" }}>
                <CiHeart size={"20px"} />
              </span>
              WISHLIST{" "}
            </Button>
          </div>
          <hr />
          <div>
            <Description title={"SAVE EXTRA WITH 1 OFFER"}>
              Whistles! Get extra 10% cashback on all prepaid orders above
              Rs.499. Use Code - PREP10.
              <span>Tap to Copy</span>
            </Description>
          </div>
          <hr />
          <div>
            <Description title={"PRODUCT DESCRIPTION"}>
              Tune into 'power saving mode' and channel your panda-energy with
              The Panda Way Men's Oversized Full Sleeve T-shirt. Style this
              black t-shirt with denim, a varsity jacket and sneakers for a
              party look. Country of Origin - India Manufactured By - Bewakoof
              Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road,
              Opposite All Saints High School, Amne, Bhiwandi,Thane, Maharashtra
              421302 Packed By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub
              #A5, Bmc Pipeline Road, Opposite All Saints High School, Amne,
              Bhiwandi,Thane, Maharashtra 421302 Commodity - Men's T-Shirt
              Product Specifications Oversized fit - Super Loose On Body Thoda
              Hawa Aane De Single Jersey, 100% Cotton Classic, lightweight
              jersey fabric comprising 100% cotton.
            </Description>
          </div>
          <hr />
          <div>
            <Description title="15 DAY RETURNS & EXCHANGE">
              Easy returns upto 15 days of delivery. Exchange available on
              select pincodes
            </Description>
          </div>
          <hr />
          <div>
            <Description title="DELIVERY DETAILS">
              <Input
                type="text"
                placeholder="Enter Pincode/Postal Code"
              ></Input>
            </Description>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
