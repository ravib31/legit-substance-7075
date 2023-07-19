import React from 'react'
import styles from "./SingleItem.module.css"
const OrderSingleItem = ({image="https://4.imimg.com/data4/JT/XP/MY-27510575/mens-casual-shirts-500x500.jpg",title,size,OrderStatus,DeliveryDate}) => {
  return (
    <div className={styles.order_box}>
        <div className={styles.order_box_image}>
            <img src={image} alt="Shirt" />
        </div> 
        <div className={styles.order_box_text}>
             <p className={styles.title}>{"Men's Black Sukuna X Graphic Printed Oversized T-shirt"}</p>
             <p className={styles.size}>Size:{size}</p>
             <div className={styles.date}>
                  <p>{"05-20-44"}</p>
             </div>
             <div className={styles.orderStatus}>
              <p>{"Preparing Your Order"}</p>
             </div>
        </div>
        <div className={styles.orderInfo}>
          <button>Order Info</button>
        </div>
    </div>
  )
}

export default OrderSingleItem