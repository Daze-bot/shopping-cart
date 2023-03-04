import React, { useState} from "react";
import controllers from "../products/controllers";
import consoles from "../products/consoles";

const Shop = () => {
  const [productType, setProductType] = useState('allProducts');

  return (
    <div className="shopPage">
      <h1>Shop</h1>
      <div className="shopItemDisplay">

      </div>
    </div>
  );
};

export default Shop;
