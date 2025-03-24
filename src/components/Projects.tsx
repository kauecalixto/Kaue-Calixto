import React from 'react';
import { Pickaxe, Github, Globe2, FolderGit } from 'lucide-react';
import { playClickSound } from '../sounds';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectsProps {
  projects: Project[];
  revealedProjects: Set<number>;
  onReveal: (index: number) => void;
}

export function Projects({ projects, revealedProjects, onReveal }: ProjectsProps) {
  return (
    <section id="projects" className="min-h-screen bg-slate-900 p-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-red-500 flex items-center gap-3">
          Projects
          <FolderGit className="w-8 h-8 animate-float" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`minecraft-block relative cursor-pointer group ${revealedProjects.has(index) ? 'revealed' : ''}`}
              onClick={() => onReveal(index)}
            >
              <div className={`bg-slate-800 rounded-lg overflow-hidden transform transition-all duration-500 
                ${revealedProjects.has(index) ? 'scale-105 shadow-xl shadow-red-500/20' : 'hover:shadow-lg'}`}>
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {!revealedProjects.has(index) && (
                    <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center backdrop-blur-sm">
                      <Pickaxe className="w-12 h-12 text-white animate-bounce" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-red-500 mb-2">{project.title}</h3>
                  {revealedProjects.has(index) && (
                    <>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-red-900/30 text-red-300 rounded-md text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-500 hover:text-red-400 flex items-center gap-2 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              playClickSound();
                            }}
                          >
                            <Globe2 className="w-4 h-4" />
                            Demo
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-500 hover:text-red-400 flex items-center gap-2 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              playClickSound();
                            }}
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}