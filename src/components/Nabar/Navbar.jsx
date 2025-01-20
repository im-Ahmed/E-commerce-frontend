import React, { useContext, useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  let [menu, setMenu] = useState("shop");
  const { getCartItems } = useContext(ShopContext);
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/">
            <li
              onClick={() => {
                setMenu("shop");
              }}
            >
              Shop {menu === "shop" ? <hr /> : <></>}
            </li>
          </Link>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/men">
            <li
              onClick={() => {
                setMenu("men");
              }}
            >
              Men{menu === "men" ? <hr /> : <></>}
            </li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#626262" }}
            to="/women"
          >
            <li
              onClick={() => {
                setMenu("women");
              }}
            >
              Women{menu === "women" ? <hr /> : <></>}
            </li>
          </Link>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/kids">
            <li
              onClick={() => {
                setMenu("kids");
              }}
            >
              Kids{menu === "kids" ? <hr /> : <></>}
            </li>
          </Link>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login">
            <button
              onClick={() => {
                setMenu("login");
              }}
            >
              Login
              {menu === "login" ? <></> : <></>}
            </button>
          </Link>
          <Link to="/cart">
            <img
              src={cart_icon}
              alt=""
              onClick={() => {
                setMenu("cart");
              }}
            />
            {menu === "cart" ? <></> : <></>}
          </Link>
          <div className="nav-cart-counter">{getCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
