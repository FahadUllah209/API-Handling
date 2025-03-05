import React from "react";
import ProductCard from "./ProductCard.jsx";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div className={`div${index + 1}`} key={product.id}>
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <p className="prod-not">No products found</p>
      )}
    </div>
  );
};

export default ProductList;