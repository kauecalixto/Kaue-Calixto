import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Navigation } from './components/Navigation';
import { FaJs, FaReact, FaNode, FaPython, FaDocker } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { playRevealSound } from './sounds';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [revealedSkills, setRevealedSkills] = useState<Set<number>>(new Set());
  const [revealedExperiences, setRevealedExperiences] = useState<Set<number>>(new Set());
  const [revealedProjects, setRevealedProjects] = useState<Set<number>>(new Set());
  const [revealedCertifications, setRevealedCertifications] = useState<Set<number>>(new Set());
  const [score, setScore] = useState(0);

  const skills = [
    { 
      name: "JavaScript", 
      level: 90, 
      icon: <FaJs size={40} className="text-[#F7DF1E]" />, 
      description: "Advanced JavaScript development including ES6+ features" 
    },
    { 
      name: "React", 
      level: 85, 
      icon: <FaReact size={40} className="text-[#61DBFB]" />, 
      description: "Complex React applications with modern hooks and patterns" 
    },
    { 
      name: "Node.js", 
      level: 80, 
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
      level: 70, 
      icon: <FaPython size={40} className="text-[#3776AB]" />, 
      description: "Data processing and automation scripts" 
    },
    { 
      name: "Docker", 
      level: 65, 
      icon: <FaDocker size={40} className="text-[#2496ED]" />, 
      description: "Container orchestration and deployment" 
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
      image: "/projects/workwithexcel.png",
      demoUrl: "https://github.com/kauecalixto/TrabalhandocomPlanilhaExcel",
      githubUrl: "https://github.com/kauecalixto/TrabalhandocomPlanilhaExcel"
    },
    {
      title: "Image Processing Package",
      description: "This is a Python package for image processing. It offers a variety of features to manipulate images, apply filters, perform transformations, and much more.",
      technologies: ["Python"],
      image: "/projects/ImageProcessingPackage.png",
      demoUrl: "https://github.com/kauecalixto/image_processing",
      githubUrl: "https://github.com/kauecalixto/image_processing"
    },
    {
      title: "Digital Roots",
      description: "A project focused on promoting digital inclusion and empowering underrepresented communities through technology and skills development.",
      technologies: ["React", "OpenWeather API", "Mapbox"],
      image: "/projects/raizes.png",
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
      image: "/Certifications/Superior de Tecnologia em Desenvolvimento BackEnd.jpeg"
    },
    {
      title: "Formação Python Fundamentals",
      organization: "Digital innovation",
      date: "2023",
      credentialUrl: "https://www.dio.me",
      image: "/Certifications/FormaçãoPythonFundamentals.png"
    },
    {
      title: "Formação Avançada em Desenvolvimento Web e Gestão Ágil",
      organization: "Programadores Do Amanha",
      date: "2025",
      credentialUrl: "https://programadoresdoamanha.org.br/pt",
      image: "/Certifications/Pda.png"
    }
  ];

  const handleSkillReveal = (index: number) => {
    if (!revealedSkills.has(index)) {
      playRevealSound();
      setScore(prev => prev + 10);
      setRevealedSkills(prev => new Set([...prev, index]));
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
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
      {/* Score Display */}
      <div className="fixed top-4 right-4 bg-yellow-500 text-slate-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 z-50 shadow-lg hover:shadow-xl transition-shadow">
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
    </div>
  );
}

export default App;