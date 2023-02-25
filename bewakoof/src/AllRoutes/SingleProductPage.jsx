import React, { useEffect, useState } from "react";
import styles from "./SingleProductPage.module.css";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import { Button } from "@chakra-ui/button";

import Size from "../Components/Pages/SingleProductPage/Size";
import Description from "../Components/Pages/SingleProductPage/Description";
import { Input } from "@chakra-ui/input";
import { useDispatch } from "react-redux";
import { getSingleProduct, postCartProduct } from "../Redux/Cart/action";
const SingleProductPage = () => {
  const [productImages, setPorductImages] = useState([]);

  const [mainImage, setMainImage] = useState();
  const [actualPrice,setActualPrice]=useState()
  const [title,setTitle]=useState()
  const [rating,setRating]=useState()
  const [fit,setFit]=useState()
  const [discountPrice,seDiscountPrice]=useState();
  const [chestsize, setchestSize] = useState();
  const [fronlength, setFronLength] = useState();
  const [sleevelength, setSleevelength] = useState();
  const [sizeClick, setClickSize] = useState(false);

  const [allsizes, setAllsizes] = useState([
    { size: "S", chest: "43.0", frontLength: "27.25", SleevLength: "24.0" },
    { size: "M", chest: "45.0", frontLength: "28.00", SleevLength: "24.25" },
    { size: "L", chest: "47.0", frontLength: "28.75", SleevLength: "24.5" },
    { size: "XL", chest: "49.0", frontLength: "29.5", SleevLength: "24.75" },
    { size: "2XL", chest: "51.0", frontLength: "30.25", SleevLength: "25.0" },
    { size: "3XL", chest: "53.0", frontLength: "31.0", SleevLength: "25.20" },
  ]);

  const dispatch=useDispatch()

  const params=useParams();
  const {id}=params;
  //console.log(id);

  useEffect(()=>{
    dispatch(getSingleProduct(id)).then((res)=>{
      //console.log(res.data);
      setPorductImages(res.data.image)
      setMainImage(res.data.image[0])
      setTitle(res.data.title)
      setFit(res.data.fit)
      setRating(res.data.rating)
       setActualPrice(res.data.actualPrice)
       seDiscountPrice(res.data.discountedPrice)
    })
  },[])



  const handleClick = (el, i) => {
    setMainImage(el);
  };
  const handleSizeDetails = (el) => {
    setchestSize(el.chest);
    setFronLength(el.frontLength);
    setSleevelength(el.SleevLength);
    setClickSize(true);
  };
  

  const handleAddToCart=()=>{
    dispatch(getSingleProduct(id)).then((res)=>{
      console.log(res.data);
      dispatch(postCartProduct(res.data))
    })
    
  }



  return (
    <>
      <div className={styles.product_page_container}>
        {/* sidebar different-diffrent images */}
       <div className={styles.productPage_left}>
       <div className={styles.allimages}>
          {productImages.map((el, i) => {
            return (
              <img
                key={i + 1}
                src={el}
                alt="img"
                onClick={() => handleClick(el, i)}
              />
            );
          })}
        </div>
        <div>
          <img className={styles.mainImage} src={mainImage} alt="" />
        </div>
       </div>
        {/* product description */}
        <div className={styles.product_page_right}>
          <h3 className={styles.companyTag}>Bewakoof@</h3>
          <p className={styles.title}>
           {title}
          </p>
          <p className={styles.rating}>
            {rating}{" "}
            <span>
              <AiFillStar color="yellow" />
            </span>
          </p>
          <div className={styles.priceDetails}>
            <b> {actualPrice}</b>
            <span> ₹{discountPrice}</span>
            <span>55% OFF</span>
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

            {allsizes.map((el, i) => {
              return (
                <Size
                  key={i + 1}
                  handleSizeDetails={() => handleSizeDetails(el)}
                >
                  {el.size}
                </Size>
              );
            })}
          </div>
          <div>
            {sizeClick && (
              <p className={styles.sizeDetails}>
                <span>Garment:</span>Chest (in inch):<span>{chestsize}</span> |
                Front Length (in inch):<span>{fronlength}</span> | Sleeve Length
                (in Inch):<span>{sleevelength}</span>
              </p>
            )}
          </div>
          <div className={styles.button}>
            <Button onClick={handleAddToCart}>
              <span style={{ marginRight: "10px" }}>
                <HiOutlineShoppingBag size={"20px"} />
              </span>
              ADD TO BAG{" "}
            </Button>
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
            Easy returns upto 15 days of delivery. Exchange available on select pincodes
            </Description>
          </div>
          <hr />
          <div>
            <Description title="DELIVERY DETAILS">
                <Input type="text" placeholder="Enter Pincode/Postal Code">
                    
                </Input>
            </Description>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
