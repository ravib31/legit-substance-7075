import React from 'react';
import { Link } from 'react-router-dom';
// import  {Slider}  from ".Slider";
import styles from './Home.module.css';
import { Slider } from './Slider';
import { getTokenFromCookies } from '../../utils/token.utils';
import { useDispatch } from 'react-redux';
import { getTotalCartProduct } from '../../Redux/Cart/action';


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
  const dispatch=useDispatch();
  const token=getTokenFromCookies();

  if(token){
    dispatch(getTotalCartProduct())
  }

  return (
  <div className={styles.container}>
      <div>
       
      <div className={styles.mainProducts}>
        <div id="category1">
          <Link to="/men" id="ca1">MEN</Link>
        </div>
        <div id="category1">
          <Link to="/women" id="ca1">WOMEN</Link>
        </div>
       
    </div> 
      </div>
  <Slider/>

  <div className={styles.mid}>

    <img src="https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-men-1654149139.jpg" alt='befour' />

  </div>

  <div className={styles.small}>
    <div>
    <img src="https://images.bewakoof.com/uploads/grid/app/WhatsApp-Video-2022-01-29-at-14-06-03-1643446784.gif" alt='befour' />
    <img src="https://images.bewakoof.com/uploads/grid/app/CUSTOMISE-thumbnail-1644818150.jpg" alt='befour' />
    <img src="https://images.bewakoof.com/uploads/grid/app/last-sizes-left-1639915515.jpg" alt='befour' />
    <img src="https://images.bewakoof.com/uploads/grid/app/last-sizes-left-1639915515.jpg" alt='befour' />
    <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-new-arrival-1637307130.jpg" alt='befour' />
    <img src="https://images.bewakoof.com/uploads/grid/app/merch-store-thumbnail-1650381435.jpg" alt='befour' />
    <img src="https://images.bewakoof.com/uploads/grid/app/bwkf-offer-thumbnail-1651735001.jpg" alt='befour' />
  </div>
  </div>

  <div className={styles.sale}>
    <img
      style={{ width: "100%" }}
      src="https://images.bewakoof.com/uploads/grid/app/flash-sale-banner-desktop-backpacks-sliders-common-1655264877.gif"
      alt='sale'
    />
  </div>
  <div>
    <img
      style={{ width: "100%" }}
      src="https://images.bewakoof.com/uploads/grid/app/thin-banner-299-1440x150-1655286102.gif"
      alt='gift-card'
    />
  </div>
  <h2 className={styles.popular}>POPULAR CATEGORIES</h2>
  <div className={styles.categories}>
    {images.map((e) => (          
        <div key={e.img} className={styles.categories_div}>
          <img src={e.img} alt={e.title} />
        </div>
    ))}
  </div>
  <h2 className={styles.discount}>OUR BEST PICKS</h2>
  <div className={styles.discount_offer}>
    <img src='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-COMBO-1686548129.gif' alt='double-fun' />
    <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-ClassicDenims-tagline-1686547603.jpg" alt=''/>
    <img src='https://images.bewakoof.com/uploads/grid/app/custom-new-banner-1686734029.jpg' alt='customs'/>
    <img src="https://images.bewakoof.com/uploads/grid/app/plus-size-common-1683622044.jpg" alt=''/>
  </div>
  <div className={styles.designs}>
    <img src="https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif" alt=''/>
  </div>
 
</div>
  );
};


