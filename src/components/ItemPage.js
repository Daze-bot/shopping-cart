import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import allProducts from "../products/allProducts";

const ItemPage = (props) => {
  const params = useParams();
  const itemID = parseInt(params.id);
  
  const [item, setItem] = useState({})
  const [itemQuantity, setItemQuantity] = useState(1);

  useEffect(() => {
    setItem(allProducts.find(x => x.id === itemID));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateQuantity = (e) => {
    setItemQuantity(e.target.value);
  } 

  return (
    <div className="itemPage">
      <p>{item.name}</p>
      <p>{item.price}</p>
      {item.console && 
        <p>Console: {item.console}</p>}
      <div className="itemQuantitySelector">
        <label htmlFor="itemQuantity">Quantity</label>
        <input
          onChange={updateQuantity}
          type="number"
          value={itemQuantity}
          id="itemQuantity"
          name="itemQuantity"
          min='1'
          max='100'
        ></input>
      </div>
      <button onClick={() => props.addToCart(item, parseInt(itemQuantity))}>Add to Cart</button>
      <img src={item.image} alt={item.name}></img>
    </div>
  );
}

export default ItemPage;