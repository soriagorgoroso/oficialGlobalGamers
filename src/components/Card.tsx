import React from "react";
import "./Card.css";

interface CardProps {
  width?: string; // Ancho personalizado (ej. "200px", "50%")
  height?: string; // Alto personalizado (ej. "300px", "100%")
  title: string; // Título de la card
  content?: string; // Contenido opcional
  imageUrl?: string; // URL de la imagen opcional
}

const Card: React.FC<CardProps> = ({ width = "300px", height = "200px", title, content, imageUrl }) => {
  return (
    <div className="card" style={{ width, height }}>
      {imageUrl && (
        <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {content && <p className="card-description">{content}</p>}
      </div>
    </div>
  );
};

export default Card;
