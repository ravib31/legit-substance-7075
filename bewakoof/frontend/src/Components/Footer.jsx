import React from 'react'
import "./Footer.css";
import {AiFillFacebook, AiOutlineTwitter,AiFillApple} from "react-icons/ai";
import {FaInstagram,FaSnapchatGhost} from "react-icons/fa";
import {ImPinterest} from "react-icons/im";
import {GiReturnArrow} from "react-icons/gi";
import {HiOutlineCurrencyRupee} from "react-icons/hi";
import {LOGO_URL} from "../utils/constant.js"
const Footer = () => {
  return (
    <div className='Footer'>
        <div className='footer-box'>
         <div className='blank'></div>
         <div className='footer-logo'>
            <img src={LOGO_URL} alt="befour logo" />
         </div>
         <div className='list-box'>
            <div className='customer-box'>
                <h3 className='customer-heading'>CUSTOMER SERVICE</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>Track Order</li>
                    <li>Return Order</li>
                    <li>Cancel Order</li>
                </ul>
            </div>
            <div className='company-box'>
                <h3 className='company-heading' >COMPANY</h3>
                <ul>
                    <li>About Us</li>
                    <li>We're Hiring</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='connect-box'>
                <h3 className='connect-heading' >CONNECT WITH US</h3>
                <ul>
                    <li> <AiFillFacebook /> <span> 4.7 People like this</span></li>
                    <li> <FaInstagram /> <span>1M Followers</span> </li>
                    <li className='social-link'><AiOutlineTwitter className='links' /> <ImPinterest className='links' /> 
                      <FaSnapchatGhost className='links' /> <AiFillApple className='links' />
                    </li>
                </ul>

            </div>
            <div className='keep-upto'>
                <h3 className='keep-heading'>KEEP UP TO DATE</h3>
                <input className='form-control' type="text" placeholder='Enter Email ID' />
                <input type="button" value="SUBSCRIBE" className='subscribe-button' />
            </div>
         </div>
         <div className='last-box'>
            <div className='last-box1' >
                <ul>
                    <li>
                <GiReturnArrow /> 15 Days return policy*        
                    </li>
                    <li>
                 <HiOutlineCurrencyRupee /> Cash on Delivery       
                    </li>
                </ul>
            </div>
            <div className='last-box2' >
                <h3 className='last-box2-heading' >DOWNLOAD THE APP</h3>
                 <ul>
                    <li>
                    <img className='store-image' src="https://images.bewakoof.com/web/app_android_v1.png" alt="Google-Play-Store" /> 
                    <img className='store-image' src="https://images.bewakoof.com/web/app_ios_v1.png" alt="Apple-Store" />
                    </li>
                   
                 </ul>
            </div>
            <div className='last-box3' >
                <h3 className='last-box3-heading'>100% SECURE PAYMENT</h3>
                <img src="https://images.bewakoof.com/web/secure-payments-image.png" alt="payment" />
            </div>
         </div>
         <hr />
        </div>
       
    </div>
  )
}

export default Footer