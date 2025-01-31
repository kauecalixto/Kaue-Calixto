import React from 'react';
import { RefreshCw, Star, Chrome as Mushroom } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onReset: () => void;
  score: number;
  progress: number;
}

export const Header: React.FC<HeaderProps> = ({ onReset, score, progress }) => {
  return (
    <header className="sticky top-0 z-20 mario-brick border-b-4 border-orange-950">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <motion.h1 
              className="text-2xl text-yellow-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Super Portfolio
            </motion.h1>
            <p className="text-xs text-yellow-200 mt-2">Explore o mundo das minhas habilidades</p>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Score */}
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <motion.span 
                className="text-xl text-yellow-400"
                key={score}
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                {score}
              </motion.span>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-2">
              <Mushroom className="w-5 h-5 text-red-400" />
              <div className="w-32 h-4 bg-gray-800 rounded-full overflow-hidden border-2 border-gray-700">
                <motion.div 
                  className="h-full bg-gradient-to-r from-red-500 to-red-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
            
            <button
              onClick={onReset}
              className="mario-block px-4 py-2 rounded-lg text-sm text-yellow-900"
            >
              <span className="flex items-center gap-2">
                <RefreshCw size={16} />
                Reiniciar
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};