import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, Download, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SATExplainedModal from '../../SATExplainedModal';
import { Button } from '@/components/ui/button';
import { AnimatedBackground } from '../../AnimatedBackground';
import PageLogo from '@/components/PageLogo';
import { SectionContent } from './SectionContent';
import { SectionHeader } from './SectionHeader';
import { TableContent } from './TableContent';
import { ScoreSection } from './ScoreSection';
import { ScoringSection } from './ScoringSection';

export const BackgroundDemo: React.FC = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScoreExpanded, setIsScoreExpanded] = useState(false);
  const [isScoringExpanded, setIsScoringExpanded] = useState(false);
  const [showSATInfo, setShowSATInfo] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <PageLogo />
      <AnimatedBackground />
      
      <header className="relative z-10 p-4">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="What Does the SAT Cover?"
            isExpanded={isExpanded}
            onToggle={() => setIsExpanded(!isExpanded)}
          >
            <SectionContent isExpanded={isExpanded}>
              <p className="text-white/70 leading-relaxed">
                The SAT has two main sections: Reading and Writing, followed by Math. Both of these sections are 
                separated into modules. So you'll take the two Reading and Writing modules, have a ten-minute 
                break, then take the two Math modules. <span className="text-white font-medium">Most SAT questions are multiple choice</span>, 
                but eleven questions on the Math section will be grid-ins.
              </p>

              <TableContent />
            </SectionContent>
          </SectionHeader>

          <ScoringSection
            isExpanded={isScoringExpanded}
            onToggle={() => setIsScoringExpanded(!isScoringExpanded)}
          />

          <ScoreSection
            isExpanded={isScoreExpanded}
            onToggle={() => setIsScoreExpanded(!isScoreExpanded)}
          />

          <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white/90">Animated Background Demo</h2>
              <a 
                href="/download/animated-background.zip" 
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-blue-500/20 border border-blue-500/30 
                         text-blue-400 hover:bg-blue-500/30 
                         transition-all duration-300
                         hover:scale-105 active:scale-95"
              >
                <Download className="w-5 h-5" />
                <span>Download Files</span>
              </a>
            </div>
            <div className="space-y-4">
              <p className="text-white/70">
                A beautiful animated background with flowing waves and particles,
                perfect for creating immersive user experiences.
              </p>
              <div className="text-sm text-white/60">
                Includes: AnimatedBackground.tsx, styles.css, and usage examples
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button
              onClick={() => setShowSATInfo(true)}
              className="px-6 py-3 rounded-lg backdrop-blur-xl border border-purple-500/30 
                       bg-purple-500/20 text-purple-400 hover:bg-purple-500/30
                       transition-all duration-300 flex items-center gap-2 font-medium
                       mx-auto"
            >
              <BookOpen className="w-5 h-5" />
              <span>The SAT Explained</span>
            </button>
          </div>

          {showSATInfo && (
            <SATExplainedModal onClose={() => setShowSATInfo(false)} />
          )}
        </div>
      </main>
    </div>
  );
};