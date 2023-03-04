import React from "react";

const ItemCard = (props) => {
  return (
    <div className="itemCard">
      <img className="itemCardImg" src={props.image} alt={props.name}></img>
      <div className="itemCardProductInfo">
        <p>{props.name}</p>
      </div>
      <div className="itemCardPurchase">
        <h2>{props.price}</h2>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;