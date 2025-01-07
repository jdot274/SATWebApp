import React, { useEffect } from 'react';

const SplineViewer: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
      <spline-viewer
        url="https://prod.spline.design/vpImYv1Vpdjyp8nN/scene.splinecode"
        className="w-screen h-screen max-w-[1800px] max-h-[1800px] scale-[1.8] relative z-20"
      />
    </div>
  );
};

export default SplineViewer;