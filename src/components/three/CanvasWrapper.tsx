import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const CanvasWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* Luz general */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[-0, 0, 10]} intensity={4} color="violet" />

      {/* OrbitControls sin afectar al fondo */}
      <OrbitControls
        enableRotate={false}
        enablePan={false} // No mover la cámara lateralmente
        enableZoom={false} // No permitir zoom
        maxPolarAngle={Math.PI / 2} // Limita rotación en el eje Y
        minPolarAngle={Math.PI / 2} // Fija la cámara
      />

      {children}
    </Canvas>
  );
};

export default CanvasWrapper;
