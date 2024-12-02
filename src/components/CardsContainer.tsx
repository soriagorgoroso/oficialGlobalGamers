import React from "react";
import Card from "./Card";
import "./CardsContainer.css";

const CardContainer: React.FC = () => {
  return (
    <div className="layout">
      {/* Encabezado */}
      <header className="layout-header">
        <button>Iniciar Sesión</button>
        <button>Registro</button>
        <nav>
          <a href="#">Patrocina un Evento</a>
          <a href="#">Directos</a>
          <a href="#">¿Quiénes Somos?</a>
        </nav>
      </header>

      {/* Contenido Principal */}
      <main className="layout-main">
        <Card
          title="Ranking"
          content="Clasificación de los mejores equipos."
          width="200px"
          height="200px"
          imageUrl="https://via.placeholder.com/300x150"
        />
        <Card
          title="Campeonatos"
          content="Participa en eventos épicos."
          width="200px"
          height="200px"
          imageUrl="https://via.placeholder.com/300x150"
        />
        <Card
          title="League of Legends"
          content="Campeonato 27/12 - 18:00 hs"
          width="200px"
          height="300px"
          imageUrl="https://via.placeholder.com/600x300"
        />
        <Card
          title="Inversiones"
          content="Oportunidades de inversión en esports."
          width="200px"
          height="200px"
        />
        <Card
          title="Noticias"
          content="Últimas noticias del mundo gamer."
          width="200px"
          height="200px"
          imageUrl="https://via.placeholder.com/300x150"
        />
        <Card
          title="Tienda Online"
          content="Compra productos exclusivos."
          width="200px"
          height="200px"
          imageUrl="https://via.placeholder.com/300x150"
        />
        <Card
          title="Contrataciones"
          content="Únete al equipo o busca talentos."
          width="300px"
          height="200px"
          imageUrl="https://via.placeholder.com/300x150"
        />
      </main>

      {/* Pie de página */}
      <footer className="layout-footer">
        Conviértete en Pro: Convierte tu pasión en una carrera
      </footer>
    </div>
  );
};

export default CardContainer;
