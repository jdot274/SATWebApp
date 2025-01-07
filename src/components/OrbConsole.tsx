import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Target, Activity } from 'lucide-react';

const OrbConsole: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 
                    p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                    flex flex-col items-center gap-6">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-200 to-blue-100 
                    bg-clip-text text-transparent">Quick Actions</h2>
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate('/practice')}
            className="px-6 py-3 rounded-xl backdrop-blur-xl bg-blue-500/20 
                     border border-blue-500/30 text-blue-400 
                     hover:bg-blue-500/30 transition-all duration-300
                     flex items-center gap-2 group shadow-lg
                     hover:shadow-blue-500/20 hover:scale-105"
          >
            <Brain className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Practice</span>
          </button>
          <button
            onClick={() => navigate('/tests')}
            className="px-6 py-3 rounded-xl backdrop-blur-xl bg-purple-500/20 
                     border border-purple-500/30 text-purple-400 
                     hover:bg-purple-500/30 transition-all duration-300
                     flex items-center gap-2 group shadow-lg
                     hover:shadow-purple-500/20 hover:scale-105"
          >
            <Target className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Tests</span>
          </button>
          <button
            onClick={() => navigate('/review')}
            className="px-6 py-3 rounded-xl backdrop-blur-xl bg-green-500/20 
                     border border-green-500/30 text-green-400 
                     hover:bg-green-500/30 transition-all duration-300
                     flex items-center gap-2 group shadow-lg
                     hover:shadow-green-500/20 hover:scale-105"
          >
            <Activity className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Review</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrbConsole;