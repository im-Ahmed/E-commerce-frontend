import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="item">
        <img
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          src={props.image}
          alt=""
        />
        <p>{props.name}</p>
        <div className="item-price">
          <div className="item-price-new">${props.new_price} </div>
          <div className="item-price-old">${props.old_price} </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
