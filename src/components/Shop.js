import React from "react";
import controllers from "../products/controllers";

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <img src={controllers[3].images[0]} alt="controller"></img>
    </div>
  );
};

export default Shop;
