import React from 'react';
// import  {Slider}  from ".Slider";
import styles from './Home.module.css';
import { Slider } from './Slider';


const images = [
  {
    img: "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-printed-tshirt-1654498507.png",
    title: "Lip Gloss",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1g-1654498502.png",
    title: "Lip Balm",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1h-1654498503.png",
    title: "Mascara",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1j-1654498503.png",
    title: "Foundation",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1k-1654498503.png",
    title: "Sindoor",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1l-1654498504.png",
    title: "Nail Enamel",
  },
  
];

export const Home = () => {
  return (
  <div className={styles.container}>
      
  <Slider/>

  <div className={styles.mid}>

    <img src="https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-men-1654149139.jpg" />

  </div>

  <div className={styles.small}>
    <img src="https://images.bewakoof.com/uploads/grid/app/WhatsApp-Video-2022-01-29-at-14-06-03-1643446784.gif" />
    <img src="https://images.bewakoof.com/uploads/grid/app/CUSTOMISE-thumbnail-1644818150.jpg" />
    <img src="https://images.bewakoof.com/uploads/grid/app/last-sizes-left-1639915515.jpg" />
    <img src="https://images.bewakoof.com/uploads/grid/app/last-sizes-left-1639915515.jpg" />
    <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-new-arrival-1637307130.jpg" />
    <img src="https://images.bewakoof.com/uploads/grid/app/merch-store-thumbnail-1650381435.jpg" />
    <img src="https://images.bewakoof.com/uploads/grid/app/bwkf-offer-thumbnail-1651735001.jpg" />
  </div>

  <div>
    <img
      style={{ width: "100%" }}
      src="https://images.bewakoof.com/uploads/grid/app/flash-sale-banner-desktop-backpacks-sliders-common-1655264877.gif"
    />
  </div>
  <div>
    <img
      style={{ width: "100%" }}
      src="https://images.bewakoof.com/uploads/grid/app/thin-banner-299-1440x150-1655286102.gif"
    />
  </div>
  <h2>POPULAR CATEGORIES</h2>
  <div className={styles.popular}>
    {images.map((e) => (          
        <div key={e.img}>
          <img src={e.img} alt="" />
        </div>
    ))}
  </div>
  <h2>DISCOUNT PE DISCOUNT</h2>
  <div className={styles.popular}>
    <img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-buy2get1-banner-refreshment-1654174580.jpg"/>
    <img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-play-banner-refreshment-1654174646.jpg"/>
  </div>
  <div>
    <img src="https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif"/>
  </div>
 
</div>
  );
};


