import React from "react";
import "./RelatedPRoduct.css";
import data_product from "../assets/data";
import Item from "../Items/Item";
const RelatedProduct = () => {
  return (
    <div className="related-product">
      <h1>Related Products</h1>
      <hr />
      <div className="product-item">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
