import React, { useContext } from 'react';
import Cart from '../components/Cart';
import { CartContext } from '../context/CartContext';

function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <Cart items={cartItems} />
    </div>
  );
}

export default CartPage;
