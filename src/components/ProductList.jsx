import React from "react";
import ProductCard from "./ProductCard.jsx";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="prod-not">No products found</p>
      )}
    </div>
  );
};

export default ProductList;