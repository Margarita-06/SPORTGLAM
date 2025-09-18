// src/data/products.js
import Imagen3 from "../img/Imagen3.png";
import Imagen4 from "../img/Imagen4.png";
import Imagen5 from "../img/Imagen5.png";

export const featuredProducts = [
  {
    id: "zapatos",
    name: "Tenis Adidas Campus",
    price: "$32.99",
    oldPrice: "$70.00",
    image: Imagen3,
    rating: 4.8,
    reviews: 183,
    description: "Tenis Adidas Campus cómodos y resistentes, perfectos para uso diario.",
    details: "Material: cuero y gamuza, suela de goma antideslizante.",
    care: "Limpiar con un paño húmedo y no usar lavadora.",
    look: "Combínalos con jeans o pantalones deportivos.",
    sizes: ["38", "39", "40", "41", "42", "43"],
    related: ["reloj", "camiseta"],
  },
  {
    id: "reloj",
    name: "Reloj Invicta",
    price: "$129.99",
    oldPrice: "$180.00",
    image: Imagen4,
    rating: 4.6,
    reviews: 95,
    description: "Reloj elegante Invicta con resistencia al agua.",
    details: "Caja de acero inoxidable, correa ajustable.",
    care: "Evita golpes fuertes y contacto prolongado con agua salada.",
    look: "Ideal para atuendos casuales y formales.",
    sizes: [],
    related: ["zapatos", "camiseta"],
  },
  {
    id: "camiseta",
    name: "Camiseta deportiva Adidas",
    price: "$39.99",
    oldPrice: "$59.99",
    image: Imagen5,
    rating: 4.7,
    reviews: 210,
    description: "Camiseta ligera y transpirable para entrenamientos.",
    details: "100% poliéster reciclado, tecnología AEROREADY.",
    care: "Lavar en frío y secar al aire.",
    look: "Perfecta con pantalones deportivos o shorts.",
    sizes: ["S", "M", "L", "XL"],
    related: ["zapatos", "reloj"],
  },
];
