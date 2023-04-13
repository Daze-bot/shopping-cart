import React, { useEffect, useState } from "react";
import moment from "moment";

const CartItem = (props) => {
  const [cartQuantity, setCartQuantity] = useState(props.quantity);
  const inputLabel = `cartQuantity${props.id}`

  const shippingDate = moment().add(5, 'd').format('ddd, MMM D');
  const pickupDate = moment().add(2, 'd').format('ddd, MMM D');

  const updateCartQuantity = (e) => {
    setCartQuantity(e.target.value);
  }

  const incrementQuantity = () => {
    if (cartQuantity < 100) {
      setCartQuantity(cartQuantity + 1);
    }
    return;
  }

  const decrementQuantity = () => {
    if (cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
    }
    return;
  }

  useEffect(() => {
    props.updateQuantity(props.product, parseInt(cartQuantity));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartQuantity])

  return (
    <div className="cartItem">
      <div className="cartImgHolder">
          <img className="cartItemImg" src={props.image} alt={props.name}></img>
      </div>
      <div className="cartItemInfo">
        <p className="cartItemName">{props.name}</p>
        <div className="cartDelivery">
          <p>FREE Delivery: <span>{shippingDate}</span></p>
          <p>Store Pickup: <span>{pickupDate}</span></p>
        </div>
        <div className="cartNumberItems">
          <div className="cartQuantitySelector">
            <label htmlFor={inputLabel}>Quantity: </label>
            <div className="cartNumContainer">
              <button className="decrementNum" onClick={decrementQuantity}>-</button>
              <input
                className="cartQuantity"
                onChange={updateCartQuantity}
                type="number"
                value={cartQuantity}
                id={inputLabel}
                name="cartQuantity"
                min='1'
                max='100'
                onKeyDown={(e) => e.preventDefault()}
              ></input>
              <button className="incrementNum" onClick={incrementQuantity}>+</button>
            </div>
          </div>
          <button className="removeCartItem" onClick={() => props.removeCartItem(props.id)}>Remove</button>
        </div>
      </div>
      <p className="cartItemPrice">${(props.quantity * props.price).toFixed(2)}</p>
    </div>
  )
} 

export default CartItem;