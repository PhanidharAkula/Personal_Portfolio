import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Crystal() {
  const mesh = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((_, dt) => {
    if (mesh.current) {
      mesh.current.rotation.x += dt * 0.12;
      mesh.current.rotation.y += dt * 0.18;
    }
    if (inner.current) {
      inner.current.rotation.y -= dt * 0.3;
      inner.current.rotation.z += dt * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[2.4, 1]} />
        {/* @ts-ignore — drei type quirks */}
        <MeshDistortMaterial
          color="#FF5E1F"
          distort={0.35}
          speed={1.2}
          metalness={0.6}
          roughness={0.2}
          emissive="#FF5E1F"
          emissiveIntensity={0.25}
        />
      </mesh>
      <mesh ref={inner} scale={1.18}>
        <icosahedronGeometry args={[2.4, 0]} />
        <meshBasicMaterial color="#C0E218" wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

export function SceneCrystal() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7], fov: 55 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 4, 4]} intensity={1.4} color="#FF5E1F" />
      <pointLight position={[-5, -3, 3]} intensity={1.0} color="#847FE3" />
      <Crystal />
    </Canvas>
  );
}
