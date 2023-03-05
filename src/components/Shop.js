import React, { useEffect, useState} from "react";
import allProducts from '../products/allProducts';
import consoles from "../products/consoles";
import controllers from "../products/controllers";
import headsets from "../products/headsets";
import keyboards from "../products/keyboards";
import mice from "../products/mice";
import ItemCard from "./ItemCard";
import ShopSidebar from "./ShopSidebar";
import moment from "moment";

const Shop = () => {
  const [productType, setProductType] = useState(allProducts);
  const [shopCategory, setShopCategory] = useState('All Products');
  const shippingDate = moment().add(5, 'd').format('ddd, MMM D');
  const pickupDate = moment().add(2, 'd').format('ddd, MMM D');

  const handleAllProducts = () => {
    setProductType(allProducts);
    setShopCategory('All Products');
    window.scrollTo(0,0);
  }

  const handleConsoles = () => {
    setProductType(consoles);
    setShopCategory('Consoles');
    window.scrollTo(0,0);
  }

  const handleControllers = () => {
    setProductType(controllers);
    setShopCategory('Controllers');
    window.scrollTo(0,0);
  }

  const handleHeadsets = () => {
    setProductType(headsets);
    setShopCategory('Headsets');
    window.scrollTo(0,0);
  }

  const handleKeyboards = () => {
    setProductType(keyboards);
    setShopCategory('Keyboards');
    window.scrollTo(0,0);
  }

  const handleMice = () => {
    setProductType(mice);
    setShopCategory('Mice');
    window.scrollTo(0,0);
  }

  return (
    <div className="shopPage">
      <ShopSidebar 
        allProducts={handleAllProducts}
        consoles={handleConsoles}
        controllers={handleControllers}
        headsets={handleHeadsets}
        keyboards={handleKeyboards}
        mice={handleMice}
        category={shopCategory}
      />
      <div className="shopItemDisplay">
        <h1>{shopCategory}</h1>
        {productType.map((product) => {
          return <ItemCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            shipping={shippingDate}
            pickup={pickupDate}
          />
        })}
      </div>
    </div>
  );
};

export default Shop;
