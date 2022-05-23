import React from "react";
import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default function Model() {
  const gltf = useLoader(GLTFLoader, "/Textures/Earth/scene.gltf");
  gltf.scene.scale.set(0.8, 0.8, 0.8);
  return (
    <>
      <primitive position={[0, 0, 0]} object={gltf.scene} dispose={null} />
    </>
  );
}
