import React, { useRef } from "react";
import * as THREE from "three";
import { Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

import "./Scene.css";
import EarthDayMap from "../../Images/Textures/8k_earth_daymap.jpg";
import EarthCloudMap from "../../Images/Textures/8k_earth_clouds.jpg";
import EarthNightMap from "../../Images/Textures/8k_earth_nightmap.jpg";
import EarthNormalMap from "../../Images/Textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../Images/Textures/8k_earth_specular_map.jpg";

const RenderEarth = () => {
  const [dayMap, cloudMap, nightMap, normalMap, specularMap] = useLoader(
    TextureLoader,
    [
      EarthDayMap,
      EarthCloudMap,
      EarthNightMap,
      EarthNormalMap,
      EarthSpecularMap,
    ]
  );
  const earthRef = useRef();
  const cloudRef = useRef();
  useFrame(({ clock }) => {
    const rotation = clock.getElapsedTime();

    earthRef.current.rotation.y = rotation / 6;
    cloudRef.current.rotation.y = rotation / 5;
  });
  return (
    <>
      <pointLight position={[2, 0, 7]} intensity={1.2} color={"#f6f3ea"} />

      <mesh ref={cloudRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} attach='geometry' />
        <meshPhongMaterial
          map={cloudMap}
          attach='material'
          opacity={0.4}
          transparent={true}
          depthWrite={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} attach='geometry' />
        <meshPhongMaterial specularMap={specularMap} attach='material' />
        <meshStandardMaterial
          map={dayMap}
          normalMap={normalMap}
          attach='material'
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
    </>
  );
};

/* <OrbitControls enablePan={true} panSpeed={1} zoomSpeed={1.6} /> */

export default function Scene() {
  return (
    <Canvas>
      <RenderEarth />
    </Canvas>
  );
}
