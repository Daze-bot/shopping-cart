import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      
      <Link to={'/shop'}>
        <button>Shop Now!</button>
      </Link>

      <Link to={'/contact'}>
        <button>Contact Us</button>
      </Link>
    </div>
  );
};

export default Home;
