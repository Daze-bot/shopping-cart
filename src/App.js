import React, { useState } from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import './styles/app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemPage from "./components/ItemPage";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productObj = product;
    setCart([...cart, productObj]);
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
          element={<ItemPage />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
