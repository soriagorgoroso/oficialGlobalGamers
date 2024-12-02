import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { TextureLoader, Group } from "three";
import { useLoader } from "@react-three/fiber";

const Planet: React.FC = () => {
  const groupRef = useRef<Group>(null); // Referencia al grupo del planeta
  // Cargar texturas
  const texture = useLoader(TextureLoader, "/textures/GreyRock01_4K_BaseColor.png");
  const normalMap = useLoader(TextureLoader, "/textures/GreyRock01_4K_Normal.png");

  useFrame(() => {
    // Animación opcional para girar el planeta
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      <group ref={groupRef} position={[5, 0, 5]}>
        <mesh>
          <sphereGeometry args={[3, 64, 64]} />
          <meshStandardMaterial map={texture} normalMap={normalMap} />
        </mesh>
      </group>
    </>
  );
};

export default Planet;
