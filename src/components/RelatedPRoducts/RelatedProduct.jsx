import React, { useEffect, useState } from "react";
import "./RelatedPRoduct.css";
import data_product from "../assets/all_product";
import Item from "../Items/Item";
const RelatedProduct = ({ product }) => {
  let [relateditems, setRelatedtItems] = useState([]);

  useEffect(() => {
    if (product && product.category) {
      const filteredItems = data_product.filter(
        (item) => item.category === product.category
      );
      setRelatedtItems(filteredItems);
    }
  }, [product.category, data_product]);

  return (
    <div className="related-product">
      <h1>Related Products</h1>
      <hr />
      <div className="product-item">
        {relateditems.map((item, i) => (
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
