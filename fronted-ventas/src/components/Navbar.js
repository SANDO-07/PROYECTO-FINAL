import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/catalog">Catálogo</Link>
      <Link to="/cart">Carrito</Link>
      <Link to="/orders">Mis Pedidos</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;
