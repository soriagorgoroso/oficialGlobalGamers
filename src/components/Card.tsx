import React from "react";
import "./Card.css";

interface CardProps {
  width?: string; // Ancho de la tarjeta (por ejemplo, "200px")
  height?: string; // Alto de la tarjeta (por ejemplo, "300px")
  title: string; // Título de la tarjeta
  content?: string; // Contenido opcional
  imageUrl?: string; // Imagen de fondo opcional
}

const Card: React.FC<CardProps> = ({ width = "300px", height = "200px", content, imageUrl }) => {
  return (
    <div
      className="card"
      style={{
        width,
        height,
        backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        {content && <p className="card-description">{content}</p>}

      {/* <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {content && <p className="card-description">{content}</p>}
      </div> */}
    </div>
  );
};

export default Card;
