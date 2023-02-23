import React, { useState } from "react";
import styles from "./SingleProductPage.module.css";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Size from "../../Components/Pages/SingleProductPage/Size";
const SingleProductPage = () => {
  const [productImages, setPorductImages] = useState([
    "https://images.bewakoof.com/t1080/men-s-black-solid-oversize-jogger-with-zipper-561660-1676899163-1.jpg",
    "https://images.bewakoof.com/t1080/men-s-black-solid-oversize-jogger-with-zipper-561660-1676899168-2.jpg",
    "https://images.bewakoof.com/t1080/men-s-black-solid-oversize-jogger-with-zipper-561660-1676899178-4.jpg",
    "https://images.bewakoof.com/t1080/men-s-black-solid-oversize-jogger-with-zipper-561660-1676899183-5.jpg",
  ]);

//   const [allsizes,setAllsizes]=useState([
//     {size:"S",chest:"43.0",}
//   ]);

  return (
    <>
      <div className={styles.product_page_container}>
        {/* sidebar different-diffrent images */}
        <div className={styles.allimages}>
          {productImages.map((el) => {
            return <img src={el} alt="" />;
          })}
        </div>
        <div>
          <img
            className={styles.mainImage}
            src="https://images.bewakoof.com/t1080/men-s-black-solid-oversize-jogger-with-zipper-561660-1676899163-1.jpg"
            alt=""
          />
        </div>
        {/* product description */}
        <div className={styles.product_page_right}>
          <h3 className={styles.companyTag}>Bewakoof@</h3>
          <p className={styles.title}>
            Men's Blue The Panda Way Graphic Printed Oversized T-shirt
          </p>
          <p className={styles.rating}>
            4.5{" "}
            <span>
              <AiFillStar color="yellow" />
            </span>
          </p>
          <div className={styles.priceDetails}>
            <b> ₹400</b>
            <span> ₹999</span>
            <span>55% OFF</span>
          </div>
          <p>inclusive of all taxes</p>
          <div className={styles.overSize}>
            <p>OVERSIZED FIT</p>
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
          <div>
            {/* size code here */}
            <Size>4</Size>
          </div>
          <div className={styles.button}>
            <Button>ADD TO BAG</Button>
            <Button>WISHLIST</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
