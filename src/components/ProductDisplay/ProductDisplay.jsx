import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const { addToCart } = useContext(ShopContext);
  const { product } = props;
  return (
    <div className="product-display">
      <div className="display-left">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="display-img">
          <img className="main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(77)</p>
        </div>
        <div className="prices">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur at
          quaerat dolor repudiandae minus a, alias, nulla soluta aliquid harum
          perspiciatis obcaecati itaque eveniet libero dolorem provident maxime
          vel inventore!
        </div>
        <div className="sizing">
          <h1>Select Size</h1>
          <div className="sizes">
            <div className="size">S</div>
            <div className="size">M</div>
            <div className="size">L</div>
            <div className="size">XL</div>
            <div className="size">XXL</div>
          </div>
        </div>
        <button
          className="cart-btn"
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="category">
          <strong>Category: </strong> {product.category}
        </p>
        <p className="tags">
          <strong>Tags: </strong> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
