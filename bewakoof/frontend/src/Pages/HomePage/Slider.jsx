import React, { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  gap: 1px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin-top:30px;

  &::-webkit-scrollbar{
      display: none;
  }
`;

const Idiv = styled.div`
  width: 500px;
  height: 500px;
  gap: 10px;
  position: relative;

  & > div {
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid #eaeaea;
    gap: 10px;

    & img {
      max-width: 490px;
      max-height: 500px;
     
    }
  }
`;


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
      img: "https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-shoes-1651235308.gif",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/b1g1-1x1-m-1655216421.jpg",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Oversized-Tshirt-Men-1654684413.jpg",
      title: "Sindoor",
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Printed-Tshirts-Men-2-1654684414.jpg",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Buy-2-Men-1654684412.jpg",
      
    },
    
  ];
  
  return (
    <Wrapper id="wrapper">
      {images.map((e) => (
        <Idiv key={e.img}>
          <div >
            <img src={e.img} alt="" />
          </div>
        </Idiv>
      ))}
    </Wrapper>
  );
};
