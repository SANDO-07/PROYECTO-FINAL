import './Cart.css';

function Cart({ items }) {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name} - {item.quantity} x ${item.price}</p>
        </div>
      ))}
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
