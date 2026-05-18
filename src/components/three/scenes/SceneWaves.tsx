import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Wave() {
  const mesh = useRef<THREE.Mesh>(null);
  const geo = useMemo(() => new THREE.PlaneGeometry(14, 14, 80, 80), []);
  const initial = useMemo(() => geo.attributes.position.array.slice() as Float32Array, [geo]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.elapsedTime;
    const pos = mesh.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < pos.length; i += 3) {
      const x = initial[i];
      const y = initial[i + 1];
      pos[i + 2] = Math.sin(x * 0.6 + t * 0.9) * 0.5 + Math.cos(y * 0.7 + t * 0.6) * 0.4;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.z = t * 0.05;
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2.4, 0, 0]} position={[0, -0.5, 0]} geometry={geo}>
      <meshStandardMaterial
        color="#F4ECD8"
        wireframe
        emissive="#FF5E1F"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export function SceneWaves() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 2.4, 6], fov: 55 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 4]} intensity={1.2} color="#FF5E1F" />
      <pointLight position={[-4, 3, 4]} intensity={0.6} color="#847FE3" />
      <Wave />
    </Canvas>
  );
}
