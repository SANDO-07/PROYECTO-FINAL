import React from 'react';
import useFetch from '../hooks/useFetch';

function OrderHistory() {
  const orders = useFetch('/orders');

  return (
    <div>
      <h2>Historial de Pedidos</h2>
      <ul>
        {orders && orders.map((order) => (
          <li key={order.id}>
            Pedido #{order.id} - Total: ${order.total}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderHistory;
