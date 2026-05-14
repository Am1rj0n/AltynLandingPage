"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PresentationControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function GoldBarModel(props: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} {...props} castShadow receiveShadow>
      {/* 
        A trapezoidal prism approximation. We can use a cylinder with 4 radial segments.
        Alternatively, a simple BoxGeometry scaled to look like a gold bar.
      */}
      <cylinderGeometry args={[1.2, 1.5, 4, 4, 1, false]} />
      <meshStandardMaterial
        color="#FDE047"
        metalness={1}
        roughness={0.15}
        envMapIntensity={2.5}
      />
    </mesh>
  );
}

export function InteractiveGoldBar() {
  return (
    <div className="w-full h-[500px] md:h-[700px] cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          {/* Rotate the cylinder so it lays flat */}
          <GoldBarModel rotation={[Math.PI / 2, Math.PI / 4, 0]} />
        </PresentationControls>

        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.7}
          scale={10}
          blur={2.5}
          far={4}
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
