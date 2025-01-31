import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="relative text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold mb-4 text-white">
          <span className="text-yellow-500 animate-pulse">I'm Kauê</span> Calixto
        </h1>
        <p className="text-xl text-gray-300 animate-float">Full Stack Developer</p>
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-yellow-500 animate-fade-in">
          <img 
            src="/perfil/perfil.png"
            alt="Kauê Calixto"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/kauecalixto" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/kauescalixto" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="mailto:kaue.santos.calixto@gmail.com" className="text-white hover:text-yellow-500 transition-colors">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}