import React from "react";
import { Link } from "react-router-dom";
import CartImg from "../imgs/cart-white.svg";
import Logo from '../imgs/storeIcon.png';

const Nav = (props) => {
  const totalQuantity = props.cart.reduce((prev, cur) => prev + cur.quantity, 0);

  return (
    <nav>
      <Link to={'/'}>
        <div className="navLogo">
          <div className="navTitle">
            <p>All</p>
            <p>Things</p>
            <p>Gaming</p>
          </div>
          <img className="navLogoImg" src={Logo} alt="Logo"></img>
        </div>
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
        <Link to={'/shop/cart'}>
          <li className="navCart">
            <img src={CartImg} alt="Cart"></img>
            {props.cart.length > 0 && 
              <div className="numberCart">{totalQuantity}</div>
            }
            <p>Cart</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
