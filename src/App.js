import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Presentation from './pages/Presentation.tsx';
import Competences from './pages/Competences.tsx';
import CompetenceDetail from './pages/CompetenceDetail.tsx';
import Realisations from './pages/Realisations.tsx';
import RealisationDetail from './pages/RealisationDetail.tsx';
import Parcours from './pages/Parcours.tsx';
import Contact from './pages/Contact.tsx';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/competence/:id" element={<CompetenceDetail />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/realisation/:id" element={<RealisationDetail />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
