import React from 'react';

// PUBLIC_INTERFACE
function ProductCard({ title, tag, image, alt }) {
  return (
    <div className="product-card" tabIndex={0}>
      {/* Image */}
      <img className="product-image" src={image} alt={alt || title} />
      {/* Category overlay, per reference: upper left */}
      <div className="product-category">
        {tag}
      </div>
      {/* Title overlay: bottom left */}
      <div className="product-title">
        {title}
      </div>
    </div>
  );
}

export default ProductCard;
