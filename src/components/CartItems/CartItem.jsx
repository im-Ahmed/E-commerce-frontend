import React, { useContext, useEffect, useState } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const CartItem = () => {
  const {
    getCartTotalAmount,
    all_product,
    removeFromCart,
    addToCart,
    cartitems,
  } = useContext(ShopContext);

  return (
    <div className="cart-items">
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr />

      {all_product.map((e, i) => {
        if (cartitems[e.id] > 0) {
          let count = cartitems[e.id];
          return (
            <div key={i}>
              <div className="format format-main">
                <img src={e.image} alt="" className="cart-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <div className="controlers">
                  <MdOutlineRemoveCircleOutline
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                  />
                  <button className="item-quantity">{count}</button>
                  <IoMdAddCircleOutline
                    onClick={() => {
                      addToCart(e.id);
                    }}
                  />
                </div>
                <p>${e.new_price * count}</p>
              </div>
              <hr />
            </div>
          );
        }
      })}
      <div className="cart-down">
        <div className="cart-item-total">
          <h1>Cart Total</h1>
          <div>
            <div className="total-items">
              <p>SubTotal</p>
              <p>${getCartTotalAmount()}</p>
            </div>
            <hr />
            <div className="total-items">
              <p>shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="total-items">
              <h3>Total</h3>
              <h3>${getCartTotalAmount()}</h3>
            </div>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
