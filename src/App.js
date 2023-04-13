import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import './styles/app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemPage from "./components/ItemPage";
import Cart from "./components/Cart";

const App = () => {
  const storedCart = JSON.parse(window.localStorage.getItem('shoppingCart')) || [];

  const [cart, setCart] = useState(storedCart);

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

  const updateCartQuantity = (product, amount) => {
    const cartCopy = [...cart];
    const itemIndex = cartCopy.findIndex(x => x.id === product.id);
    cartCopy[itemIndex].quantity = amount;
    setCart(cartCopy);
  }

  const removeCartItem = (id) => {
    const cartCopy = [...cart];
    const itemRemoved = cartCopy.filter(x => x.id !== id);
    setCart(itemRemoved);
  }

  const clearCart = () => {
    setCart([]);
  }

  useEffect(() => {
    window.localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }, [cart])

  return (
    <BrowserRouter>
      <Nav 
        cart={cart}
      />
      <Routes>
        <Route path="/shopping-cart/" element={<Home />} />
        <Route 
          path="/shopping-cart/shop" 
          element={<Shop 
            addToCart={addToCart}
          />} 
        />
        <Route 
          path="/shopping-cart/shop/:id"
          element={<ItemPage 
            addToCart={addToCart}
          />}
        />
        <Route 
          path="/shopping-cart/shop/cart"
          element={<Cart
            cart={cart}
            updateQuantity={updateCartQuantity}
            removeCartItem={removeCartItem}
            clearCart={clearCart}
          />}
        />
        <Route path="/shopping-cart/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
