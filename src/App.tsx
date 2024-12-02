import React from "react";
import CanvasWrapper from "./components/three/CanvasWrapper";
import Planet from "./components/three/Planet";
import Background from "./components/three/BackGround";
import "./App.css";
import CardContainer from "./components/CardsContainer";

function App() {
  return (
    <div className="app">
      <CanvasWrapper>
        <Background />
        <Planet />
      </CanvasWrapper>
      <CardContainer/>
    </div>
  );
}

export default App;
