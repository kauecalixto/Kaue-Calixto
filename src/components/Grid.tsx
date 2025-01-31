import React from 'react';
import { Category, Cell } from '../types';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

interface GridProps {
  categories: Category[];
  onCellClick: (cell: Cell) => void;
  revealedCells: Set<string>;
}

export const Grid: React.FC<GridProps> = ({ categories, onCellClick, revealedCells }) => {
  return (
    <div className="grid gap-12">
      {categories.map((category, rowIndex) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: rowIndex * 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-8 h-8 text-green-400" />
            <h2 className="text-xl text-green-400">{category.name}</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {category.items.map((item, colIndex) => {
              const cellId = `${rowIndex}-${colIndex}`;
              const isRevealed = revealedCells.has(cellId);

              return (
                <motion.button
                  key={item.title}
                  className={`
                    relative aspect-square rounded-lg
                    ${isRevealed 
                      ? 'mario-pipe' 
                      : 'mario-block'
                    }
                  `}
                  onClick={() => onCellClick({ ...item, row: rowIndex, col: colIndex })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {!isRevealed && (
                    <div className="mario-question">?</div>
                  )}
                  
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
                    <motion.div
                      animate={isRevealed ? { 
                        rotateY: 360,
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className={`w-8 h-8 mb-3 ${
                        isRevealed ? 'text-green-200' : 'text-yellow-900'
                      }`} />
                    </motion.div>
                    <span className={`text-sm leading-tight text-center ${
                      isRevealed ? 'text-green-200' : 'text-yellow-900'
                    }`}>
                      {item.title}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
};