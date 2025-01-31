import React from 'react';
import { Pickaxe } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: JSX.Element;
  description: string;
}

interface SkillsProps {
  skills: Skill[];
  revealedSkills: Set<number>;
  onReveal: (index: number) => void;
}

export function Skills({ skills, revealedSkills, onReveal }: SkillsProps) {
  return (
    <section id="skills" className="min-h-screen bg-slate-800 p-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-purple-500">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`relative cursor-pointer group ${revealedSkills.has(index) ? 'revealed' : ''}`}
              onClick={() => onReveal(index)}
            >
              <div className={`bg-slate-900 p-6 rounded-lg transform transition-all duration-500 
                ${revealedSkills.has(index) ? 'scale-105 shadow-xl shadow-purple-500/20' : 'hover:shadow-lg'}`}>
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-purple-400">{skill.name}</h3>
                {revealedSkills.has(index) && (
                  <div className="mt-4 space-y-2">
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                )}
              </div>
              {!revealedSkills.has(index) && (
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Pickaxe className="w-8 h-8 text-purple-500 animate-bounce opacity-0 group-hover:opacity-100 transition-opacity" />
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