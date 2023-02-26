import React from "react";
import { Link } from "react-router-dom";
import "./MenPageCard.css";

const MenPageCard = ({ menproduct }) => {
  return (
    <>
     <Link to={`/men/${menproduct.id}`} >
    <div className="product-box">
      <div className="product-image">
        <Link to={`/men/${menproduct.id}`} >
        <img src={menproduct.image} alt={menproduct.title} />
        </Link>
      </div>
      <div className="product-info">
        <h3 className="Product-brand">Bewakoof®</h3>
        <p className="product-title">{menproduct.title}</p>
        <div className="price-box">
          <p className="discounted-price"> ₹{menproduct.discountedPrice}</p>
          <p className="regular-price">{menproduct.actualPrice}</p>
        </div>
        <div className="tribe-sec">
          <p className="tribe-price">
            {menproduct.loyaltyPrice} For TriBe Members
          </p>
        </div>
      </div>
    </div>
    </Link>
    </>
  );
};

export default MenPageCard;
