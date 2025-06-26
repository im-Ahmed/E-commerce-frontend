import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcurms/Breadcrums";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/Description/DescriptionBox";
import RelatedProduct from "../components/RelatedPRoducts/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);

  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct product={product} />
    </div>
  );
};

export default Product;
