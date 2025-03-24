import React from "react";
import { Pickaxe , Globe } from 'lucide-react';

interface Languages {
  name: string;
  level: number; // Percentual de proficiência
  icon: JSX.Element | string;
  description: string;
}

interface LanguagesProps {
  languages: Languages[];
  revealedLanguages: Set<number>;
  handleLanguagesReveal: (index: number) => void;
}

export function Languages({ languages, revealedLanguages,handleLanguagesReveal }: LanguagesProps) {
  return (
    <section id="languages" className="min-h-screen bg-slate-800 px-4 sm:px-8 md:px-16 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-blue-500 flex items-center gap-3">Languages
        <Globe className="w-8 h-8 animate-float" />
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {languages.map((language, index) => (
            <div
              key={index}
              className={`relative cursor-pointer group ${revealedLanguages.has(index) ? "revealed" : ""}`}
              onClick={() => handleLanguagesReveal(index)}
            >
              <div
                className={`bg-slate-900 p-6 rounded-lg transform transition-all duration-500 
                ${revealedLanguages.has(index) ? "scale-105 shadow-xl shadow-blue-500/20" : "hover:shadow-lg"}`}
              >
                <div className="mb-4">{language.icon}</div>
                <h3 className="text-xl font-semibold text-blue-400">{language.name}</h3>
                {revealedLanguages.has(index) && (
                  <div className="mt-4 space-y-2">
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${language.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-400">{language.description}</p>
                  </div>
                )}
              </div>
              {!revealedLanguages.has(index) && (
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                  <Pickaxe className="w-8 h-8 text-blue-500 animate-bounce opacity-0 group-hover:opacity-100 transition-opacity" />
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
