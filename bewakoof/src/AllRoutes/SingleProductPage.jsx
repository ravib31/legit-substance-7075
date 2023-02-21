import React from 'react'
import styles from './SingleProductPage.module.css';
const SingleProductPage = () => {
  return (
    <>
    <div className={styles.product_page_container}>
        <div>
            <img src="https://images.bewakoof.com/t1080/men-s-blue-the-panda-way-oversized-t-shirt-580637-1676876264-1.jpg" alt="" />
        </div>
        <div className={styles.product_page_right}>
            <p>Bewakoof@</p>
            <p>Men's Blue The Panda Way Graphic Printed Oversized T-shirt</p>
            <div><b>400Rs</b><span>999Rs</span><span>55% OFF</span></div>
            <p>inclusive of all taxes</p>
        </div>
    </div>
    </>
  )
}

export default SingleProductPage