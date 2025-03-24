import React, { useState, useEffect } from 'react';
import Flag from "react-world-flags";
import { Star } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Languages } from './components/Languages';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Navigation } from './components/Navigation';
import { FaJs, FaReact, FaNode, FaPython, FaDocker , FaDatabase  } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { playRevealSound } from './sounds';
import { AnimatePresence, motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { ThemeProvider } from "next-themes";

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [revealedSkills, setRevealedSkills] = useState<Set<number>>(new Set());
  const [revealedLanguages, setRevealedLanguages] = useState(new Set<number>());
  const [revealedExperiences, setRevealedExperiences] = useState<Set<number>>(new Set());
  const [revealedProjects, setRevealedProjects] = useState<Set<number>>(new Set());
  const [revealedCertifications, setRevealedCertifications] = useState<Set<number>>(new Set());
  const [score, setScore] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => setShowContent(true), 500);
    }, 3000);
    return () => clearTimeout(introTimer);
  }, []);

  const skills = [
    { 
      name: "JavaScript", 
      level: 70, 
      icon: <FaJs size={40} className="text-[#F7DF1E]" />, 
      description: "Advanced JavaScript development including ES6+ features" 
    },
    { 
      name: "React", 
      level: 60, 
      icon: <FaReact size={40} className="text-[#61DBFB]" />, 
      description: "Complex React applications with modern hooks and patterns" 
    },
    { 
      name: "Node.js", 
      level: 60, 
      icon: <FaNode size={40} className="text-[#68A063]" />, 
      description: "Backend development with Express and REST APIs" 
    },
    { 
      name: "TypeScript", 
      level: 75, 
      icon: <SiTypescript size={40} className="text-[#3178C6]" />, 
      description: "Type-safe development with advanced TypeScript features" 
    },
    { 
      name: "Python", 
      level: 90, 
      icon: <FaPython size={40} className="text-[#3776AB]" />, 
      description: "Data processing and automation scripts" 
    },
    { 
      name: "Docker", 
      level: 65, 
      icon: <FaDocker size={40} className="text-[#2496ED]" />, 
      description: "Container orchestration and deployment" 
    },
    { 
      name: "SQL", 
      level: 40, 
      icon: <FaDatabase  size={40} className="text-[#2496ED]" />, 
      description: "Structured Query Language for managing relational databases" 
    },
  ];

  const languages = [
    {
      name: "English",
      level: 70,
      icon: <img src="https://flagcdn.com/w320/gb.png" alt="English flag" className="w-10 h-10" />,
      description: "Fluent in writing."
    },
    {
      name: "Spanish",
      level: 60,
      icon: <img src="https://flagcdn.com/w320/es.png" alt="Spanish flag" className="w-10 h-10" />,
      description: "Basic comprehension."
    },
    {
      name: "Português",
      level: 100,
      icon: <img src="https://flagcdn.com/w320/br.png" alt="Portuguese flag" className="w-10 h-10" />,
      description: "Fluent."
    },
  ];

  const experiences = [
    {
      title: "Help Desk",
      company: "Aliança Net Ltda ",
      period: "2024 - Present",
      description: "Technical Support",
      icon: "🚀"
    },
  ];

  const projects = [
    {
      title: "Working with Excel Spreadsheet",
      description: "This notebook shows how to use Python and Pandas to work with Excel files, including reading, merging, handling missing data, creating columns, manipulating dates, and visualizing data.",
      technologies: ["Python"],
      image: `${import.meta.env.BASE_URL}projects/workwithexcel.png`,
      demoUrl: "https://github.com/kauecalixto/TrabalhandocomPlanilhaExcel",
      githubUrl: "https://github.com/kauecalixto/TrabalhandocomPlanilhaExcel"
    },
    {
      title: "Image Processing Package",
      description: "This is a Python package for image processing. It offers a variety of features to manipulate images, apply filters, perform transformations, and much more.",
      technologies: ["Python"],
      image: `${import.meta.env.BASE_URL}projects/ImageProcessingPackage.png`,
      demoUrl: "https://github.com/kauecalixto/image_processing",
      githubUrl: "https://github.com/kauecalixto/image_processing"
    },
    {
      title: "Digital Roots",
      description: "A project focused on promoting digital inclusion and empowering underrepresented communities through technology and skills development.",
      technologies: ["JavaScript", "html", "css"],
      image: `${import.meta.env.BASE_URL}projects/raizes.png`,
      demoUrl: "https://github.com/Nataly-Costaa/raizes-digitais",
      githubUrl: "https://github.com/Nataly-Costaa/raizes-digitais"
    }
  ];

  const certifications = [
    {
      title: "Superior de Tecnologia em Desenvolvimento BackEnd",
      organization: "Anhanguera",
      date: "2023",
      credentialUrl: "",
      image: `${import.meta.env.BASE_URL}certifications/Superior de Tecnologia em Desenvolvimento BackEnd.jpeg`
    },
    {
      title: "Formação Python Fundamentals",
      organization: "Digital innovation",
      date: "2023",
      credentialUrl: "https://www.dio.me",
      image: `${import.meta.env.BASE_URL}certifications/FormaçãoPythonFundamentals.png`
    },
    {
      title: "Formação Avançada em Desenvolvimento Web e Gestão Ágil",
      organization: "Programadores Do Amanha",
      date: "2025",
      credentialUrl: "https://programadoresdoamanha.org.br/pt",
      image: `${import.meta.env.BASE_URL}certifications/Pda.png`
    }
  ];

  const handleSkillReveal = (index: number) => {
    if (!revealedSkills.has(index)) {
      playRevealSound();
      setScore(prev => prev + 10);
      setRevealedSkills(prev => new Set([...prev, index]));
    }
  };

  const handleLanguagesReveal = (index: number) => {
    if (!revealedLanguages.has(index)) {
      playRevealSound();
      setScore(prev => prev + 10);
      setRevealedLanguages(prev => new Set([...prev, index]));
    }
  };

  const handleExperienceReveal = (index: number) => {
    if (!revealedExperiences.has(index)) {
      playRevealSound();
      setScore(prev => prev + 15);
      setRevealedExperiences(prev => new Set([...prev, index]));
    }
  };

  const handleProjectReveal = (index: number) => {
    if (!revealedProjects.has(index)) {
      playRevealSound();
      setScore(prev => prev + 25);
      setRevealedProjects(prev => new Set([...prev, index]));
    }
  };

  const handleCertificationReveal = (index: number) => {
    if (!revealedCertifications.has(index)) {
      playRevealSound();
      setScore(prev => prev + 20);
      setRevealedCertifications(prev => new Set([...prev, index]));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
        <AnimatePresence>
          {showIntro && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-900 z-50"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Gamepad2 className="w-24 h-24 text-yellow-500" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Score Display */}
              <div className="fixed top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-500 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2 z-50 shadow-lg hover:shadow-xl transition-shadow">
                <Star className="w-5 h-5" />
                <span>Score: {score}</span>
              </div>

              <ThemeToggle />
              <Navigation />

              <div className="ml-16">
                <Hero />
                <About />
                <Experience 
                  experiences={experiences} 
                  revealedExperiences={revealedExperiences}
                  onReveal={handleExperienceReveal}
                />
                <Skills 
                  skills={skills} 
                  revealedSkills={revealedSkills}
                  onReveal={handleSkillReveal}
                />
                <Languages
                  languages={languages}
                  revealedLanguages={revealedLanguages}
                  handleLanguagesReveal={handleLanguagesReveal}
                />
                <Certifications 
                  certifications={certifications}
                  revealedCertifications={revealedCertifications}
                  onReveal={handleCertificationReveal}
                />
                <Projects 
                  projects={projects}
                  revealedProjects={revealedProjects}
                  onReveal={handleProjectReveal}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;