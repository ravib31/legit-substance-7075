import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.css';


export const Navbar = () => {
  return (
   <>
     <div id="nav1" >
        <Link to='/' id="toplink" >Offer</Link>
        <Link to='/' id="toplink">Fanbook</Link>
        <Link to='/' id="toplink">Download App</Link>
        <Link to='/' id="toplink">TriBe Membership</Link>
    </div>

    <div id="cont">
      <div >
        <Link to="/HomePage">
          <img id="logo"
            src="https://images.bewakoof.com/web/ic-desktop-pride-bwkf-logo.svg"
            alt="Company_Logo"
          />
        </Link>
      </div>

      <div id="products">
        <div class="category">
          <Link to="/men" id="ca">MEN</Link>
        </div>
        <div class="category">
          <Link to="/women" id="ca">WOMEN</Link>
        </div>
        <div class="category">
          <Link to="/" id="ca">MOBILE COVERS</Link>
        </div>
      </div>

      <div id="right-side">
        <div>
         <input placeholder="Search by product, category and collection" id="input"/>
        </div>
        <div>
          <Link to="/login" id="ca">Login</Link>
        </div>
        <div>
          <Link to="/wishlist">
            <i class="fa fa-heart-o" aria-hidden="true" id="icon"></i>
          </Link>
        </div>
         <div id="cart-icon">
          <Link to="/">
            <i class="fa fa-shopping-bag" aria-hidden="true" id="icon"></i> 
          </Link>
        </div>
      </div>
      
    </div>
    
    <div id="mainProducts">
        <div id="category1">
          <Link to="/" id="ca1">Men</Link>
        </div>
        <div id="category1">
          <Link to="/" id="ca1">Women</Link>
        </div>
        <div id="category1">
          <Link to="/" id="ca1">Accessories</Link>
        </div>
    </div>
    </>
  )
}

// https://images.bewakoof.com/web/ic-desktop-pride-bwkf-logo.svg