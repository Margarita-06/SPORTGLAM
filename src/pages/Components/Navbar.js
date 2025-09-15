import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importamos Link
import { FaBars, FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../../img/Logo.png"; // Asegúrate de tener este logo en /img

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <Link to="/dashboard">   {/* Aquí redirige al dashboard */}
          <img src={Logo} alt="SportGlam" className="logo" />
        </Link>
      </div>

      {/* Lado derecho */}
      <div className="navbar-right">
        {/* Barra de búsqueda */}
        <div className="search-bar">
          <input type="text" placeholder="Buscar productos..." />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>

        {/* Iconos */}
        <div className="icons">
          <FaUser className="icon" />
          <FaHeart className="icon" />
          <FaShoppingCart className="icon" />
        </div>
      </div>

      {/* Menú desplegable (para móvil) */}
      {menuOpen && (
        <nav className="dropdown-menu">
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/categorias">Categorías</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
