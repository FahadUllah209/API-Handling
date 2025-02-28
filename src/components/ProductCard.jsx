import React from "react";

const ProductCard = ({ product }) => (
  <div className="card">
    <div className="card-image">
      <img src={product.image} alt={product.title} />
    </div>
    <div className="card-content">
      <h3 className="card-title">{product.title}</h3>
      <p className="card-description">{product.description.substring(0, 100)}...</p>
      <p className="card-category">Category: {product.category}</p>
      <p className="card-price">Price: ${product.price}</p>
      <div className="card-rating">
        <span>Rating: {product.rating.rate}</span>
      </div>
    </div>
  </div>
);

export default ProductCard;