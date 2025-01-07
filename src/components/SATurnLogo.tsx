import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DotSphere from './DotSphere';

const SATurnLogo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/')}
      className="flex items-center gap-4 cursor-pointer group"
    >
      <div className="w-16 h-16 relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl scale-150" />
        
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <DotSphere />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
          />
        </Canvas>

        {/* Inner glow */}
        <div className="absolute inset-4 rounded-full blur-md bg-blue-800/30 animate-pulse -z-10" />
      </div>

      <span className="text-2xl font-bold bg-clip-text text-transparent 
                     bg-gradient-to-r from-blue-600 to-blue-400
                     group-hover:from-blue-500 group-hover:to-blue-300
                     transition-all duration-300">
        SATurn
      </span>
    </div>
  );
};

export default SATurnLogo;