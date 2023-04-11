import React, { useEffect, useState } from "react";

const CartItem = (props) => {
  const [cartQuantity, setCartQuantity] = useState(props.quantity);
  const inputLabel = `cartQuantity${props.id}`

  const updateCartQuantity = (e) => {
    setCartQuantity(e.target.value);
  }

  useEffect(() => {
    props.updateQuantity(props.product, parseInt(cartQuantity));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartQuantity])

  return (
    <div className="cartItem">
      <p>Item: {props.name}</p>
      <div className="cartQuantitySelector">
        <label htmlFor={inputLabel}>Quantity</label>
        <input
          onChange={updateCartQuantity}
          type="number"
          value={props.quantity}
          id={inputLabel}
          name="cartQuantity"
          min='1'
          max='100'
        ></input>
      </div>
      <p>Price: ${(props.quantity * props.price).toFixed(2)}</p>
      <button onClick={() => props.removeCartItem(props.id)}>Remove from Cart</button>
    </div>
  )
} 

export default CartItem;