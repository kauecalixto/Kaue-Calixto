import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export const Profile: React.FC = () => {
  return (
    <motion.div 
      className="mario-pipe p-8 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <motion.div 
          className="w-32 h-32 rounded-full overflow-hidden mario-block"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/perfil/perfil.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex-1 space-y-4 text-center md:text-left">
          <div>
            <motion.h1 
              className="text-2xl text-green-200 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Kauê Santos Calixto
            </motion.h1>
            <motion.p 
              className="text-green-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Desenvolvedor Full Stack
            </motion.p>
          </div>

          <motion.p 
            className="text-sm text-green-200 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Desenvolvedor apaixonado por criar soluções inovadoras e experiências únicas. 
            Especializado em desenvolvimento web full stack, com foco em React, Node.js e 
            arquiteturas cloud-native.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="https://github.com/kauecalixto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-green-200 hover:text-white transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/kauescalixto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-green-200 hover:text-white transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a 
              href="mailto:kaue.santos.calixto@gmail.com"
              className="flex items-center gap-2 text-sm text-green-200 hover:text-white transition-colors"
            >
              <Mail size={16} />
              Email
            </a>
            <span className="flex items-center gap-2 text-sm text-green-200">
              <MapPin size={16} />
              Guarulhos/Sp
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};