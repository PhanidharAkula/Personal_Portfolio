import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Galaxy() {
  const points = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 8000;
    const branches = 5;
    const radius = 5.5;
    const spin = 1.4;
    const randomness = 0.35;
    const randomnessPower = 3.2;

    const inside = new THREE.Color("#FF5E1F"); // plasma core
    const mid = new THREE.Color("#C0E218"); // acid mid-arms
    const outside = new THREE.Color("#847FE3"); // lavender outer

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = Math.pow(Math.random(), 1.6) * radius;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      const spinAngle = r * spin;

      const rx =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        r;
      const ry =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        r *
        0.25;
      const rz =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        r;

      positions[i3] = Math.cos(branchAngle + spinAngle) * r + rx;
      positions[i3 + 1] = ry;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + rz;

      const t = r / radius;
      const c = new THREE.Color();
      if (t < 0.5) c.copy(inside).lerp(mid, t * 2);
      else c.copy(mid).lerp(outside, (t - 0.5) * 2);

      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    return { positions, colors };
  }, []);

  useFrame((_, dt) => {
    if (points.current) {
      points.current.rotation.y += dt * 0.06;
      points.current.rotation.x = Math.PI * 0.18;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
        transparent
        opacity={0.85}
      />
    </points>
  );
}

function GalaxyCore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.4;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI * 0.18, 0, 0]}>
      <sphereGeometry args={[0.45, 24, 24]} />
      <meshBasicMaterial color="#FFAA55" transparent opacity={0.55} />
    </mesh>
  );
}

function FarStars() {
  const positions = useMemo(() => {
    const arr = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const r = 25 + Math.random() * 35;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);
  const ref = useRef<THREE.Points>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.01;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#F4ECD8" sizeAttenuation transparent opacity={0.55} />
    </points>
  );
}

function CoreGlow() {
  return (
    <mesh rotation={[Math.PI * 0.18, 0, 0]}>
      <sphereGeometry args={[1.4, 24, 24]} />
      <meshBasicMaterial color="#FF7A33" transparent opacity={0.08} />
    </mesh>
  );
}

export function SceneGalaxy() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 4, 8.5], fov: 55 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.2} />
      <FarStars />
      <CoreGlow />
      <GalaxyCore />
      <Galaxy />
    </Canvas>
  );
}
