import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Network() {
  const group = useRef<THREE.Group>(null);

  const { nodes, lineGeo } = useMemo(() => {
    const count = 60;
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      nodes.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
    }
    const positions: number[] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.6) {
          positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
          positions.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return { nodes, lineGeo };
  }, []);

  useFrame((_, dt) => {
    if (group.current) {
      group.current.rotation.y += dt * 0.12;
      group.current.rotation.x += dt * 0.04;
    }
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#C0E218" transparent opacity={0.45} />
      </lineSegments>
      {nodes.map((n, i) => (
        <mesh key={i} position={n}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial color={i % 7 === 0 ? "#FF5E1F" : "#F4ECD8"} />
        </mesh>
      ))}
    </group>
  );
}

export function SceneNetwork() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 55 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.6} />
      <Network />
    </Canvas>
  );
}
