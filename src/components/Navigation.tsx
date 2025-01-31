import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Code2, FolderGit2, Award } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'profile', label: 'Sobre Mim', icon: User },
    { id: 'experience', label: 'Experiência', icon: Briefcase },
    { id: 'skills', label: 'Habilidades', icon: Code2 },
    { id: 'projects', label: 'Projetos', icon: FolderGit2 },
    { id: 'certifications', label: 'Certificações', icon: Award },
  ];

  return (
    <nav className="sticky top-16 z-10 bg-[#1a1c2e]/80 backdrop-blur-sm border-b border-orange-950/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start overflow-x-auto gap-1 py-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`
                  relative px-4 py-2 rounded-lg text-sm whitespace-nowrap
                  ${isActive ? 'mario-pipe text-green-200' : 'text-gray-400 hover:text-white'}
                  transition-colors duration-200
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Icon size={16} />
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400"
                    layoutId="activeSection"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};