import React from 'react';
import { Pickaxe } from 'lucide-react';
import { playRevealSound } from '../sounds';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: string;
}

interface ExperienceProps {
  experiences: Experience[];
  revealedExperiences: Set<number>;
  onReveal: (index: number) => void;
}

export function Experience({ experiences, revealedExperiences, onReveal }: ExperienceProps) {
  return (
    <section id="experience" className="min-h-screen bg-slate-900 p-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-green-500">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative cursor-pointer group ${revealedExperiences.has(index) ? 'revealed' : ''}`}
              onClick={() => onReveal(index)}
            >
              <div className={`bg-slate-800 p-6 rounded-lg transform transition-all duration-500 
                ${revealedExperiences.has(index) ? 'scale-105 shadow-xl shadow-green-500/20' : 'hover:shadow-lg'}`}>
                <div className="text-4xl mb-4">{exp.icon}</div>
                <h3 className="text-xl font-semibold text-green-400">{exp.title}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
                <p className={`mt-4 text-gray-300 transition-opacity duration-500 
                  ${revealedExperiences.has(index) ? 'opacity-100' : 'opacity-0'}`}>
                  {exp.description}
                </p>
              </div>
              {!revealedExperiences.has(index) && (
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Pickaxe className="w-8 h-8 text-green-500 animate-bounce opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}