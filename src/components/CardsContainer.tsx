import React from "react";
import Card from "./Card";
import "./CardsContainer.css";

const CardContainer: React.FC = () => {
  return (
    <div className="card-container">
      {/* Columna izquierda */}
      <div className="column">
        <Card title="Ranking" content="Clasificación de los mejores equipos." width="250px" height="80px" />
        <Card title="Inversiones" content="Oportunidades de inversión en esports." width="250px" height="100px" />
        <Card title="Noticias" content="Últimas noticias del mundo gamer." width="250px" height="120px" />
      </div>
      <div className="column">
      {/* Columna central */}
        <Card title="Campeonatos" content="Participa en eventos épicos." width="250px" height="316px" />
     
      </div>

      {/* Columna derecha */}
      <div className="column">
        <Card title="Campeonatos" content="Participa en eventos épicos." width="250px" height="100px" />
        <Card title="Tienda Online" content="Compra productos exclusivos." width="250px" height="100px" />
        <Card title="Contrataciones" content="Únete al equipo o busca talentos." width="250px" height="100px" />
      </div>
    </div>
  );
};

export default CardContainer;
