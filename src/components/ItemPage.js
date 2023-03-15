import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import allProducts from "../products/allProducts";

const ItemPage = () => {
  const params = useParams();
  const itemID = parseInt(params.id);
  
  const [item, setItem] = useState({})

  useEffect(() => {
    setItem(allProducts.find(x => x.id === itemID));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="itemPage">
      <p>{item.name}</p>
      <p>{item.price}</p>
      {item.console && 
        <p>Console: {item.console}</p>}
      <p>{item.type}</p>
      <img src={item.image} alt={item.name}></img>
    </div>
  );
}

export default ItemPage;