import React from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import './styles/app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
