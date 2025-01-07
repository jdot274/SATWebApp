import React, { useState, useRef, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import PageLogo from '../components/PageLogo';
import SplineViewer from '../components/SplineViewer';
import SATInfoSection from '../components/SATInfoSection';
import { useAuth } from '../contexts/AuthContext';
import { BackgroundElements } from '../components/landing/BackgroundElements';
import { TopButtons } from '../components/landing/TopButtons';
import { MainContent } from '../components/landing/MainContent';

const LandingPage1: FC = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [isCoverExpanded, setCoverExpanded] = useState(false);
  const [isScoringExpanded, setScoringExpanded] = useState(false);
  const satExplainedRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToSATExplained = () => {
    satExplainedRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  return (
    <div ref={topRef} className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950
                    flex flex-col relative overflow-hidden select-none">
      <BackgroundElements />
      <SplineViewer />
      <PageLogo />
      <Navigation />
      <TopButtons />

      <MainContent
        showFeatures={showFeatures}
        setShowFeatures={setShowFeatures}
        scrollToSATExplained={scrollToSATExplained}
        isSignedIn={isSignedIn}
      />

      {/* SAT Explained Section */}
      <div ref={satExplainedRef}>
        {/* Return to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-purple-500/20 border border-purple-500/30
                   text-purple-400 hover:bg-purple-500/30 transition-all duration-300 z-50
                   hover:scale-110 active:scale-95"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
        <SATInfoSection />
      </div>
    </div>
  );
};

export default LandingPage1;