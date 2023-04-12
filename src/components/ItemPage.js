import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import allProducts from "../products/allProducts";
import { Link } from "react-router-dom";
import Cart from '../imgs/cart-filled.svg';
import moment from "moment";
import AddedToCart from "./AddedToCart";

const ItemPage = (props) => {
  const params = useParams();
  const itemID = parseInt(params.id);
  
  const [item, setItem] = useState({})
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemAdded, setItemAdded] = useState(false);

  const shippingDate = moment().add(5, 'd').format('ddd, MMM D');
  const pickupDate = moment().add(2, 'd').format('ddd, MMM D');

  useEffect(() => {
    setItem(allProducts.find(x => x.id === itemID));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateQuantity = (e) => {
    setItemQuantity(e.target.value);
  }

  const incrementQuantity = () => {
    if (itemQuantity < 100) {
      setItemQuantity(itemQuantity + 1);
    }
    return;
  }

  const decrementQuantity = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
    return;
  }

  const handleAddToCart = () => {
    setItemAdded(true);
    props.addToCart(item, parseInt(itemQuantity))
  }

  const removeAlert = () => {
    setItemAdded(false);
  }

  return (
    <div className="itemPage">
      {itemAdded &&
        <AddedToCart 
          removeAlert={removeAlert}
        />
      }
      <p className="returnToShop">{'< '}
        <Link to={'/shop'}><span>Back to shop</span></Link>  
      </p>
      <div className="itemPageContent">
        <div className="itemPageImgHolder">
          <img className="itemPageImg" src={item.image} alt={item.name}></img>
        </div>
        <div className="itemPageInfo">
          <div className="itemProductDetails">
            <p className="pageProductName">{item.name}</p>
            {item.console && 
              <p>Console: {item.console}</p>}
          </div>
          <hr></hr>
          <div className="itemPagePurchase">
            <p className="itemPagePrice">Price: <span>${item.price}</span></p>
            <p className="inStock">In Stock</p>
            <p>FREE Delivery: <span>{shippingDate}</span> </p>
            <p>Store Pickup: <span>{pickupDate}</span> </p>
          </div>
          <hr></hr>
          <div className="itemPageAdd">
            <div className="itemQuantitySelector">
              <label htmlFor="itemQuantity">Quantity:</label>
              <div className="customNumContainer">
                <button className="decrementNum" onClick={decrementQuantity}>-</button>
                <input
                  onChange={updateQuantity}
                  type="number"
                  value={itemQuantity}
                  id="itemQuantity"
                  name="itemQuantity"
                  min='1'
                  max='100'
                  onKeyDown={(e) => e.preventDefault()}
                ></input>
                <button className="incrementNum" onClick={incrementQuantity}>+</button>
              </div>
            </div>
            <button className="addToCartBtn" onClick={handleAddToCart}>
              <img src={Cart} alt="Cart"></img>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <h3 className="itemReviews">Customer Reviews</h3>
    </div>
  );
}

export default ItemPage;