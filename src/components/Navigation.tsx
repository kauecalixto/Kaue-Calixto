import React from 'react';
import { Pickaxe, User, Briefcase, Code, FolderGit, Award } from 'lucide-react';
import { playClickSound } from '../sounds';

const navItems = [
  { id: 'home', icon: Pickaxe, color: 'yellow' },
  { id: 'about', icon: User, color: 'blue' },
  { id: 'experience', icon: Briefcase, color: 'green' },
  { id: 'skills', icon: Code, color: 'purple' },
  { id: 'certifications', icon: Award, color: 'yellow' },
  { id: 'projects', icon: FolderGit, color: 'red' }
];

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-16 h-screen bg-slate-800 dark:bg-slate-950 flex flex-col items-center py-8 space-y-8 z-40 shadow-lg">
      {navItems.map(({ id, icon: Icon, color }) => (
        <div key={id} className="relative group">
          <button
            className={`minecraft-block w-12 h-12 flex items-center justify-center bg-${color}-500 rounded-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-${color}-400 focus:ring-offset-2 focus:ring-offset-slate-800`}
            onClick={() => {
              playClickSound();
              const element = document.getElementById(id);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Icon className="w-8 h-8 text-white" />
          </button>
          <span className="absolute left-16 bg-slate-700 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap capitalize shadow-lg">
            {id}
          </span>
        </div>
      ))}
    </nav>
  );
}