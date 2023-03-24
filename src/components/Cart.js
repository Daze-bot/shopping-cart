import React from "react";

const Cart = (props) => {
  return (
    <div className="cart">
      Cart Items
      {props.cart.map(item => {
        return (
          <div className="cartItem" key={item.id}>
            <p>Item: {item.name}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        )
      })}
    </div>
  )
};

export default Cart;