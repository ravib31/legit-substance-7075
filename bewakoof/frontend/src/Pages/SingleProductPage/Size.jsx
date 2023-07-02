import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Size.module.css";

const Size = ({ handleSizeDetails, allsize,selectedSize }) => {
  const { size } = useSelector((store) => store.SingleProductPageReducer.product);
  // console.log(size);
  const isSizeAvailable = size?.includes(allsize);
  // console.log(allsize);
  // const [isSizeSelected, setIsSizeSelected] = useState(false);
  // console.log(selectedSize,allsize);
  const isSizeSelected=selectedSize===allsize
  
  
  
  const handleClick = () => {
    handleSizeDetails(allsize);
    
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`${isSizeAvailable ? styles.size : styles.disabledSize} ${isSizeSelected ? styles.Selected : styles.notSelected}`}
        disabled={!isSizeAvailable}
        style={{
          backgroundColor: isSizeSelected ? "green" : "white",
        }}
      >
        {allsize}
      </button>
    </div>
  );
};

export default Size;
