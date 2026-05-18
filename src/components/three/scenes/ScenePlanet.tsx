import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Planet() {
  const planet = useRef<THREE.Mesh>(null);
  const orbit1 = useRef<THREE.Group>(null);
  const orbit2 = useRef<THREE.Group>(null);

  const ringGeo = useMemo(() => new THREE.TorusGeometry(3.2, 0.005, 8, 200), []);
  const ringGeo2 = useMemo(() => new THREE.TorusGeometry(2.7, 0.005, 8, 200), []);

  const positions1 = useMemo(() => {
    const arr = new Float32Array(40 * 3);
    for (let i = 0; i < 40; i++) {
      const a = (i / 40) * Math.PI * 2;
      arr[i * 3] = Math.cos(a) * 3.2;
      arr[i * 3 + 1] = Math.sin(a) * 3.2;
      arr[i * 3 + 2] = 0;
    }
    return arr;
  }, []);

  useFrame((_, dt) => {
    if (planet.current) planet.current.rotation.y += dt * 0.12;
    if (orbit1.current) orbit1.current.rotation.z += dt * 0.4;
    if (orbit2.current) orbit2.current.rotation.x -= dt * 0.5;
  });

  return (
    <group>
      <mesh ref={planet}>
        <sphereGeometry args={[2, 32, 16]} />
        <meshBasicMaterial color="#F4ECD8" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.96, 32, 16]} />
        <meshStandardMaterial color="#0A0908" emissive="#FF5E1F" emissiveIntensity={0.18} />
      </mesh>

      <group ref={orbit1} rotation={[Math.PI * 0.18, 0, 0]}>
        <mesh geometry={ringGeo}>
          <meshBasicMaterial color="#C0E218" transparent opacity={0.6} />
        </mesh>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions1, 3]} />
          </bufferGeometry>
          <pointsMaterial size={0.06} color="#FF5E1F" />
        </points>
      </group>

      <group ref={orbit2} rotation={[Math.PI * 0.5, Math.PI * 0.2, 0]}>
        <mesh geometry={ringGeo2}>
          <meshBasicMaterial color="#847FE3" transparent opacity={0.45} />
        </mesh>
      </group>
    </group>
  );
}

export function ScenePlanet() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 1, 8], fov: 55 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 4, 5]} intensity={1.2} color="#FF5E1F" />
      <Planet />
    </Canvas>
  );
}
