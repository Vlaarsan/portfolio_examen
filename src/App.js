import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.tsx';
import Home from './pages/HomeScreen.tsx';
import Presentation from './pages/PresentationScreen.tsx';
import Competences from './pages/CompetencesScreen.tsx';
import CompetenceDetail from './pages/CompetenceDetail.tsx';
import Realisations from './pages/RealisationsScreen.tsx';
import RealisationDetail from './pages/RealisationDetailScreen.tsx';
import Formations from './pages/FormationsScreen.tsx';
import FormationDetail from './pages/FormationDetailScreen.tsx';
import Experiences from './pages/ExperiencesScreen.tsx';
import ExperienceDetail from './pages/ExperienceDetailScreen.tsx';
import Contact from './pages/ContactScreen.tsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app-background min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/competence/:id" element={<CompetenceDetail />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/realisation/:id" element={<RealisationDetail />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/formation/:id" element={<FormationDetail />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
