import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import allProducts from "../products/allProducts";

const ItemPage = () => {
  const params = useParams();
  const itemID = params.id;
  
  const [item, setItem] = useState({})

  useEffect(() => {
    setItem(allProducts[itemID]);
  }, [])

  return (
    <div>
      {item.name}
    </div>
  );
}

export default ItemPage;