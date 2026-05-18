import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type PlanetConfig = {
  distance: number;
  size: number;
  color: string;
  speed: number;
  hasRings?: boolean;
  ringColor?: string;
  tilt?: number;
};

const PLANETS: PlanetConfig[] = [
  { distance: 2.0, size: 0.14, color: "#A47551", speed: 1.6 }, // Mercury
  { distance: 2.7, size: 0.22, color: "#E6CDA8", speed: 1.15 }, // Venus
  { distance: 3.5, size: 0.24, color: "#4A90E2", speed: 0.9 }, // Earth
  { distance: 4.4, size: 0.18, color: "#C26B4F", speed: 0.6, tilt: 0.2 }, // Mars
  { distance: 5.9, size: 0.46, color: "#D4A574", speed: 0.32 }, // Jupiter
  {
    distance: 7.4,
    size: 0.38,
    color: "#E8D8A8",
    speed: 0.22,
    hasRings: true,
    ringColor: "#C9B68A",
    tilt: 0.45,
  }, // Saturn
];

function Sun() {
  const mesh = useRef<THREE.Mesh>(null);
  const corona = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (mesh.current) mesh.current.rotation.y += 0.004;
    if (corona.current) corona.current.scale.setScalar(1 + Math.sin(t * 1.2) * 0.05);
  });

  return (
    <group>
      <mesh ref={mesh}>
        <sphereGeometry args={[0.85, 48, 48]} />
        <meshBasicMaterial color="#FF5E1F" />
      </mesh>
      <mesh ref={corona}>
        <sphereGeometry args={[1.05, 32, 32]} />
        <meshBasicMaterial color="#FFAA55" transparent opacity={0.22} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.45, 32, 32]} />
        <meshBasicMaterial color="#FF7A33" transparent opacity={0.08} />
      </mesh>
      <pointLight color="#FFC68C" intensity={2.2} distance={28} decay={1.2} />
    </group>
  );
}

function Planet({ config, initialAngle }: { config: PlanetConfig; initialAngle: number }) {
  const orbitRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * config.speed * 0.18 + initialAngle;
    if (orbitRef.current) {
      orbitRef.current.position.x = Math.cos(t) * config.distance;
      orbitRef.current.position.z = Math.sin(t) * config.distance;
    }
    if (planetRef.current) planetRef.current.rotation.y += 0.012;
  });

  return (
    <group ref={orbitRef} rotation={[0, 0, config.tilt ?? 0]}>
      <mesh ref={planetRef}>
        <sphereGeometry args={[config.size, 24, 24]} />
        <meshStandardMaterial color={config.color} roughness={0.85} metalness={0.05} />
      </mesh>
      {config.hasRings && (
        <mesh rotation={[Math.PI / 2.1, 0, 0]}>
          <ringGeometry args={[config.size * 1.6, config.size * 2.6, 64]} />
          <meshBasicMaterial
            color={config.ringColor ?? "#E8D8A8"}
            side={THREE.DoubleSide}
            transparent
            opacity={0.65}
          />
        </mesh>
      )}
    </group>
  );
}

function Orbits() {
  return (
    <group>
      {PLANETS.map((p, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[p.distance - 0.005, p.distance + 0.005, 192]} />
          <meshBasicMaterial color="#F4ECD8" transparent opacity={0.07} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

function AsteroidBelt() {
  const group = useRef<THREE.Group>(null);
  const rocks = useMemo(() => {
    const arr: { pos: [number, number, number]; size: number; rot: number }[] = [];
    for (let i = 0; i < 240; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 4.95 + Math.random() * 0.55;
      arr.push({
        pos: [Math.cos(angle) * r, (Math.random() - 0.5) * 0.12, Math.sin(angle) * r],
        size: 0.018 + Math.random() * 0.05,
        rot: Math.random() * Math.PI,
      });
    }
    return arr;
  }, []);

  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.04;
  });

  return (
    <group ref={group}>
      {rocks.map((r, i) => (
        <mesh key={i} position={r.pos} rotation={[r.rot, r.rot * 0.5, 0]}>
          <dodecahedronGeometry args={[r.size, 0]} />
          <meshStandardMaterial color="#7A6F5C" roughness={0.95} />
        </mesh>
      ))}
    </group>
  );
}

function StarField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(2200 * 3);
    for (let i = 0; i < 2200; i++) {
      const r = 30 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);
  const colors = useMemo(() => {
    const palette = [
      new THREE.Color("#F4ECD8"),
      new THREE.Color("#FFD9A8"),
      new THREE.Color("#A8C8FF"),
      new THREE.Color("#C0E218"),
    ];
    const arr = new Float32Array(2200 * 3);
    for (let i = 0; i < 2200; i++) {
      const c = palette[Math.floor(Math.random() * palette.length)];
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    return arr;
  }, []);

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.005;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} sizeAttenuation vertexColors transparent opacity={0.7} />
    </points>
  );
}

function SystemTilt() {
  // wrap everything orbital with a slight ecliptic tilt for cinematic angle
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.02;
  });
  return (
    <group ref={group} rotation={[0.32, 0, 0]}>
      <Sun />
      <Orbits />
      {PLANETS.map((p, i) => (
        <Planet
          key={i}
          config={p}
          initialAngle={(i / PLANETS.length) * Math.PI * 2}
        />
      ))}
      <AsteroidBelt />
    </group>
  );
}

export function SceneSolarSystem() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 4.5, 13], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.18} />
      <StarField />
      <SystemTilt />
    </Canvas>
  );
}
