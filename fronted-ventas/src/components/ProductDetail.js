import React from 'react';

function ProductDetail({ product }) {
  if (!product) return <p>Cargando detalles del producto...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Precio: ${product.price}</p>
      <p>Descripción: {product.description}</p>
      <button>Agregar al Carrito</button>
    </div>
  );
}

export default ProductDetail;
