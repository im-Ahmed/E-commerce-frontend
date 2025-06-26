import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const CartItem = () => {
  const {
    getCartTotalAmount,
    all_product,
    removeFromCart,
    addToCart,
    cartitems,
    clearCart,
  } = useContext(ShopContext);

  return (
    <div className="cart-items">
      <h2 className="cart-heading">Your Shopping Cart</h2>
      {all_product.map((e, i) => {
        const count = cartitems[e.id];
        if (count > 0) {
          return (
            <div className="cart-card" key={i}>
              <img src={e.image} alt="" className="cart-image" />
              <div className="cart-info">
                <h3>{e.name}</h3>
                <p className="cart-price">${e.new_price}</p>
                <div className="cart-controls">
                  <MdOutlineRemoveCircleOutline
                    onClick={() => removeFromCart(e.id)}
                  />
                  <span>{count}</span>
                  <IoMdAddCircleOutline onClick={() => addToCart(e.id)} />
                </div>
                <p className="cart-total">Total: ${e.new_price * count}</p>
              </div>
            </div>
          );
        }
        return null;
      })}

      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <div className="summary-line">
          <span>Subtotal</span>
          <span>${getCartTotalAmount()}</span>
        </div>
        <div className="summary-line">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="summary-line total">
          <span>Total</span>
          <span>${getCartTotalAmount()}</span>
        </div>

        <Link to="/login">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="checkout-btn"
          >
            Proceed to Checkout
          </button>
        </Link>
        <button onClick={() => clearCart()} className="checkout-btn">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
