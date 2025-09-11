import React, { useState } from "react";
import { FaBars, FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../../img/Logo.png"; // Asegúrate de tener este logo en /img

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <img src={Logo} alt="SportGlam" className="logo" />
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
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Categorías</a>
          <a href="#">Contacto</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
