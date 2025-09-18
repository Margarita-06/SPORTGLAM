// src/pages/DashboardPage/FeaturedShirts.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeaturedShirts.css";

import Shirt1 from "../../img/Shirt1.png";
import Shirt2 from "../../img/Shirt2.png";
import Shirt3 from "../../img/Shirt3.png";

const FeaturedShirts = () => {
  const navigate = useNavigate();

  const shirts = [
    { id: 1, name: "Camiseta Adidas Negra", price: "$129.950", img: Shirt1 },
    { id: 2, name: "Camiseta Adidas Gris", price: "$119.950", img: Shirt2 },
    { id: 3, name: "Camiseta Adidas Azul", price: "$139.950", img: Shirt3 },
    
  ];

  return (
    <div className="featured-shirts">
      <h2>Camisetas Destacadas</h2>
      <div className="shirts-grid">
        {shirts.map((shirt) => (
          <div
            key={shirt.id}
            className="shirt-card"
            onClick={() => navigate(`/shirt/${shirt.id}`)}
          >
            <img src={shirt.img} alt={shirt.name} />
            <p className="shirt-price">{shirt.price}</p>
            <p className="shirt-name">{shirt.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedShirts;
