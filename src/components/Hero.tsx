import React from 'react';
import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react';
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home"  className="min-h-screen w-full relative flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="relative text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold mb-4 text-white">
          <span className="text-yellow-500 animate-pulse">I'm Kauê</span> Calixto
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          <TypewriterComponent
            options={{
              strings: [
                '<span class="text-yellow-400">Full Stack Developer</span>', 
                '<span class="text-white">React Specialist</span>', 
                '<span class="text-yellow-400">Node.js Enthusiast</span>',
                '<span class="text-white">Python Enthusiast</span>'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
              cursor: '|',
            }}
          />
        </h2>
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-yellow-500 animate-fade-in">
          <img 
            src={`${import.meta.env.BASE_URL}perfil/perfil.png`}
            alt="Kauê Calixto"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <motion.a
            href="https://github.com/kauecalixto"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-yellow-500 dark:hover:bg-yellow-500 hover:text-white transition-colors"
          >
            <GitHub className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/kauecalixto"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-yellow-500 dark:hover:bg-yellow-500 hover:text-white transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="mailto:kaue.calixto@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-yellow-500 dark:hover:bg-yellow-500 hover:text-white transition-colors"
          >
            <Mail className="h-6 w-6" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
