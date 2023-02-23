import React from 'react';
import { Link } from 'react-router-dom';
import "./MenPageCard.css";

const MenPageCard = ({product}) => {
  return (
    <div className='product-box'>
        <div className='product-image'>
            <img src="https://images.bewakoof.com/t640/men-s-black-the-panda-way-oversize-fit-full-sleeve-t-shirt-580633-1676876417-1.jpg" alt="tshirt" />
        </div>
        <div className='product-info'>
          <h2>Bewakoof®</h2>
          <p>men's Pink All Over Printed Pyjama</p>
          <div>
            <p>₹619</p>
            <p>₹1499</p>
          </div>
          <p>₹459 For TriBe Members</p>
        </div>
    </div>
  )
}

export default MenPageCard;