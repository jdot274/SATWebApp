import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh, Color, Vector3, MeshStandardMaterial } from 'three';

function GridSphere() {
  const sphereRef = useRef<Mesh>(null);
  const glowRef = useRef<Mesh>(null);
  const raysRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.001;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y += 0.002;
      glowRef.current.scale.setScalar(1.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05);
    }
    if (raysRef.current) {
      raysRef.current.rotation.z += 0.001;
      raysRef.current.scale.setScalar(1.2 + Math.sin(state.clock.elapsedTime) * 0.1);
    }
  });

  return (
    <>
      {/* Grid Sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#0066ff"
          emissive="#0044ff"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Inner Glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.98, 32, 32]} />
        <meshBasicMaterial
          color="#00aaff"
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Light Rays */}
      <mesh ref={raysRef}>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial
          color="#0088ff"
          transparent
          opacity={0.1}
          depthWrite={false}
          blending={2}
        />
      </mesh>
    </>
  );
}

const Sphere: React.FC = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
      <div className="relative w-[360px] h-[360px]">
        <Canvas 
          camera={{ position: [0, 0, 4], fov: 45 }}
          style={{ background: 'transparent', width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#0088ff" />
          <pointLight position={[-10, -10, -10]} intensity={2} color="#0044ff" />
          
          <GridSphere />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>

      </div>
    </div>
  );
};

export default Sphere;