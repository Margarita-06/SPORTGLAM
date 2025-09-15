// src/pages/DashboardPage/WatchDetail.js
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./WatchDetail.css";
import Imagen4 from "../../img/Imagen4.png";
import Reloj2 from "../../img/Reloj2.png";
import Reloj3 from "../../img/Reloj3.png";

const WatchDetail = () => {
  const { id } = useParams();

  // Base de datos simulada
  const watches = [
    {
      id: "1",
      name: "Reloj Deportivo Invicta Aviator 49298 - Black",
      price: "$299.900",
      oldPrice: "$999.900",
      discount: "-70%",
      image: Imagen4,
      gallery: [Imagen4, Reloj2, Reloj3],
      stock: "Pocas unidades en stock",
      description:
        "Vuela a nuevas alturas con los relojes Invicta Aviator. Esta gran colección fue diseñada para pilotos, muchos modelos de esta colección cuentan con Greenwich Mean Time, el reloj internacional de 24 horas utilizado por los pilotos de todo el mundo.",
    },
    {
      id: "2",
      name: "Reloj Casio Edifice",
      price: "$89.900",
      oldPrice: "$120.000",
      discount: "-25%",
      image: Reloj2,
      gallery: [Reloj2, Imagen4],
      stock: "Disponible",
      description:
        "Reloj Casio Edifice de diseño deportivo elegante con cronógrafo y calendario automático. Caja de acero inoxidable y resistencia al agua de 50m.",
    },
    {
      id: "3",
      name: "Reloj Fossil Clásico",
      price: "$159.900",
      oldPrice: "$200.000",
      discount: "-20%",
      image: Reloj3,
      gallery: [Reloj3, Imagen4],
      stock: "Disponible",
      description:
        "Reloj Fossil clásico con correa de cuero genuino, resistente al agua 30m, ideal para uso diario y elegante.",
    },
  ];

  const watch = watches.find((w) => w.id === id);
  const [selectedImg, setSelectedImg] = useState(watch?.image);

  if (!watch) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="watch-detail">
      {/* Sección Izquierda - Imágenes */}
      <div className="watch-images">
        <div className="main-image">
          <img src={selectedImg} alt={watch.name} />
        </div>
        <div className="thumbnails">
          {watch.gallery.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="thumbnail"
              onClick={() => setSelectedImg(img)}
              className={selectedImg === img ? "active" : ""}
            />
          ))}
        </div>
      </div>

      {/* Sección Derecha - Info */}
      <div className="watch-info">
        <h1>{watch.name}</h1>

        <div className="availability">
          <span className="status">Disponible</span>
          <span className="fast">Despachos en 24 horas hábiles</span>
        </div>

        <div className="price">
          <span className="old">{watch.oldPrice}</span>
          <span className="current">{watch.price}</span>
          <span className="discount">{watch.discount}</span>
        </div>

        <p className="description">{watch.description}</p>

        <div className="quantity">
          <label htmlFor="qty">Cant.</label>
          <input type="number" id="qty" defaultValue={1} min={1} />
        </div>

        <button className="add-cart">AGREGAR AL CARRITO</button>

        <p className="stock">{watch.stock}</p>

        <Link to="/featuredwatches" className="btn-back">
          ← Volver a Relojes
        </Link>
      </div>
    </div>
  );
};

export default WatchDetail;
