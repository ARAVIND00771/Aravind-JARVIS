import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function CoreMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#0ea5e9"
          emissive="#0284c7"
          emissiveIntensity={2}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </Sphere>
      {/* Inner solid core */}
      <Sphere args={[0.8, 32, 32]}>
         <meshStandardMaterial 
            color="#38bdf8" 
            emissive="#38bdf8"
            emissiveIntensity={1}
            roughness={0.1}
            metalness={1}
         />
      </Sphere>
    </Float>
  );
}

export default function JarvisCore() {
  return (
    <div className="absolute inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <CoreMesh />
      </Canvas>
      {/* Overlay gradient to blend 3D with UI */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
    </div>
  );
}
