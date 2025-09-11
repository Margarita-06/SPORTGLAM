import React, { useState } from "react";
import "./FeaturedProducts.css"; 
import Navbar from "../Components/Navbar";
import Imagen3 from '../../img/Imagen3.png';
import Imagen6 from '../../img/Imagen6.png';
import Imagen7 from '../../img/Imagen7.png';
import Imagen8 from '../../img/Imagen8.png';
import Imagen9 from '../../img/Imagen9.png';

const FeaturedProducts = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const tallas = [
    "US H 4 / M 5",
    "US H 4.5 / M 5.5",
    "US H 5 / M 6",
    "US H 5.5 / M 6.5",
    "US H 6 / M 7",
    "US H 6.5 / M 7.5",
    "US H 7 / M 8",
    "US H 7.5 / M 8.5",
    "US H 8 / M 9",
    "US H 8.5 / M 9.5",
    "US H 9 / M 10",
    "US H 9.5 / M 10.5",
    "US H 10 / M 11",
    "US H 10.5 / M 11.5",
    "US H 11 / M 12",
    "US H 11.5 / M 12.5",
    "US H 12 / M 13",
  ];

  return (
    <>
     <Navbar />
      <div className="producto-container">
        <h2>Productos Destacados</h2>

        <div className="producto-content">
          {/* Imagen y detalles */}
          <div className="producto-info">
            <img
              src={Imagen3}
              alt="Tenis Adidas Campus"
              className="producto-img"
            />

            <h3>Tenis Adidas Campus</h3>

            <ul className="detalles">
              <li>Ajuste clásico</li>
              <li>Sistema de amarre de cordones</li>
              <li>Exterior de cuero</li>
              <li>Forro interno textil</li>
            </ul>

            <div className="precio">
              <span className="precio-antiguo">$70.00</span>
              <span className="precio-oferta">$32.99</span>
            </div>
          </div>

          {/* Sección de tallas */}
          <div className="producto-tallas">
            <h4>
              Tallas{" "}
              <button type="button" className="link-btn">
                Guía de tallas
              </button>
            </h4>

            <div className="tallas-grid">
              {tallas.map((talla, index) => (
                <button
                  key={index}
                  className={`talla-btn ${
                    selectedSize === talla ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize(talla)}
                >
                  {talla}
                </button>
              ))}
            </div>

            <button className="btn-carrito">AGREGAR AL CARRITO</button>
          </div>
        </div>

        {/* Sección recomendados */}
        <div className="recomendados">
          <h2>Quizá también te guste...</h2>
          <div className="grid-recomendados">
            <div className="card">
              <img
                src={Imagen6}
                alt="Tenis adidas Grand Court Platform"
                className="producto-img"
              />
              <p className="precio">$339.950</p>
              <p>Tenis Lightblaze</p>
            </div>

            <div className="card">
              <img
                src={Imagen7}
                alt="Tenis adidas Grand Court Platform"
                className="producto-img"
              />
              <p className="precio">$429.950</p>
              <p>Tenis Lightblaze</p>
            </div>

            <div className="card">
              <img
                src={Imagen8}
                alt="Tenis Advantage Base 2.0"
              />
              <p className="precio">$299.950</p>
              <p>Tenis Advantage Base 2.0</p>
            </div>

            <div className="card">
              <img
                src={Imagen9}
                alt="Tenis Barreda Decode"
              />
              <p className="precio">$349.950</p>
              <p>Tenis Barreda Decode</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer">
        <p>© SportGlam 2025 - Todos los derechos reservados</p>
      </footer>
    </>
  );
};

export default FeaturedProducts;
