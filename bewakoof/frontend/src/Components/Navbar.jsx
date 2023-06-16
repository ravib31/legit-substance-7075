import React from 'react'
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';
import {AiOutlineMobile, AiOutlineHeart} from "react-icons/ai"
import {BsSearch, BsBag} from "react-icons/bs"
import {HiMenuAlt1} from "react-icons/hi";
import { Link, useDisclosure } from "@chakra-ui/react";
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


 
 
    return (
    <>
    <nav>
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
            <div id='logo'>
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
              <li><Link>MEN</Link></li>
              <li><Link>WOMEN</Link></li>
              <li><Link>WISHLIST</Link></li>
              <li><Link>CART</Link></li>
              <li><Link>PROFILE</Link></li>
              <li><Link>LOGIN</Link></li>
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
