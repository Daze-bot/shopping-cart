import React, { useEffect, useState } from "react";
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

  const totalQuantity = props.cart.reduce((prev, cur) => prev + cur.quantity, 0)

  const [checkedOut, setCheckedOut] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  
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
      <div className="cartMain">
        <h2>Shopping Cart</h2>
        <p className="cartPrice">Price</p>
        <div className="cartItems">
          {props.cart.map(item => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                image={item.image}
                price={item.price}
                updateQuantity={props.updateQuantity}
                product={item}
                removeCartItem={props.removeCartItem}
              />
            )
          })}
        </div>
        <p className="cartSubtotalMain">Subtotal ({totalQuantity} items): <span>${preTaxPriceDisplay}</span></p>
      </div>
      <div className="cartSide">
        <p className="cartSubtotal">Subtotal ({totalQuantity} items): <span>${preTaxPriceDisplay}</span></p>
        <p className="cartTax">Tax: <span>${taxDisplay}</span></p>
        <p className="cartTotal">Total: <span>${afterTaxPriceDisplay}</span></p>
        <button onClick={handleCheckOut}>Proceed to Checkout</button>
      </div>
    </div>
  )
};

export default Cart;