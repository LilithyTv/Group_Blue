import React from "react";

import { Product } from "./SaleProduct";
import { PRODUCTS } from '../../data/Productsfront'; 
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
