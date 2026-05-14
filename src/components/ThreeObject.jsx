import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

export default function ThreeObject() {
  return (
    <Canvas camera={{ position: [0, 0.8, 6], fov: 42 }}>
      <ambientLight intensity={1.25} />
      <directionalLight position={[4, 5, 4]} intensity={1.8} />
      <pointLight position={[-3, 2, 3]} intensity={1.4} color="#22D3EE" />
      <pointLight position={[3, -1, 2]} intensity={1.2} color="#8B5CF6" />

      <Float speed={1.8} rotationIntensity={0.45} floatIntensity={1}>
        <RobotModel />
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.9}
      />
    </Canvas>
  );
}

function RobotModel() {
  const robotRef = useRef();

  useFrame((state) => {
    if (robotRef.current) {
      robotRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.8) * 0.22;
    }
  });

  // Increased scale from 0.72 to 0.92 to make robot bigger
  return (
    <group ref={robotRef} position={[0, -0.15, 0]} scale={0.92}>
      {/* Head */}
      <mesh position={[0, 1.45, 0]}>
        <boxGeometry args={[1.45, 1.15, 1.15]} />
        <meshStandardMaterial
          color="#162033"
          metalness={0.7}
          roughness={0.22}
        />
      </mesh>

      {/* Head top accent */}
      <mesh position={[0, 2.1, 0]}>
        <boxGeometry args={[0.75, 0.12, 0.75]} />
        <meshStandardMaterial
          color="#3B82F6"
          emissive="#3B82F6"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.32, 1.58, 0.6]}>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={3}
        />
      </mesh>

      <mesh position={[0.32, 1.58, 0.6]}>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={3}
        />
      </mesh>

      {/* Mouth panel */}
      <mesh position={[0, 1.18, 0.6]}>
        <boxGeometry args={[0.55, 0.08, 0.06]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#38BDF8"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[1.85, 2.15, 1.05]} />
        <meshStandardMaterial
          color="#1E293B"
          metalness={0.72}
          roughness={0.22}
        />
      </mesh>

      {/* Chest core */}
      <mesh position={[0, 0.15, 0.56]}>
        <sphereGeometry args={[0.2, 24, 24]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={4}
        />
      </mesh>

      {/* Body accent strips */}
      <mesh position={[0, 0.65, 0.55]}>
        <boxGeometry args={[0.95, 0.12, 0.05]} />
        <meshStandardMaterial
          color="#3B82F6"
          emissive="#3B82F6"
          emissiveIntensity={1}
        />
      </mesh>

      <mesh position={[0, -0.25, 0.55]}>
        <boxGeometry args={[0.75, 0.12, 0.05]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Left arm */}
      <mesh position={[-1.25, 0.4, 0]} rotation={[0, 0, 0.22]}>
        <boxGeometry args={[0.42, 1.45, 0.42]} />
        <meshStandardMaterial
          color="#273449"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* Right arm */}
      <mesh position={[1.25, 0.4, 0]} rotation={[0, 0, -0.22]}>
        <boxGeometry args={[0.42, 1.45, 0.42]} />
        <meshStandardMaterial
          color="#273449"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* Left hand */}
      <mesh position={[-1.37, -0.5, 0]}>
        <sphereGeometry args={[0.2, 20, 20]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={1.4}
        />
      </mesh>

      {/* Right hand */}
      <mesh position={[1.37, -0.5, 0]}>
        <sphereGeometry args={[0.2, 20, 20]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={1.4}
        />
      </mesh>

      {/* Left leg */}
      <mesh position={[-0.42, -1.62, 0]}>
        <boxGeometry args={[0.48, 1.45, 0.48]} />
        <meshStandardMaterial
          color="#273449"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* Right leg */}
      <mesh position={[0.42, -1.62, 0]}>
        <boxGeometry args={[0.48, 1.45, 0.48]} />
        <meshStandardMaterial
          color="#273449"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* Feet */}
      <mesh position={[-0.42, -2.48, 0.18]}>
        <boxGeometry args={[0.65, 0.28, 0.85]} />
        <meshStandardMaterial
          color="#334155"
          metalness={0.65}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[0.42, -2.48, 0.18]}>
        <boxGeometry args={[0.65, 0.28, 0.85]} />
        <meshStandardMaterial
          color="#334155"
          metalness={0.65}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}
