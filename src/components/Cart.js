import React from "react";
import { round } from "lodash";

const Cart = (props) => {
  const preTaxPrice = props.cart.reduce((prev, cur) => prev + cur.quantity * cur.price, 0);
  const tax = round((preTaxPrice * .06), 2);
  const afterTaxPrice = preTaxPrice + tax;

  const preTaxPriceDisplay = preTaxPrice.toFixed(2);
  const taxDisplay = tax.toFixed(2);
  const afterTaxPriceDisplay = afterTaxPrice.toFixed(2);

  return (
    <div className="cart">
      <h1>Cart Items</h1>
      {props.cart.map(item => {
        return (
          <div className="cartItem" key={item.id}>
            <p>Item: {item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${(item.quantity * item.price).toFixed(2)}</p>
          </div>
        )
      })}
      <p className="cartSubtotal">Subtotal: ${preTaxPriceDisplay}</p>
      <p className="cartTax">Tax: ${taxDisplay}</p>
      <p className="cartTotal">Total: ${afterTaxPrice}</p>
    </div>
  )
};

export default Cart;