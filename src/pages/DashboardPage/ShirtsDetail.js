// src/pages/DashboardPage/ShirtDetail.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ShirtDetail.css";

import Shirt1 from "../../img/Shirt1.png";
import Shirt2 from "../../img/Shirt2.png";
import Shirt3 from "../../img/Shirt3.png";


const ShirtDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);

  const shirts = [
    { id: "1", name: "Camiseta Adidas Negra", price: "$129.950", img: Shirt1 },
    { id: "2", name: "Camiseta Adidas Gris", price: "$119.950", img: Shirt2 },
    { id: "3", name: "Camiseta Adidas Azul", price: "$139.950", img: Shirt3 },
    
  ];

  const shirt = shirts.find((s) => s.id === id);

  const sizes = ["XS", "S", "M", "L", "XL", "2XL"];

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="shirt-detail">
      <div className="shirt-info">
        <img src={shirt.img} alt={shirt.name} className="shirt-img" />
        <div className="shirt-data">
          <h2>{shirt.name}</h2>
          <p className="price">{shirt.price}</p>

          <h4>Tallas <span className="guide">Guía de tallas</span></h4>
          <div className="sizes-grid">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <button className="btn-cart">Añadir al carrito</button>

          {/* Beneficios */}
          <div className="benefits">
            <p>🚚 Envío gratis a partir de $249.999</p>
            <p>💳 Pago seguro en línea</p>
            <p>↩️ Devoluciones gratis hasta 60 días</p>
            <p>🎁 Bonos de regalo virtuales</p>
          </div>
        </div>
      </div>

      {/* Acordeones */}
      <div className="accordion">
        <div onClick={() => toggleAccordion("descripcion")} className="accordion-title">
          Descripción
        </div>
        {openAccordion === "descripcion" && (
          <div className="accordion-content">
            <p>Camiseta de algodón suave con logo clásico de Adidas.</p>
          </div>
        )}

        <div onClick={() => toggleAccordion("detalles")} className="accordion-title">
          Detalles
        </div>
        {openAccordion === "detalles" && (
          <div className="accordion-content">
            <p>- 100% algodón</p>
            <p>- Corte regular</p>
            <p>- Cuello redondo</p>
          </div>
        )}

        <div onClick={() => toggleAccordion("cuidados")} className="accordion-title">
          Cuidados
        </div>
        {openAccordion === "cuidados" && (
          <div className="accordion-content">
            <p>Lavar en frío y no usar secadora.</p>
          </div>
        )}

        <div onClick={() => toggleAccordion("look")} className="accordion-title">
          Presume tu look
        </div>
        {openAccordion === "look" && (
          <div className="accordion-content">
            <p>Comparte tu outfit en redes sociales con #SportGlam</p>
          </div>
        )}
      </div>

      {/* Recomendados */}
      <div className="recommendations">
        <h3>Quizá también te guste...</h3>
        <div className="recommend-grid">
          {shirts.filter((s) => s.id !== id).map((rec) => (
            <div key={rec.id} className="rec-card">
              <img src={rec.img} alt={rec.name} />
              <p>{rec.name}</p>
              <span>{rec.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShirtDetail;
