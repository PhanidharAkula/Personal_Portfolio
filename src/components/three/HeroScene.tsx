import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const count = 2200;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#FF5E1F"),
      new THREE.Color("#C0E218"),
      new THREE.Color("#847FE3"),
      new THREE.Color("#F4ECD8"),
    ];
    for (let i = 0; i < count; i++) {
      const c = palette[Math.floor(Math.random() * palette.length)];
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    return arr;
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.04;
    points.current.rotation.x += delta * 0.012;
    const target = points.current;
    target.rotation.x += (mouse.current.y * 0.2 - target.rotation.x) * 0.02;
    target.rotation.y += (mouse.current.x * 0.2 - target.rotation.y) * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}

function Wireframe() {
  const torus = useRef<THREE.Mesh>(null);
  const icosa = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (torus.current) {
      torus.current.rotation.x += delta * 0.18;
      torus.current.rotation.y += delta * 0.13;
    }
    if (icosa.current) {
      icosa.current.rotation.y -= delta * 0.22;
      icosa.current.rotation.z += delta * 0.06;
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.04;
      icosa.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      <mesh ref={torus} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.6, 0.34, 220, 32, 2, 5]} />
        <meshStandardMaterial
          color="#F4ECD8"
          wireframe
          emissive="#FF5E1F"
          emissiveIntensity={0.18}
          metalness={0.2}
          roughness={0.6}
        />
      </mesh>
      <mesh ref={icosa} position={[0, 0, 0]}>
        <icosahedronGeometry args={[2.7, 1]} />
        <meshBasicMaterial color="#C0E218" wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function Stars() {
  const stars = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 60;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 60;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (stars.current) stars.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={stars}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#F4ECD8" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 9], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.65} />
      <pointLight position={[6, 4, 4]} intensity={1.2} color="#FF5E1F" />
      <pointLight position={[-5, -3, 3]} intensity={0.8} color="#847FE3" />
      <Stars />
      <ParticleField />
      <Wireframe />
    </Canvas>
  );
}
