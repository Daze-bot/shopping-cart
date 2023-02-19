import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to={'/'}>
        <h3 className="navLogo">LOGO(Change)</h3>
      </Link>
      <ul className="navLinks">
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/shop'}>
          <li>Shop</li>
        </Link>
        <Link to={'/contact'}>
          <li>Contact</li>
        </Link>
        <li className="navCart">CART(Change)</li>
      </ul>
    </nav>
  );
};

export default Nav;
