import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartItems } = useContext(ShopContext);

  const handleLinkClick = (value) => {
    setMenu(value);
    setMenuOpen(false); // Close the menu on link click
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>BrandName</p>
      </div>

      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
          <li
            onClick={() => {
              handleLinkClick("shop");
              window.scrollTo(0, 0);
            }}
          >
            Shop {menu === "shop" && <hr />}
          </li>
        </Link>
        <Link to="/men" style={{ textDecoration: "none", color: "#626262" }}>
          <li
            onClick={() => {
              handleLinkClick("men");
              window.scrollTo(0, 0);
            }}
          >
            Men {menu === "men" && <hr />}
          </li>
        </Link>
        <Link to="/women" style={{ textDecoration: "none", color: "#626262" }}>
          <li
            onClick={() => {
              handleLinkClick("women");
              window.scrollTo(0, 0);
            }}
          >
            Women {menu === "women" && <hr />}
          </li>
        </Link>
        <Link to="/kids" style={{ textDecoration: "none", color: "#626262" }}>
          <li
            onClick={() => {
              handleLinkClick("kids");
              window.scrollTo(0, 0);
            }}
          >
            Kids {menu === "kids" && <hr />}
          </li>
        </Link>

        {/* Show login only inside dropdown on mobile */}
        <div className="nav-mobile-login">
          <Link to="/login">
            <button onClick={() => handleLinkClick("login")}>Login</button>
          </Link>
        </div>
      </ul>

      {/* Cart always visible */}
      <div className="nav-login-cart">
        {/* Show login button only on desktop */}
        <div className="nav-desktop-login">
          <Link to="/login">
            <button
              onClick={() => {
                handleLinkClick("login");
                window.scrollTo(0, 0);
              }}
            >
              Login
            </button>
          </Link>
        </div>

        <Link to="/cart">
          <img
            src={cart_icon}
            alt="cart"
            className="nav-cart-icon"
            onClick={() => {
              handleLinkClick("cart");
              window.scrollTo(0, 0);
            }}
          />
        </Link>
        <div className="nav-cart-counter">{getCartItems()}</div>
      </div>

      {/* Hamburger toggle */}
      <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
