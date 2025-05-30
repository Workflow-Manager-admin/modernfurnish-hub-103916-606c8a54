import React from 'react';

// PUBLIC_INTERFACE
function ProductCard({ title, subtitle, tag, image, description, alt }) {
  return (
    <div className="product-card" tabIndex={0}>
      <img className="product-image" src={image} alt={alt} />
      <div className="product-overlay">
        <div className="product-tag">{tag}</div>
        <div className="product-title">{title}</div>
        <div className="product-description">{description}</div>
      </div>
    </div>
  );
}

export default ProductCard;
