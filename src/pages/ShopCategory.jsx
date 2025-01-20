import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dorpdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/Items/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <strong>Showing 1-12</strong> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dorpdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else return null;
        })}
      </div>
      <button className="btn">Explore more</button>
    </div>
  );
};

export default ShopCategory;
