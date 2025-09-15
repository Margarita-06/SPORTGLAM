// src/components/FeaturedWatches.js
import React, { useState } from "react";
import "./FeaturedWatches.css";
import Imagen4 from "../../img/Imagen4.png";
import Reloj2 from "../../img/Reloj2.png";
import Reloj3 from "../../img/Reloj3.png";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import Logo from "../../img/Logo.png";

const FeaturedWatches = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Reloj Invicta",
      price: "$129.99",
      oldPrice: "$180.00",
      image: Imagen4,
      specs: {
        generales: {
          Agua: "100m",
          Cristal: "Flame fusion",
          Cronógrafo: "Sí",
          Calendario: "Sí",
          Género: "Hombre",
        },
        caja: {
          Tablero: "Negro - Fibra de carbón",
          Tamaño: "57 mm",
          Material: "Acero inoxidable",
          Corona: "Empujar",
        },
        movimiento: {
          Tipo: "Quartz",
          "Hecho en Suiza": "No",
          Componentes: "Suizo",
          Calibre: "Z60",
        },
        correa: {
          Material: "Acero inoxidable",
          Color: "Acero",
          Largo: "215 mm",
          Ancho: "30 mm",
          Hebilla: "Seguridad",
        },
      },
    },
    {
      id: 2,
      name: "Reloj Casio Edifice",
      price: "$89.99",
      oldPrice: "$120.00",
      image: Reloj2,
      specs: {
        generales: {
          Agua: "50m",
          Cristal: "Mineral",
          Cronógrafo: "Sí",
          Calendario: "No",
          Género: "Hombre",
        },
        caja: {
          Tablero: "Azul metálico",
          Tamaño: "45 mm",
          Material: "Acero inoxidable",
          Corona: "Atornillada",
        },
        movimiento: {
          Tipo: "Quartz",
          "Hecho en Suiza": "No",
          Componentes: "Japón",
          Calibre: "ED-45",
        },
        correa: {
          Material: "Cuero",
          Color: "Negro",
          Largo: "200 mm",
          Ancho: "22 mm",
          Hebilla: "Clásica",
        },
      },
    },
    {
      id: 3,
      name: "Reloj Fossil",
      price: "$159.99",
      oldPrice: "$200.00",
      image: Reloj3,
      specs: {
        generales: {
          Agua: "30m",
          Cristal: "Mineral endurecido",
          Cronógrafo: "No",
          Calendario: "Sí",
          Género: "Unisex",
        },
        caja: {
          Tablero: "Blanco",
          Tamaño: "42 mm",
          Material: "Acero inoxidable",
          Corona: "Empujar",
        },
        movimiento: {
          Tipo: "Automático",
          "Hecho en Suiza": "No",
          Componentes: "Japón",
          Calibre: "FS-22",
        },
        correa: {
          Material: "Cuero genuino",
          Color: "Marrón",
          Largo: "210 mm",
          Ancho: "20 mm",
          Hebilla: "Clásica",
        },
      },
    },
  ];

  return (
    <div className="featured-container">
      {/* Header con logo, búsqueda e iconos */}
      <div className="fw-header">
        <div className="fw-logo">
          <img src={Logo} alt="SportGlam" />
          <span></span>
        </div>

        <div className="fw-search">
          <input type="text" placeholder="Buscar productos..." />
          <button className="fw-search-btn">
            <FaSearch />
          </button>
        </div>

        <div className="fw-icons">
          <FaUser className="icon" />
          <FaHeart className="icon" />
          <FaShoppingCart className="icon" />
        </div>
      </div>

      {/* Título */}
      <h2 className="fw-title">Featured Watches</h2>

      {/* Grilla de productos */}
      <div className="fw-grid">
        {products.map((product) => (
          <div key={product.id} className="fw-card">
            <img src={product.image} alt={product.name} className="fw-img" />
            <h3>{product.name}</h3>

            <div className="fw-prices">
              <span className="fw-price">{product.price}</span>
              <span className="fw-oldPrice">{product.oldPrice}</span>
            </div>

            <div className="fw-buttons">
              <button className="fw-btn">
                <FaShoppingCart style={{ marginRight: "5px" }} /> Agregar
              </button>
              <button
                className="fw-btn fw-specs-btn"
                onClick={() => setSelectedProduct(product)}
              >
                Ver Especificaciones
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de especificaciones */}
      {selectedProduct && (
        <div className="fw-modal">
          <div className="fw-modal-content">
            <span
              className="fw-modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </span>
            <h2>{selectedProduct.name} - Especificaciones Técnicas</h2>

            <div className="fw-specs-grid">
              <div className="fw-spec-box">
                <h3>Generales</h3>
                {Object.entries(selectedProduct.specs.generales).map(
                  ([key, value]) => (
                    <p key={key}>
                      <b>{key}:</b> {value}
                    </p>
                  )
                )}
              </div>

              <div className="fw-spec-box">
                <h3>Caja</h3>
                {Object.entries(selectedProduct.specs.caja).map(
                  ([key, value]) => (
                    <p key={key}>
                      <b>{key}:</b> {value}
                    </p>
                  )
                )}
              </div>

              <div className="fw-spec-box">
                <h3>Movimiento</h3>
                {Object.entries(selectedProduct.specs.movimiento).map(
                  ([key, value]) => (
                    <p key={key}>
                      <b>{key}:</b> {value}
                    </p>
                  )
                )}
              </div>

              <div className="fw-spec-box">
                <h3>Correa</h3>
                {Object.entries(selectedProduct.specs.correa).map(
                  ([key, value]) => (
                    <p key={key}>
                      <b>{key}:</b> {value}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedWatches;
