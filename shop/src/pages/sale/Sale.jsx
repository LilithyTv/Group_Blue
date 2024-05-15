import React from "react";

import { Product } from "./SaleProduct";
import { PRODUCTS } from '../cart/Productsfront'; 
import "./Sale.css";

export const Sale = () => {
  return (
    <div className="shop">
      
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
