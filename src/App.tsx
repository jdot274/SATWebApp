import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { DevModeProvider } from './contexts/DevModeContext';

// Page imports
import LandingPage1 from './pages/LandingPage1';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import TestsPage from './pages/TestsPage';
import PracticePage from './pages/PracticePage';
import ProgressPage from './pages/ProgressPage';
import ReviewPage from './pages/ReviewPage';
import FlashcardPage from './pages/FlashcardPage';
import BackgroundDemo2Page from './pages/BackgroundDemo2Page';
import ExamRegistrationPage from './pages/ExamRegistrationPage';
import StudyStreakPage from './pages/StudyStreakPage';
import GlassmorphicDemoPage from './pages/GlassmorphicDemoPage';
import StudyStreakDetailsPage from './pages/StudyStreakDetailsPage';
import VocabBuilderPage from './pages/VocabBuilderPage';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <DevModeProvider>
            <Routes>
            <Route path="/" element={<LandingPage1 />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/tests" element={<TestsPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/practice/flashcards" element={<FlashcardPage />} />
            <Route path="/background-demo-2" element={<BackgroundDemo2Page />} />
            <Route path="/register-exam" element={<ExamRegistrationPage />} />
            <Route path="/study-streak" element={<StudyStreakPage />} />
            <Route path="/study-streak-details" element={<StudyStreakDetailsPage />} />
            <Route path="/glassmorphic" element={<GlassmorphicDemoPage />} />
            <Route path="/vocabulary" element={<VocabBuilderPage />} />
          </Routes>
        </DevModeProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;