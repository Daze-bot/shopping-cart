import React, { useState } from "react";
import { round } from "lodash";
import CartItem from "./CartItem";
import FakeShopAlert from "./FakeShopAlert";

const Cart = (props) => {
  const preTaxPrice = props.cart.reduce((prev, cur) => prev + cur.quantity * cur.price, 0);
  const tax = round((preTaxPrice * .06), 2);
  const afterTaxPrice = preTaxPrice + tax;

  const preTaxPriceDisplay = preTaxPrice.toFixed(2);
  const taxDisplay = tax.toFixed(2);
  const afterTaxPriceDisplay = afterTaxPrice.toFixed(2);

  const [checkedOut, setCheckedOut] = useState(false);
  
  const closeAlert = () => {
    setCheckedOut(false);
  }

  const handleCheckOut = () => {
    setCheckedOut(true);
  }

  return (
    <div className="cart">
      {checkedOut &&
        <FakeShopAlert 
          closeAlert={closeAlert}
          clearCart={props.clearCart}
        />
      }
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
      <button onClick={handleCheckOut}>Proceed to Checkout</button>
    </div>
  )
};

export default Cart;