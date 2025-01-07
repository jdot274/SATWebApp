import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Book, BookOpen, ClipboardCheck, Home, Layers, LayoutGrid, LineChart, TestTube2, Waves } from 'lucide-react';

const navItemStyles = {
  base: "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2",
  default: "text-white/70 hover:text-white hover:bg-white/10",
  active: "bg-white/20 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
};

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: TestTube2, label: 'Tests', path: '/tests' },
    { icon: BookOpen, label: 'Background', path: '/practice' },
    { icon: LineChart, label: 'Progress', path: '/progress' },
    { icon: ClipboardCheck, label: 'Practice', path: '/review' },
    { icon: LayoutGrid, label: 'Flash Cards', path: '/practice/flashcards' },
    { icon: Book, label: 'Vocabulary', path: '/vocabulary' },
    { icon: Waves, label: 'Pink', path: '/background-demo-2' },
    { icon: Layers, label: 'Glassmorphic UI', path: '/glassmorphic' },
  ];

  return (
    <nav className="sticky top-0 z-50 flex justify-center py-4 backdrop-blur-sm">
      <div className="relative">
        {/* Outer glow effect */}
        <div className="absolute -inset-1 bg-blue-500/30 rounded-3xl blur-lg animate-pulse" />
        
        {/* Main navigation container */}
        <div className="relative px-2 py-1.5 rounded-2xl border border-white/10
                      bg-gradient-to-b from-blue-500/20 to-blue-600/20 backdrop-blur-2xl
                      shadow-[0_4px_20px_rgba(59,130,246,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)]
                      flex items-center gap-1 mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`${navItemStyles.base} ${
                  isActive ? navItemStyles.active : navItemStyles.default
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;