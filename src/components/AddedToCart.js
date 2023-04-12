import React, { useEffect } from "react";
import Check from '../imgs/check.png';

const AddedToCart = (props) => {
  useEffect(() => {
    const timeID = setTimeout(() => {
      props.removeAlert();
    }, 1500)

    return () => {
      clearTimeout(timeID)
    }
  });

  return (
    <div className="itemAdded">
      <img src={Check} alt="Check"></img>
     <p>Added to Cart</p>
    </div>
  );
  
}

export default AddedToCart