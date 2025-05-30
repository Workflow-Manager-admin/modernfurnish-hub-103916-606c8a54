import React from "react";
import { products } from "./products";
import ProductCard from "./ProductCard";

// PUBLIC_INTERFACE
function ProductGrid() {
  return (
    <main className="product-main">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}

export default ProductGrid;
