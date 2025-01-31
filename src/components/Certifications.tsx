import React from 'react';
import { Award, Pickaxe, ExternalLink } from 'lucide-react';
import { playClickSound } from '../sounds';

interface Certification {
  title: string;
  organization: string;
  date: string;
  credentialUrl: string;
  image: string;
}

interface CertificationsProps {
  certifications: Certification[];
  revealedCertifications: Set<number>;
  onReveal: (index: number) => void;
}

export function Certifications({ certifications, revealedCertifications, onReveal }: CertificationsProps) {
  return (
    <section id="certifications" className="min-h-screen bg-slate-800 p-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-yellow-500 flex items-center gap-3">
          Certifications
          <Award className="w-8 h-8 animate-float" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`relative cursor-pointer group ${revealedCertifications.has(index) ? 'revealed' : ''}`}
              onClick={() => onReveal(index)}
            >
              <div className={`bg-slate-900 rounded-lg overflow-hidden transform transition-all duration-500 
                ${revealedCertifications.has(index) ? 'scale-105 shadow-xl shadow-yellow-500/20' : 'hover:shadow-lg'}`}>
                <div className="relative h-48">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  {!revealedCertifications.has(index) && (
                    <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center backdrop-blur-sm">
                      <Pickaxe className="w-12 h-12 text-white animate-bounce" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">{cert.title}</h3>
                  {revealedCertifications.has(index) && (
                    <>
                      <p className="text-gray-400 mb-2">{cert.organization}</p>
                      <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-500 hover:text-yellow-400 flex items-center gap-2 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickSound();
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Credential
                      </a>
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