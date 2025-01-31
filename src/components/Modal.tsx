import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Cell } from '../types';

interface ModalProps {
  cell: Cell;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ cell, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="mario-pipe max-w-lg w-full relative p-6 rounded-xl"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-green-200 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <motion.div 
            className="flex items-center gap-4 mb-6"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-3 bg-green-400/20 rounded-lg">
              <cell.icon className="w-8 h-8 text-green-200" />
            </div>
            <h2 className="text-xl text-green-200">
              {cell.title}
            </h2>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-green-200">{cell.description}</p>
            {cell.details && (
              <ul className="mt-4 space-y-2">
                {cell.details.map((detail, index) => (
                  <motion.li 
                    key={index} 
                    className="text-sm text-green-200 flex items-start gap-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="text-green-400 mt-1">★</span>
                    {detail}
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};