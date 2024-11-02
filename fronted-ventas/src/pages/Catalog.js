import React from 'react';
import ProductCard from '../components/ProductCard';
import useFetch from '../hooks/useFetch';

function Catalog() {
  const products = useFetch('/products');

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <div className="product-list">
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
