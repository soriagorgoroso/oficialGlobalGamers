import CanvasWrapper from "./components/three/CanvasWrapper";
import Planet from "./components/three/Planet";
import Background from "./components/three/BackGround";
import "./App.css";
import CardContainer from "./components/CardsContainer";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <CanvasWrapper>
        <Background />
        <Planet />
      </CanvasWrapper>
      <div className="app" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Navbar />

      <CardContainer />
    </div>
    </div>
  );
}

export default App;
