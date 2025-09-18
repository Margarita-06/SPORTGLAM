// src/pages/DashboardPage/ProductDetail.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { featuredProducts } from "../../Data/Products.js";
import Accordion from "../Components/Accordion";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = featuredProducts.find((p) => p.id === id);

  if (!product) return <div>Producto no encontrado</div>;

  const relatedProducts = featuredProducts.filter((p) =>
    product.related.includes(p.id)
  );

  return (
    <div className="product-detail">
      {/* ----------- Info izquierda ----------- */}
      <div className="product-detail-left">
        <img src={product.image} alt={product.name} />
      </div>

      {/* ----------- Info derecha ----------- */}
      <div className="product-detail-right">
        <h2>{product.name}</h2>
        <p className="rating">
          ⭐ {product.rating} ({product.reviews} valoraciones)
        </p>
        <div className="price">
          <span className="old-price">{product.oldPrice}</span>
          <span className="new-price">{product.price}</span>
        </div>

        {/* Tallas */}
        {product.sizes.length > 0 && (
          <div className="sizes">
            <h4>Tallas</h4>
            <div className="size-options">
              {product.sizes.map((size) => (
                <button key={size} className="size-btn">
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <button className="add-cart-btn">Añadir al carrito</button>

        {/* Acordeón */}
        <Accordion title="Descripción" content={product.description} />
        <Accordion title="Detalles" content={product.details} />
        <Accordion title="Cuidados" content={product.care} />
        <Accordion title="Presume tu look" content={product.look} />
      </div>

      {/* ----------- Relacionados ----------- */}
      <div className="related">
        <h3>Quizá también te guste...</h3>
        <div className="related-grid">
          {relatedProducts.map((p) => (
            <div
              key={p.id}
              className="related-card"
              onClick={() => navigate(`/product/${p.id}`)}
            >
              <img src={p.image} alt={p.name} />
              <p>{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
