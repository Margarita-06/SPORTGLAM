import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import Logo from '../../img/Logo.png';
import Imagen1 from '../../img/Imagen1.png';
import './DashboardPage.css';
import Imagen2 from '../../img/Imagen2.png';

const SportGlamHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: Imagen1, 
      alt: "Adidas sneakers collection"
    },
    {
      id: 2,
      image: Imagen2,
      alt: "Sports equipment"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&crop=center",
      alt: "Athletic wear"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "TENIS ADIDAS CAMPUS",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop&crop=center",
      buttonText: "Ver más"
    },
    {
      id: 2,
      name: "RELOJ INVICTA",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop&crop=center",
      buttonText: "Ver más"
    },
    {
      id: 3,
      name: "Camiseta deportiva Adidas",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop&crop=center",
      buttonText: "Ver más"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="homepage">
      {/* Header */}
      <header>
        {/* Top bar */}
        <div className="top-bar"></div>
        
        {/* Main header */}
        <div className="main-header">
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
              <div className="placeholder-icon"></div>
            </button>
            <button>
              <ShoppingCart size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
            <button>
              <Globe size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <div className="hero-carousel">
        <div className="carousel-inner">
          <img src={slides[currentSlide].image} alt={slides[currentSlide].alt} />
          
          {/* Carousel content overlay */}
          <div className="carousel-overlay">
            <div className="carousel-content">
              <div className="shoe-layout">
                <div className="shoe left-shoe"></div>
                <div className="center-element"></div>
                <div className="shoe right-shoe"></div>
              </div>
              <div className="diamonds">
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
              </div>
            </div>
          </div>
          
          {/* Carousel navigation */}
          <button onClick={prevSlide} className="carousel-nav prev">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="carousel-nav next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
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

      {/* Footer */}
      <footer>
        <p>© SportGlam 2025</p>
      </footer>
    </div>
  );
};

export default SportGlamHomepage;