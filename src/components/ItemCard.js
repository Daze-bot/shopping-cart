import React from "react";

const ItemCard = (props) => {
  return (
    <div className="itemCard">
      <div className="imgHolder">
        <img className="itemCardImg" src={props.image} alt={props.name}></img>
      </div>
      <div className="itemCardProductInfo">
        <h3 className="shopProductName">{props.name}</h3>
        <p>FREE Delivery: <span>{props.shipping}</span> </p>
        <p>Store Pickup: <span>{props.pickup}</span> </p>
      </div>
      <div className="itemCardPurchase">
        <h2>${props.price}</h2>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;