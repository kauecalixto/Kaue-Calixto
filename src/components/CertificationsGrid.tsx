import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { Trophy } from 'lucide-react';

export const CertificationsGrid: React.FC = () => {
  const playSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  return (
    <div className="mt-12">
      <div className="flex items-center gap-3 mb-8">
        <Trophy className="w-8 h-8 text-yellow-400" />
        <h2 className="text-2xl text-yellow-400">Certificações</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mario-block p-6 rounded-lg cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            onHoverStart={playSound}
          >
            <div className="mario-question opacity-20 group-hover:opacity-0 transition-opacity">?</div>
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-300 rounded-lg">
                  <cert.icon className="w-6 h-6 text-yellow-900" />
                </div>
                <h3 className="text-sm text-yellow-900 leading-tight">{cert.title}</h3>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-yellow-800">{cert.issuer}</p>
                <p className="text-xs text-yellow-700">{cert.date}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};