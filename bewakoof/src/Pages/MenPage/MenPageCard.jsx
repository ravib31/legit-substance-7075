import React from "react";
import { Link } from "react-router-dom";
import "./MenPageCard.css";

const MenPageCard = ({ menproduct }) => {
  return (
    <div className="product-box">
      <div className="product-image">
        <Link to={`/men/${menproduct.id}`} >
        <img src={menproduct.image[0]} alt={menproduct.title} />
        </Link>
      </div>
      <div className="product-info">
        <h2 className="Product-brand">Bewakoof®</h2>
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
  );
};

export default MenPageCard;
