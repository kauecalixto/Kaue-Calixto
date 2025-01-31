import React, { useState } from 'react';
import { Grid } from './components/Grid';
import { Modal } from './components/Modal';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { CertificationsGrid } from './components/CertificationsGrid';
import { categories } from './data/portfolio';
import { Cell } from './types';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  const [revealedCells, setRevealedCells] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const handleCellClick = (cell: Cell) => {
    if (!revealedCells.has(`${cell.row}-${cell.col}`)) {
      setScore(prev => prev + 100);
      setSelectedCell(cell);
      setRevealedCells(prev => new Set([...prev, `${cell.row}-${cell.col}`]));
      playRevealSound();
    }
  };

  const playRevealSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  const closeModal = () => {
    setSelectedCell(null);
  };

  const resetGame = () => {
    setRevealedCells(new Set());
    setSelectedCell(null);
    setScore(0);
  };

  const progress = (revealedCells.size / (categories.length * 4)) * 100;

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <Profile />;
      case 'experience':
        return (
          <Grid 
            categories={[categories[0]]}
            onCellClick={handleCellClick}
            revealedCells={revealedCells}
          />
        );
      case 'skills':
        return (
          <Grid 
            categories={[categories[1]]}
            onCellClick={handleCellClick}
            revealedCells={revealedCells}
          />
        );
      case 'projects':
        return (
          <Grid 
            categories={[categories[2]]}
            onCellClick={handleCellClick}
            revealedCells={revealedCells}
          />
        );
      case 'certifications':
        return <CertificationsGrid />;
      default:
        return (
          <>
            <Profile />
            <Grid 
              categories={categories}
              onCellClick={handleCellClick}
              revealedCells={revealedCells}
            />
            <CertificationsGrid />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1c2e] text-white overflow-hidden relative">
      {/* Mario-style background */}
      <div className="absolute inset-0 mario-brick opacity-10" />
      
      <div className="relative z-10">
        <Header onReset={resetGame} score={score} progress={progress} />
        <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {selectedCell && (
          <Modal cell={selectedCell} onClose={closeModal} />
        )}
      </div>
    </div>
  );
}

export default App;