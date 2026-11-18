import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Central Glowing Spring Core
function SpringCore({ isMobile }) {
  const meshRef = useRef();
  const ringRef = useRef();
  const outerRingRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x -= delta * 0.5;
      ringRef.current.rotation.z += delta * 0.2;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.y += delta * 0.25;
      outerRingRef.current.rotation.z -= delta * 0.15;
    }
  });

  return (
    <group scale={isMobile ? 0.75 : 1}>
      {/* Dynamic Pulsing Central Core */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1.3, 0]} />
          <meshStandardMaterial
            color="#059669"
            emissive="#10b981"
            emissiveIntensity={0.65}
            roughness={0.2}
            metalness={0.85}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Orbiting Gyro Ring 1 (Spring Green) */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.9, 0.035, 16, 64]} />
        <meshStandardMaterial
          color="#34d399"
          emissive="#00ff88"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Orbiting Gyro Ring 2 (Cyber Cyan) */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.3, 0.025, 16, 64]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#00e5ff"
          emissiveIntensity={1.0}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Internal Energy Sphere */}
      <Sphere args={[0.7, 32, 32]}>
        <MeshDistortMaterial
          color="#10b981"
          emissive="#047857"
          emissiveIntensity={0.5}
          distort={0.35}
          speed={2}
          roughness={0.3}
        />
      </Sphere>
    </group>
  );
}

// Floating Microservice Data Nodes
function MicroserviceNodes({ count = 8, isMobile }) {
  const nodes = useMemo(() => {
    const total = isMobile ? Math.min(count, 4) : count;
    const temp = [];
    const colors = ["#10b981", "#06b6d4", "#6366f1", "#f59e0b"];

    for (let i = 0; i < total; i++) {
      const angle = (i / total) * Math.PI * 2;
      const radius = isMobile ? 2.5 + Math.random() * 0.8 : 3.2 + Math.random() * 1.4;
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * 3;
      const z = Math.sin(angle) * radius;
      const speed = 0.8 + Math.random() * 1.2;
      const color = colors[i % colors.length];

      temp.push({ position: [x, y, z], speed, color, scale: 0.22 + Math.random() * 0.18 });
    }
    return temp;
  }, [count, isMobile]);

  return (
    <>
      {nodes.map((node, idx) => (
        <Float
          key={idx}
          speed={node.speed * 1.5}
          rotationIntensity={1.5}
          floatIntensity={1.8}
        >
          <mesh position={node.position} scale={node.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.8}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

// Responsive Camera & Mouse Parallax Scene
function SceneContainer({ isMobile }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle mouse parallax damping
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (-state.pointer.y * Math.PI) / 10;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.05);
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-10, -5, -5]} intensity={1.5} color="#00ff88" />
      <pointLight position={[10, -5, 5]} intensity={1.5} color="#00e5ff" />
      
      <SpringCore isMobile={isMobile} />
      <MicroserviceNodes count={isMobile ? 5 : 10} isMobile={isMobile} />
    </group>
  );
}

// Main Export Component
export default function Hero3DCanvas() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="w-full h-[380px] sm:h-[450px] lg:h-[550px] relative cursor-grab active:cursor-grabbing">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-spring-400 border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <Canvas
          dpr={isMobile ? [1, 1.25] : [1, 2]}
          camera={{ position: [0, 0, isMobile ? 6.5 : 5.8], fov: 48 }}
          gl={{
            powerPreference: "high-performance",
            antialias: !isMobile,
            alpha: true,
          }}
        >
          <SceneContainer isMobile={isMobile} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 2.3}
          />
        </Canvas>
      </Suspense>

      {/* Decorative Glow Ring at Base of Canvas */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 sm:w-72 h-12 bg-spring-500/20 blur-2xl rounded-full pointer-events-none" />
    </div>
  );
}
