import React from "react";
import ProductPage from "./products";
import { Products } from "../../products";
import "./shop.css";

const ShopCart = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h6>The Amazing Deals are waiting!!Go Grab</h6>
      </div>
      <div className="products">
        {Products.map((pro) => (
          <ProductPage data={pro} />
        ))}
      </div>
    </div>
  );
};

export default ShopCart;
