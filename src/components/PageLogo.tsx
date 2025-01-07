import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DotSphere from './DotSphere';

const PageLogo: React.FC = () => {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = () => {
    if (window.location.pathname === '/') {
      scrollToTop();
    } else {
      navigate('/');
    }
  };

  return (
    <div className="fixed left-6 top-[2.5rem] z-20 flex items-center gap-1.5
                    cursor-pointer group z-[100]" onClick={handleClick}>
      <div className="w-14 h-14 relative">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full blur-xl bg-blue-600/30 animate-pulse" />
        
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
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
        <div className="absolute inset-4 rounded-full blur-md bg-blue-500/25 animate-pulse" />
      </div>

      <span className="text-lg font-bold bg-clip-text text-transparent 
                    bg-gradient-to-r from-blue-400 to-blue-200
                    group-hover:from-blue-300 group-hover:to-blue-100
                    transition-all duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
        SATurn
      </span>
    </div>
  );
};

export default PageLogo;