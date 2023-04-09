import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { BsBag , BsHeart} from 'react-icons/bs';
import './Navbar.css';
import {HiMenuAlt1} from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

export const Navbar = () => {
  const username = localStorage.getItem("name") || null
   return (
   <>
   <div className='NavBox'>
    <div className='Navbar-box'>
      <div className='top-section'>
     <div className="nav1" >
        <Link to='/' id="toplink"><p>Offer</p></Link>
        <Link to='/' id="toplink"><p>Fanbook</p></Link>
        <Link to='/' id="toplink"><p>Download App</p></Link>
        <Link to='/' id="toplink"><p>TriBe Membership</p></Link>
    </div>
    </div>
    <div className="cont">
      <div className='logo-list' >
      <div >
      <input type="checkbox" id='click' />
      <label for="click" className='menu-btn'><HiMenuAlt1 /></label>
        <Link to="/">
          <img id="logo"
            src="https://www.linkpicture.com/q/BeFour-2.png"
            alt="Company_Logo"
          />
        </Link>
      </div>

      <div className="products">
        {/* <div className="category">
          <Link to="/men" id="ca"><p> MEN</p></Link>
        </div>
        <div class="category">
          <Link to="/women" id="ca"><p>WOMEN</p> </Link>
        </div>
        <div class="category">
          <Link to="/" id="ca"><p>MOBILE COVERS</p></Link>
        </div> */}
        <ul className='upper'>
          <li><Link to="/men">MEN</Link></li>
          <li><Link to="/women">WOMEN</Link></li>
          <li><Link to="/">MOBILE COVERS</Link></li>
        </ul>
      </div>
      </div>
      <div className="right-side">
        <div className='input-box'>
         <input placeholder="Search by product, category and collection" id="input"/>
        </div>
        <div  className='icon-box'>
        <div id="icon">
        <Link to="/wishlist">
         <BsHeart/>
        </Link>
        </div>
        <div id="cart-icon">
          <Link to="/cart">
          <BsBag className='bag-icon'/> 
          </Link>
          
        </div>
        <div>
          <Link to="/login" id="ca"><p className='login' >{username ? username : <CgProfile />}</p></Link>
        </div>
        {/* <div className='country-flag' >
          <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="Country-flag" />
        </div> */}
        </div>
      </div>
   </div>
 
  
   
    </div>
    </div>
    </>
  )
}

