import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import Sphere from '../Sphere';
import WelcomeBubble from '../WelcomeBubble';
import OrbConsole from '../OrbConsole';
import TestOptions from '../TestOptions';

interface MainContentProps {
  scrollToSATExplained: () => void;
  isSignedIn: boolean;
}

export const MainContent: React.FC<MainContentProps> = ({
  scrollToSATExplained,
  isSignedIn
}) => {
  const navigate = useNavigate();
  const testOptionsRef = useRef<HTMLDivElement>(null);

  const scrollToTestOptions = () => {
    testOptionsRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div className="relative z-20 flex flex-col items-center min-h-[calc(100vh-80px)] pt-20">
      <WelcomeBubble 
        onShowSATExplained={scrollToSATExplained}
        onStartJourney={scrollToTestOptions}
      />
      
      {/* Pill Shape */}
      <div className="relative max-w-xl mx-auto">
        {/* Outer glow effect */}
        <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/30 via-blue-400/20 to-blue-600/30 
                      rounded-[100px] blur-2xl opacity-90 animate-pulse" />
        
        {/* Main pill shape */}
        <div className="relative backdrop-blur-xl rounded-[100px] p-8 overflow-hidden
                      bg-gradient-to-b from-white/20 via-white/10 to-transparent
                      shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2),0_8px_32px_rgba(31,38,135,0.37)]
                      border-t border-l border-white/30 border-b border-r border-white/10
                      group transition-all duration-300
                      hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.3),0_12px_40px_rgba(31,38,135,0.45)]
                      hover:border-t-white/40 hover:border-l-white/40">
          
          {/* Inner bevel highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
          
          {/* Shine effect */}
          <div className="absolute -inset-full h-[400%] w-[200%] bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0
                        group-hover:opacity-20 transform -translate-y-[100%] animate-shine z-0" />
          
          <div className="relative flex items-center justify-center gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold bg-gradient-to-br from-white via-blue-100 to-blue-200 
                         bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]">1500+</p>
              <p className="text-sm text-white/60">Students</p>
            </div>
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
            <div className="text-center">
              <p className="text-3xl font-bold bg-gradient-to-br from-white via-blue-100 to-blue-200
                         bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]">95%</p>
              <p className="text-sm text-white/60">Success Rate</p>
            </div>
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
            <div className="text-center">
              <p className="text-3xl font-bold bg-gradient-to-br from-white via-blue-100 to-blue-200
                         bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]">200+</p>
              <p className="text-sm text-white/60">Practice Tests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sphere Background */}
      <div className="relative w-full h-[360px] -mt-32 mb-20 z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <Sphere />
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Quick Actions */}
        <OrbConsole />

        {/* Test Options */}
        <div ref={testOptionsRef} className="mt-20">
          <TestOptions />
        </div>

        {/* Learn About SAT Button */}
        <div className="text-center mt-20">
          <button
            onClick={scrollToSATExplained}
            className="px-6 py-3 rounded-lg backdrop-blur-xl border border-purple-500/30 
                     bg-purple-500/20 text-purple-400 hover:bg-purple-500/30
                     transition-all duration-300 flex items-center gap-2 font-medium
                     mx-auto"
          >
            <BookOpen className="w-5 h-5" />
            <span>The SAT Explained</span>
          </button>
        </div>
      </div>
    </div>
  );
};