import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <h3>{product.name_product}</h3>
      <p>Цена: ${product.price}</p>
    </div>
  );
};

export default ProductCard;

