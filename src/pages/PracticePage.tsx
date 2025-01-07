import React, { useState } from 'react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import { SkillCard } from '../components/practice/SkillCard';
import { VocabInfoModal } from '../components/practice/VocabInfoModal';
import { skills } from '../data/practiceSkills';
import { BackgroundDemo } from '../components/backgrounds/demo/BackgroundDemo';

const PracticePage: React.FC = () => {
  const [showVocabInfo, setShowVocabInfo] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950
                    flex flex-col relative overflow-hidden">
      <PageLogo />
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Planet */}
        <div className="absolute w-[120vh] h-[120vh] rounded-full
                      bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950
                      -top-[90vh] left-[50%] transform -translate-x-1/2 -z-10
                      blur-sm" />

        {/* Atmosphere glow effect */}
        <div className="absolute w-[200vw] h-[100vh] -top-[50vh] -left-[50vw] 
                      bg-gradient-to-b from-blue-600/20 via-blue-800/10 to-transparent
                      blur-3xl transform -rotate-12" />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/90 to-slate-950" />
      </div>

      <Navigation />

      <main className="flex-1 relative z-10 container mx-auto px-4 py-4">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold text-white/90 text-center mb-12
                     backdrop-blur-md bg-white/5 px-8 py-4 rounded-2xl
                     border border-white/10 max-w-2xl mx-auto">
            Skills
          </h1>

          <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              skill={skill}
              onShowInfo={() => setShowVocabInfo(true)}
            />
          ))}
          </div>
          
          {/* Demo Content */}
          <div className="max-w-4xl mx-auto mt-20 pt-12 border-t border-white/10">
            <BackgroundDemo />
          </div>
        </div>

        {/* Vocabulary Info Modal */}
        {showVocabInfo && (
          <VocabInfoModal
            topic={skills[0].topics[3]}
            onClose={() => setShowVocabInfo(false)}
          />
        )}
      </main>
    </div>
  );
};

export default PracticePage;