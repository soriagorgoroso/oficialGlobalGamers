import React from "react";
import { Stars } from "@react-three/drei";

const Background: React.FC = () => {
  return (
    <group>
      <Stars
        radius={100}        // Radio del fondo
        depth={50}          // Profundidad de las estrellas
        count={5000}        // Número de estrellas
        factor={4}          // Tamaño de agrupación
        saturation={0}      // Saturación del color
        fade={true}         // Desvanecimiento
      />
    </group>
  );
};

export default Background;
