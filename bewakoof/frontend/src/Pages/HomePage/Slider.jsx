import React, { useEffect } from "react";
import "./Slider.css";






export const Slider = () => {
  useEffect(() => {
    let wrapp = document.getElementById("wrapper");
    setInterval(() => {
      if (wrapp.scrollLeft >= 1100) {
        wrapp.scrollLeft = 0;
      } else {
        wrapp.scrollLeft += 300;
      }
    }, 5000);
  }, []);

  const images = [
    {
      img: "https://images.bewakoof.com/uploads/grid/app/OOFsale-Homepage-Static-1X1-LiveNow-common-extend1-1655284692.gif",
    
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Oversized-Tshirt-Men-1654684413.jpg",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-MAY-EasyBreezyOversizedTees-common-1686725700.jpg",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-shoes-1651235308.gif",
      title: "Sindoor",
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/1X1-2023-WithUSP--lazy-summer-pyjamas-1686636596.jpg",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Buy-2-Men-1654684412.jpg",
      
    },
    
  ];
  
  return (
    <div id="wrapper">
      {images.map((e) => (
        <div key={e.img} id="Idiv">
          <div >
            <img src={e.img} alt="befour" />
          </div>
        </div>
      ))}
    </div>
  );
};
