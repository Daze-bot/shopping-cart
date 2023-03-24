import React, { useState } from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import './styles/app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemPage from "./components/ItemPage";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, amount = 1) => {
    if (cart.some(obj => obj.id === product.id)){
      const cartCopy = [...cart];
      const itemIndex = cartCopy.findIndex(x => x.id === product.id);
      cartCopy[itemIndex].quantity += amount;
      setCart(cartCopy);
    }
    else {
      product.quantity = amount;
      setCart([...cart, product]);
    }
  }

  return (
    <BrowserRouter>
      <Nav 
        cart={cart}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/shop" 
          element={<Shop 
            addToCart={addToCart}
          />} 
        />
        <Route 
          path="/shop/:id"
          element={<ItemPage 
            addToCart={addToCart}
          />}
        />
        <Route 
          path="/shop/cart"
          element={<Cart
            cart={cart}
          />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
