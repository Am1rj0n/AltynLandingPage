"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

function GoldBarObjModel({ url }: { url: string }) {
  const meshRef = useRef<THREE.Group>(null);
  const obj = useLoader(OBJLoader, url);

  // Traverse the OBJ and apply a gold material
  React.useMemo(() => {
    obj.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: "#FDE047",
          metalness: 1,
          roughness: 0.1,
          envMapIntensity: 2.5,
        });
        // Center the geometry
        mesh.geometry.center();
      }
    });
  }, [obj]);

  // Mouse tilt interaction & constant rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base constant rotation (reduced intensity as requested)
      meshRef.current.rotation.y += delta * 0.06;
      
      // Add subtle mouse tilt - keeping it isometric-ish
      const targetX = (state.pointer.y * Math.PI) / 20;
      // Math.PI / 6 is a good starting point for isometric-style tilt
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX + Math.PI / 6, 0.1);
    }
  });

  return (
    <group ref={meshRef} dispose={null} rotation={[Math.PI / 6, Math.PI / 4, 0]}>
      <primitive object={obj} scale={0.75} />
    </group>
  );
}

export function FloatingGoldBar() {
  return (
    <div className="relative w-full max-w-[600px] h-[400px] md:h-[500px] mx-auto flex items-center justify-center">
      {/* Yellow glow behind the model */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[100%] h-[100%] bg-amber-500/15 blur-[140px] rounded-full" />
      </div>
      
      <div className="absolute inset-0 z-10 cursor-pointer">
        <Canvas shadows camera={{ position: [0, 0, 12], fov: 35 }}>
          <ambientLight intensity={0.6} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2.5} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
            <GoldBarObjModel url="/gold-bar.obj" />
          </Float>

          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
}
