import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Undo2, Check, X, Sparkles, Code } from 'lucide-react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import { FlashcardBackground } from '../components/FlashcardBackground';
import { useDevMode } from '../contexts/DevModeContext';
import EditableText from '../components/EditableText';

interface Flashcard {
  question: string;
  answer: string;
  options?: string[];
  correctAnswer?: string;
}

const mockFlashcards: Flashcard[] = [
  {
    question: "A car manufacturer produces x cars per day. After upgrading their equipment, daily production increased by 25%. Which equation represents the new daily production?",
    options: [
      "0.25x",
      "1.25x",
      "2.5x",
      "x + 25"
    ],
    correctAnswer: "B",
    answer: "The new production quantity represents 100% of the original amount plus a 25% increase. This means we need 125% of the original amount. We can write this as a decimal by dividing 125 by 100, giving us 1.25. Therefore, the new daily production is 1.25x cars. While option A (0.25x) represents just the increase, and option D (x + 25) incorrectly adds 25 as a number rather than a percentage, 1.25x correctly captures the entire new quantity."
  },
  {
    question: "In right triangle ABC with hypotenuse c, if sin A = 4/5, what is cos A?",
    options: [
      "3/5",
      "4/5",
      "5/4",
      "5/3"
    ],
    correctAnswer: "A",
    answer: "In a right triangle, the Pythagorean identity states that sin²θ + cos²θ = 1. We know that sin A = 4/5, so we can substitute this into the equation: (4/5)² + cos²A = 1. When we simplify (4/5)², we get 16/25. Subtracting 16/25 from 1 gives us cos²A = 9/25. Taking the square root of both sides yields cos A = 3/5, since we know the cosine must be positive in this case as the angle is in the first quadrant of a right triangle."
  },
  {
    question: "If 3x + 2y = 12 and y = x + 1, what is the value of x?",
    options: [
      "1",
      "2", 
      "3",
      "4"
    ],
    correctAnswer: "B",
    answer: "Let's solve this step by step using substitution. Since we know y = x + 1, we can substitute this expression for y in the first equation: 3x + 2(x + 1) = 12. When we distribute the 2, we get 3x + 2x + 2 = 12. Combining like terms gives us 5x + 2 = 12. Subtracting 2 from both sides yields 5x = 10. Finally, dividing both sides by 5 gives us x = 2. We can verify this is correct by finding y (y = 2 + 1 = 3) and checking that both original equations are satisfied."
  },
  {
    question: "A rectangle has length 3x and width 2x. If its perimeter is 40 units, what is the value of x?",
    options: [
      "2",
      "4",
      "5",
      "8"
    ],
    correctAnswer: "B",
    answer: "Let's think about this step by step. The perimeter of a rectangle includes all sides, so we're adding two lengths and two widths. We can write this as:\n2(length) + 2(width) = 40\n2(3x) + 2(2x) = 40\n6x + 4x = 40\n10x = 40\nx = 4\nTo verify this makes sense, let's check the dimensions when x = 4:\nLength = 3(4) = 12 units\nWidth = 2(4) = 8 units\nPerimeter = 2(12) + 2(8) = 24 + 16 = 40 units ✓"
  },
  {
    question: "If 15% of a number is 45, what is 25% of the same number?",
    options: [
      "60",
      "75",
      "80",
      "90"
    ],
    correctAnswer: "B",
    answer: "Let's solve this methodically. First, let's find the original number:\nIf 15% of n = 45\n0.15n = 45\nn = 45 ÷ 0.15 = 300 (this is our full number)\nNow that we know the original number is 300, we can find 25% of it:\n25% of 300 = 0.25 × 300 = 75\nAnother way to think about this: if 15% is 45, then 5% is 15. Therefore 25% (which is 5 times 5%) would be 5 × 15 = 75."
  },
  {
    question: "A store sells pencils at $2.50 per dozen. How many pencils can be purchased for $15?",
    options: [
      "48",
      "60",
      "72",
      "84"
    ],
    correctAnswer: "C",
    answer: "Let's work through this methodically:\nFirst, find the cost per dozen: $2.50/dozen\nThen calculate how many dozens we can buy with $15:\n$15 ÷ $2.50 = 6 dozens\nFinally, convert to individual pencils:\n6 dozens × 12 = 72 pencils"
  },
  {
    question: "If 3x + 5 = 17, then ax + b = 24, where a and b are constants. What is the value of a + b?",
    options: [
      "8",
      "9",
      "10",
      "12"
    ],
    correctAnswer: "D",
    answer: "From the first equation:\n3x + 5 = 17\n3x = 12\nx = 4\nSubstitute x = 4 into the second equation:\na(4) + b = 24\n4a + b = 24\nSince this is true, and ax + b = 24 must equal 3x + 5 transformed, we know:\na = 3 and b = 12 - 12 = 9\nTherefore, a + b = 3 + 9 = 12"
  },
  {
    question: "In the figure below, the radius of the circle is 5 units. What is the area of the shaded region?",
    options: [
      "25π - 50",
      "25π - 25",
      "25π - 40",
      "25π - 45"
    ],
    correctAnswer: "A",
    answer: "The area of the shaded region is the difference between:\n\nCircle area: πr² = π(5)² = 25π\nSquare area: side² = (5√2)² = 50\nTherefore: 25π - 50"
  },
  {
    question: "If log₃(x) = 4, what is the value of x?",
    options: [
      "12",
      "64",
      "81",
      "256"
    ],
    correctAnswer: "C",
    answer: "When we see log₃(x) = 4, this means:\n3⁴ = x\n3⁴ = 3 × 3 × 3 × 3 = 81\nTherefore, x = 81"
  },
  {
    question: "A triangle has vertices at points (0,0), (6,0), and (3,h). If the area of the triangle is 18 square units, what is the value of h?",
    options: [
      "3",
      "6",
      "9",
      "12"
    ],
    correctAnswer: "B",
    answer: "Area of a triangle = ½ × base × height\n18 = ½ × 6 × h\n36 = 6h\nh = 6"
  },
  {
    question: "If f(x) = x² - 5x + 6, what is the minimum value of f(x)?",
    options: [
      "-1",
      "0",
      "1",
      "2"
    ],
    correctAnswer: "B",
    answer: "To find the minimum value:\n\nFind vertex form: f(x) = (x - h)² + k\nComplete the square:\nx² - 5x + 6 = (x² - 5x + 25/4) - 25/4 + 6\n= (x - 5/2)² - 25/4 + 24/4\n= (x - 5/2)² - 1/4\nTherefore, minimum value is -1/4 + 1/4 = 0"
  },
  {
    question: "The sum of two numbers is 20, and their product is 96. What is the larger number?",
    options: [
      "8",
      "12",
      "14",
      "16"
    ],
    correctAnswer: "B",
    answer: "Let's call the numbers x and (20-x):\nx(20-x) = 96\n20x - x² = 96\nx² - 20x + 96 = 0\n(x - 12)(x - 8) = 0\nx = 12 or x = 8\nThe larger number is 12"
  },
  {
    question: "If sin(θ) = 0.6 and θ is in Quadrant II, what is cos(θ)?",
    options: [
      "0.8",
      "-0.8",
      "0.6",
      "-0.6"
    ],
    correctAnswer: "B",
    answer: "Using the Pythagorean identity:\nsin²(θ) + cos²(θ) = 1\n0.6² + cos²(θ) = 1\ncos²(θ) = 0.64\ncos(θ) = ±0.8\nSince θ is in Quadrant II, cos(θ) is negative\nTherefore, cos(θ) = -0.8"
  },
  {
    question: "A rectangle has a perimeter of 24 units. What is the maximum possible area?",
    options: [
      "32",
      "36",
      "40",
      "44"
    ],
    correctAnswer: "B",
    answer: "Let length = x and width = (12-x)\nArea = x(12-x) = 12x - x²\nMaximum occurs at vertex of parabola\nTake derivative: 12 - 2x = 0\nx = 6\nTherefore maximum area = 6 × 6 = 36"
  },
  {
    question: "If 5ⁿ⁺¹ = 625, what is the value of n?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: "B",
    answer: "5ⁿ⁺¹ = 625\n5ⁿ⁺¹ = 5⁴\nn + 1 = 4\nn = 3"
  }
];

const FlashcardPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDevMode, toggleDevMode } = useDevMode();
  const { title, color } = location.state || {};

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<number>>(new Set());
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());

  const handleCardClick = () => {
    if (showAnswer) {
      setIsFlipping(true);
      setTimeout(() => {
        setShowAnswer(false);
        setIsFlipping(false);
      }, 150);
      return;
    }

    setIsFlipping(true);
    setTimeout(() => {
      setShowAnswer(true);
      setIsFlipping(false);
    }, 150);
  };

  const handleNext = () => {
    if (currentIndex < mockFlashcards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
    }
  };

  const handleKnown = () => {
    const newKnown = new Set(knownCards);
    newKnown.add(currentIndex);
    setKnownCards(newKnown);
    handleNext();
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setKnownCards(new Set());
    setShowAnswer(false);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setIsFlipping(true);
    setTimeout(() => {
      setShowAnswer(true);
      setIsFlipping(false);
    }, 150);
  };

  const handleOptionClick = (index: number) => {
    setSelectedAnswer(String.fromCharCode(65 + index)); // Convert 0-3 to A-D
  };
  
  const handleTopicClick = (topic: string) => {
    setSelectedTopics(prev => {
      const newTopics = new Set(prev);
      if (newTopics.has(topic)) {
        newTopics.delete(topic);
      } else {
        newTopics.add(topic);
      }
      return newTopics;
    });
  };

  const handleBegin = () => {
    setShowFlashcards(true);
  };

  if (!showFlashcards) {
    return (
      <div className="h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950
                    flex flex-col relative overflow-hidden">
        <PageLogo />
        <FlashcardBackground />
        <Navigation />

        <main className="flex-1 relative z-10 container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Flash Cards Title */}
            <div className="text-center mb-8">
              <div className="px-8 py-3 rounded-xl bg-green-500/20 border border-green-500/30 
                           backdrop-blur-sm inline-block">
                <p className="text-4xl text-green-400 font-bold">Flash Cards</p>
              </div>
            </div>

            {/* Key Topics Section */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10
                         overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20
                           opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">Master Key Topics with Flash Cards</h3>
                <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
                  Choose specific areas to focus on or practice with a comprehensive set of flash cards
                  covering all essential SAT topics.
                </p>
                <div className="backdrop-blur-xl bg-white/5 rounded-lg p-4 mb-4
                             border border-white/10">
                  <p className="text-white/90 text-sm">Select Key Topic(s) to Study, or include all topics!</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="w-full mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Reading & Writing</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Reading Comprehension', 'Grammar & Usage', 'Writing Style', 'Expression of Ideas'].map((topic) => (
                        <span key={topic} 
                              onClick={() => handleTopicClick(topic)}
                              className={`text-xs px-3 py-1 rounded-full cursor-pointer
                                        transition-all duration-200 ${
                                          selectedTopics.has(topic)
                                            ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
                                            : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white'
                                        }`}>
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Math</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Algebra', 'Problem Solving', 'Advanced Mathematics', 'Data Analysis'].map((topic) => (
                        <span key={topic} 
                              onClick={() => handleTopicClick(topic)}
                              className={`text-xs px-3 py-1 rounded-full cursor-pointer
                                        transition-all duration-200 ${
                                          selectedTopics.has(topic)
                                            ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
                                            : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white'
                                        }`}>
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Begin Button */}
            <button
              onClick={handleBegin}
              className="w-full py-4 rounded-xl font-medium transition-all duration-300
                       bg-gradient-to-r from-blue-600 to-blue-400 text-white
                       hover:from-blue-500 hover:to-blue-300
                       focus:outline-none focus:ring-2 focus:ring-blue-500/50
                       shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40
                       transform hover:scale-[1.02] active:scale-[0.98]
                       flex items-center justify-center gap-2"
            >
              Begin!
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950
                    flex flex-col relative overflow-hidden">
      <PageLogo />
      <FlashcardBackground />

      <Navigation />

      <main className="flex-1 relative z-10 container mx-auto px-4 py-4 overflow-hidden">
        {/* Dev Mode Toggle */}
        <button
          onClick={toggleDevMode}
          className="fixed top-24 right-8 z-50 p-2 bg-white/5 border border-white/10 rounded-lg
                   hover:bg-white/10 transition-colors"
        >
          <Code className={`w-5 h-5 ${isDevMode ? 'text-green-400' : 'text-white/60'}`} />
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold bg-gradient-to-r ${color || 'from-blue-600 to-blue-400'} 
                       bg-clip-text text-transparent mb-4 flex items-center justify-center gap-3`}>
            <Sparkles className="w-8 h-8 text-blue-400" />
            {title || 'Practice Cards'}
            <Sparkles className="w-8 h-8 text-blue-400" />
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/60">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              {mockFlashcards.length} cards
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              {knownCards.size} mastered
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${color || 'from-blue-600 to-blue-400'} 
                       transition-all duration-300 animate-pulse`}
              style={{ width: `${((currentIndex + 1) / mockFlashcards.length) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white/90 transition-colors"
            >
              <Undo2 className="w-4 h-4" />
              <span>Reset Progress</span>
            </button>
            <span className="text-sm text-white/60">
              Card {currentIndex + 1} of {mockFlashcards.length}
            </span>
          </div>
        </div>

        {/* Flashcard */}
        <div 
          onClick={handleCardClick}
          className="max-w-3xl mx-auto aspect-[3/2.2] perspective-1000 cursor-pointer"
        >
          <div className={`relative w-full h-full transition-all duration-500 transform-style-preserve-3d
                        ${isFlipping ? 'rotate-y-180 scale-95' : 'rotate-y-0 scale-100'}`}>
            {/* Front */}
            <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-3xl p-8 
                         border border-white/10 flex flex-col shadow-2xl backface-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
              {!showAnswer ? (
                <div className="relative w-full flex-1">
                  <div className="flex justify-between mb-8">
                    <h2 className="text-4xl font-bold text-white/90">Question 1</h2>
                    <div className="flex gap-2">
                      <span className="px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 font-medium">Reading</span>
                      <span className="px-4 py-1 rounded-full bg-white/10 text-white/60 font-medium">Math</span>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <EditableText
                      text={mockFlashcards[currentIndex].question}
                      className="text-xl text-white/90"
                    />
                    <div className="space-y-2 flex flex-col items-stretch w-full max-w-[30%]">
                      {mockFlashcards[currentIndex].options?.map((option, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOptionClick(index);
                          }}>
                        <EditableText
                          text={option}
                          className={`text-left px-4 py-2 rounded-lg text-base transition-all duration-200
                                    ${selectedAnswer === String.fromCharCode(65 + index)
                                      ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                                      : 'bg-white/5 border-white/10 text-white/90 hover:bg-white/10'
                                    } border backdrop-blur-sm w-full`}
                        />
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSubmit();
                      }}
                      disabled={selectedAnswer === null}
                      className={`mt-8 px-6 py-3 rounded-lg text-base font-medium transition-all duration-200
                                ${selectedAnswer !== null
                                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                                  : 'bg-white/5 text-white/40 cursor-not-allowed'
                                }`}
                    >
                      Submit Answer
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative flex flex-col items-start text-left">
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 
                                bg-clip-text text-transparent mb-6">
                      {selectedAnswer === null
                        ? 'No answer selected'
                        : selectedAnswer === mockFlashcards[currentIndex].correctAnswer 
                        ? 'Correct!' 
                        : 'Incorrect'}
                    </h2>
                    <p className="text-2xl font-bold text-white">
                      {selectedAnswer !== null && selectedAnswer !== mockFlashcards[currentIndex].correctAnswer && (
                        <span className="text-red-400">
                          Your answer: ({selectedAnswer}) {mockFlashcards[currentIndex].options?.[
                            selectedAnswer?.charCodeAt(0)! - 65
                          ]}<br />
                        </span>
                      )}
                      <span className="text-green-400">
                        Correct answer: ({mockFlashcards[currentIndex].correctAnswer}) {mockFlashcards[currentIndex].options?.[mockFlashcards[currentIndex].correctAnswer?.charCodeAt(0)! - 65]}
                      </span>
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                      Explanation
                    </h3>
                    <EditableText
                      text={mockFlashcards[currentIndex].answer}
                      className="text-lg text-white/90 leading-relaxed"
                    />
                  </div>
                </div>
              )}
            </div>
            {/* Back */}
            <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-3xl p-8 
                         border border-white/10 flex flex-col shadow-2xl backface-hidden rotate-y-180">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
              <div className="relative flex flex-col items-start text-left">
                <EditableText
                  text={mockFlashcards[currentIndex].answer}
                  className="text-lg text-white/90 leading-relaxed"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="max-w-3xl mx-auto mt-12 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg
                     text-white/90 hover:bg-white/10 transition-all disabled:opacity-50
                     hover:scale-105 active:scale-95 disabled:hover:scale-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-4">
            <button
              onClick={() => handleNext()}
              className="p-4 rounded-2xl backdrop-blur-xl bg-red-500/10 border border-red-500/20 shadow-lg
                       text-red-400 hover:bg-red-500/20 transition-all
                       hover:scale-105 active:scale-95"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={handleKnown}
              className="p-4 rounded-2xl backdrop-blur-xl bg-green-500/10 border border-green-500/20 shadow-lg
                       text-green-400 hover:bg-green-500/20 transition-all
                       hover:scale-105 active:scale-95"
            >
              <Check className="w-6 h-6" />
            </button>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === mockFlashcards.length - 1}
            className="p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg
                     text-white/90 hover:bg-white/10 transition-all disabled:opacity-50
                     hover:scale-105 active:scale-95 disabled:hover:scale-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default FlashcardPage;