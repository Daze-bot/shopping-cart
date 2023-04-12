import React, { useState } from "react";
import Cart from '../imgs/cart-filled.svg';
import { Link } from "react-router-dom";
import AddedToCart from "./AddedToCart";

const ItemCard = (props) => {
  const [itemAdded, setItemAdded] = useState(false);

  const handleAddToCart = () => {
    setItemAdded(true);
    props.addToCart(props.product);
  }

  const removeAlert = () => {
    setItemAdded(false)
  }

  return (
    <div className="itemCard">
      {itemAdded && 
        <AddedToCart
          removeAlert={removeAlert}
        />
      }
      <div className="imgHolder">
        <Link to={`/shop/${props.id}`}>
          <img className="itemCardImg" src={props.image} alt={props.name}></img>
        </Link>
      </div>
      <div className="itemCardProductInfo">
        <h3 className="shopProductName">
          <Link to={`/shop/${props.id}`}>{props.name}</Link>
        </h3>
        <p>FREE Delivery: <span>{props.shipping}</span> </p>
        <p>Store Pickup: <span>{props.pickup}</span> </p>
      </div>
      <div className="itemCardPurchase">
        <h2>${props.price}</h2>
        <button onClick={handleAddToCart}>
          <img src={Cart} alt="Cart"></img>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;