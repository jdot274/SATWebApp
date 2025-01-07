import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, BookOpen, Brain, Calculator } from 'lucide-react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';

interface PracticeTest {
  title: string;
  description: string;
  duration: string;
  questions: number;
  sections: {
    name: string;
    duration: string;
    questions: number;
  }[];
  difficulty: string;
}

const practiceTests: PracticeTest[] = [
  {
    title: 'Full-Length Linear Practice Test 1',
    description: 'Official SAT practice test with comprehensive coverage of all topics',
    duration: '180 min',
    questions: 154,
    difficulty: 'Medium-Hard',
    sections: [
      { name: 'Reading & Writing', duration: '64 min', questions: 54 },
      { name: 'Math', duration: '80 min', questions: 58 }
    ]
  },
  {
    title: 'Full-Length Linear Practice Test 2',
    description: 'Comprehensive practice test focusing on critical thinking and analysis',
    duration: '180 min',
    questions: 154,
    difficulty: 'Hard',
    sections: [
      { name: 'Reading & Writing', duration: '64 min', questions: 54 },
      { name: 'Math', duration: '80 min', questions: 58 }
    ]
  },
  {
    title: 'Full-Length Linear Practice Test 3',
    description: 'Practice test with emphasis on advanced problem-solving skills',
    duration: '180 min',
    questions: 154,
    difficulty: 'Medium',
    sections: [
      { name: 'Reading & Writing', duration: '64 min', questions: 54 },
      { name: 'Math', duration: '80 min', questions: 58 }
    ]
  },
  {
    title: 'Full-Length Linear Practice Test 4',
    description: 'Comprehensive assessment with varied question types',
    duration: '180 min',
    questions: 154,
    difficulty: 'Medium-Hard',
    sections: [
      { name: 'Reading & Writing', duration: '64 min', questions: 54 },
      { name: 'Math', duration: '80 min', questions: 58 }
    ]
  },
  {
    title: 'Full-Length Linear Practice Test 5',
    description: 'Practice test featuring latest SAT question formats',
    duration: '180 min',
    questions: 154,
    difficulty: 'Medium',
    sections: [
      { name: 'Reading & Writing', duration: '64 min', questions: 54 },
      { name: 'Math', duration: '80 min', questions: 58 }
    ]
  },
  {
    title: 'Full-Length Linear Practice Test 6',
    description: 'Comprehensive test with focus on time management',
    duration: '180 min',
    questions: 154,
    difficulty: 'Hard',
    sections: [
      { name: 'Reading & Writing', duration: '64 min', questions: 54 },
      { name: 'Math', duration: '80 min', questions: 58 }
    ]
  }
];

const TestSelectionPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950
                    flex flex-col relative overflow-x-hidden">
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
        <h1 className="text-4xl font-bold text-white/90 text-center mb-12
                     backdrop-blur-md bg-white/5 px-8 py-4 rounded-2xl
                     border border-white/10 max-w-2xl mx-auto">
          Practice Tests
        </h1>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {practiceTests.map((test) => (
            <div
              key={test.title}
              onClick={() => navigate('/test-viewer')}
              className="group cursor-pointer"
            >
              <div className="relative backdrop-blur-md bg-white/5 rounded-2xl p-8
                           border border-white/10 overflow-hidden
                           transition-all duration-300
                           hover:bg-white/10 hover:scale-[1.02]">
                {/* Background gradient */}
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-600 to-blue-400" />

                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400
                                p-2.5 text-white shadow-lg">
                    <Clock className="w-full h-full" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{test.title}</h3>
                  <p className="text-base text-white/60 mb-6">{test.description}</p>

                  <div className="space-y-6">
                    <div className="backdrop-blur-xl bg-white/5 rounded-lg p-4 border border-white/10">
                      {test.sections.map((section, index) => (
                        <div key={index} className="flex justify-between items-center py-2
                                                  border-b border-white/10 last:border-0">
                          <span className="text-sm text-white/90">{section.name}</span>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-white/60">{section.duration}</span>
                            <span className="text-sm text-white/60">{section.questions} questions</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <span className="text-sm text-white/60">Total Duration</span>
                      <span className="text-sm text-white/90">{test.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/60">Total Questions</span>
                      <span className="text-sm text-white/90">{test.questions}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/60">Difficulty</span>
                      <span className="text-sm text-white/90">{test.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-12"></div>
      </main>
    </div>
  );
};

export default TestSelectionPage;