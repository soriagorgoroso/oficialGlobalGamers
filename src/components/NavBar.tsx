import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="navbar-button">Iniciar Sesión</button>
        <button className="navbar-button navbar-register">Registro</button>
      </div>
      <div className="navbar-right">
        <a href="#" className="navbar-link">Patrocina un Evento</a>
        <a href="#" className="navbar-link">Directos</a>
        <a href="#" className="navbar-link">¿Quiénes Somos?</a>
      </div>
    </nav>
  );
};

export default Navbar;
