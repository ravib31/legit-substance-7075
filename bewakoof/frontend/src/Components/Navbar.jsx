import React from 'react'
import "./Navbar.css";
import { useNavigate,Link } from 'react-router-dom';
import {AiOutlineMobile, AiOutlineHeart} from "react-icons/ai"
import {BsSearch, BsBag} from "react-icons/bs"
import {HiMenuAlt1} from "react-icons/hi";
import {  useDisclosure } from "@chakra-ui/react";
const Navbar = () => {
  const navigate = useNavigate();
    const { isOpen, onToggle, onClose } = useDisclosure();
    
    const onMenPage = () => {
        navigate('/men')
    }
    const onWomenPage = () => {
      navigate('/women')
  } 

  const onLoginPage = () => {
    navigate('/user/login')
}

const onCartPage = () => {
  navigate('/cart')
}

const onWishlistPage = () => {
  navigate('/wishlist')
}

const onHomePage=()=>{
  navigate("/")
}


 
 
    return (
    <>
    <nav >
    <div id="nav-top">
      <div id='top-sec'>
       <div id='top-1'>
        <ul>
            <li>Offers</li>
            <li>Fanbook</li>
            <li> <AiOutlineMobile/> Download App</li>
            <li>TriBe Membership</li>
        </ul>
       </div>
       <div id='top-2'>
       <ul>
        <li>Contact Us</li>
        <li>Track Order</li>
       </ul>
       </div>   
      </div>
      </div>
      <div id='nav-bottom'>
        <div id='nav-bottom-in'>
          <div id='nav-bottom-in-1'>
            <div id='logo' onClick={onHomePage}>
                <img src="https://www.linkpicture.com/q/hrth.png" alt="befour.com" />
            </div>
          </div>
          <div id='nav-bottom-in-2'>
            <ul>
                <li onClick={onMenPage}>MEN</li>
                <li onClick={onWomenPage}>WOMEN</li>
            </ul>
          </div>
          <div id='nav-bottom-in-3'>
            <div id='search'>
                 <p>
                    <BsSearch /> 
                    </p>
                <input type="text" placeholder='     Search by Product,category or collection' />
            </div>
            <div id='func'>
                <ul>
                    <li onClick={onLoginPage}>Login</li>
                    <li onClick={onWishlistPage }><AiOutlineHeart /></li>
                    <li onClick={onCartPage}><BsBag /></li>
                    <li><img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="avatar" /></li>
                </ul>
            </div>
          </div>
          <div id='menu-btn'>
            <HiMenuAlt1 onClick={onToggle} />
          </div>
          {
          isOpen && (
          <div id='sideMenu'>
            <ul id='sideList'>
              <li><Link to="/men">MEN</Link></li>
              <li><Link to="/women">WOMEN</Link></li>
              <li><Link to="/wishlist">WISHLIST</Link></li>
              <li><Link to="/cart">CART</Link></li>
              <li><Link to="/profile">PROFILE</Link></li>
              <li><Link to="/user/login">LOGIN</Link></li>
            </ul>
          </div>
          )}
        </div>
      </div>
      </nav>
    </>
  )
}

export default Navbar
