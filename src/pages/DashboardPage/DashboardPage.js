import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import Logo from '../../img/Logo.png';
import Imagen1 from '../../img/Imagen1.png';
import Imagen2 from '../../img/Imagen2.png';
import Imagen3 from '../../img/Imagen3.png';
import Imagen4 from '../../img/Imagen4.png';
import Imagen5 from '../../img/Imagen5.png';
import Imagen0 from '../../img/Imagen0.png';
import './DashboardPage.css';

const SportGlamHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Ahora cada slide tiene un color asociado
  const slides = [
    { id: 1, image: Imagen1, alt: "Adidas sneakers collection", bgColor: "#2a5cdd" }, // Azul
    { id: 2, image: Imagen2, alt: "Sports equipment", bgColor: "#000000" }, // Negro
    { id: 3, image: Imagen0, alt: "Athletic wear", bgColor: "#f2f0e9" } // Beige claro
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "TENIS ADIDAS CAMPUS",
      image: Imagen3,
      buttonText: "Ver más"
    },
    {
      id: 2,
      name: "RELOJ INVICTA",
      image: Imagen4,
      buttonText: "Ver más"
    },
    {
      id: 3,
      name: "Camiseta deportiva Adidas",
      image: Imagen5,
      buttonText: "Ver más"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="homepage">
      {/* ---------------- HEADER ---------------- */}
      <header>
        <div className="main-header">
          {/* Logo */}
          <div className="logo-container">
            <img src={Logo} alt="Logo SportGlam" />
          </div>

          {/* Search bar */}
          <div className="search-bar">
            <input type="text" placeholder="Buscar productos..." />
            <Search />
          </div>

          {/* Header icons */}
          <div className="header-icons">
            <button>
              <ShoppingCart size={22} />
            </button>
            <button>
              <Menu size={22} />
            </button>
            <button>
              <Globe size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ---------------- HERO CAROUSEL ---------------- */}
      <div
        className="hero-carousel"
        style={{ backgroundColor: slides[currentSlide].bgColor }}
      >
        <div className="carousel-inner">
          <img src={slides[currentSlide].image} alt={slides[currentSlide].alt} />

          <button onClick={prevSlide} className="carousel-nav prev">
            <ChevronLeft size={22} />
          </button>
          <button onClick={nextSlide} className="carousel-nav next">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* ---------------- FEATURED PRODUCTS ---------------- */}
      <div className="featured-products">
        <h2>PRODUCTOS DESTACADOS</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <button>{product.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- FOOTER ---------------- */}
      <footer>
        <p>© SportGlam 2025 - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default SportGlamHomepage;
