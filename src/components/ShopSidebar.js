import React from "react";

const ShopSidebar = (props) => {
  return (
    <div className="shopSidebar">
      <ul className="shopCategories">
        <li onClick={props.allProducts}>All Products</li>
        <li onClick={props.consoles}>Consoles</li>
        <li onClick={props.controllers}>Controllers</li>
        <li onClick={props.keyboards}>Keyboards</li>
        <li onClick={props.headsets}>Headsets</li>
        <li onClick={props.mice}>Mice</li>
      </ul>
    </div>
  );
};

export default ShopSidebar;
