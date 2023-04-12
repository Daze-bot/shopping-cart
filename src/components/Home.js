import React from "react";
import { Link } from "react-router-dom";
import Logo from '../imgs/storeIcon.png';

const Home = () => {
  return (
    <div className="home">
      <h1>All Things Gaming <img src={Logo} alt="Logo"></img></h1>
      <div className="homeLinks">
        <Link to={'/shop'}>
          <button>Shop Now!</button>
        </Link>
        <Link to={'/contact'}>
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
