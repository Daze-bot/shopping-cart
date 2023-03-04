import React, { useState} from "react";
import allProducts from '../products/allProducts';
import ItemCard from "./ItemCard";

const Shop = () => {
  const [productType, setProductType] = useState('allProducts');

  return (
    <div className="shopPage">
      <h1>Shop</h1>
      <div className="shopItemDisplay">
        {allProducts.map((product) => {
          return <ItemCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        })}
      </div>
    </div>
  );
};

export default Shop;
