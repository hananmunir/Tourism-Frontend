import React, { useRef } from "react";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import "./Scene.css";
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
    </>
  );
};
const EarthModel = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const rotation = clock.getElapsedTime();

    ref.current.rotation.y = rotation / 8;
  });
  return (
    <mesh ref={ref}>
      <Model />
    </mesh>
  );
};
export default function Scene() {
  return (
    <div className='scene-container'>
      <Canvas camera={{ position: [50, 50, 120], fov: 50 }}>
        <Suspense fallback={null}>
          <Lights />
          <EarthModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <div className='quoteTextBox'>
        <span className='quote'></span>
      </div>
    </div>
  );
}
