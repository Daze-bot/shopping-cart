import React from "react";
import { round } from "lodash";
import CartItem from "./CartItem";

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
          <CartItem 
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            updateQuantity={props.updateQuantity}
            product={item}
            removeCartItem={props.removeCartItem}
          />
        )
      })}
      <p className="cartSubtotal">Subtotal: ${preTaxPriceDisplay}</p>
      <p className="cartTax">Tax: ${taxDisplay}</p>
      <p className="cartTotal">Total: ${afterTaxPriceDisplay}</p>
      <button>Proceed to Checkout</button>
      <button onClick={props.clearCart}>Empty Cart</button>
    </div>
  )
};

export default Cart;