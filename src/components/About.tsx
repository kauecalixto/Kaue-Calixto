import React from 'react';

export function About() {
  return (
    <section id="about" className="min-h-screen bg-slate-800 p-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-blue-500">About Me</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed">
          I'm a passionate developer focused on creating engaging digital experiences. With expertise in JavaScript, React, Node.js, and Python, I'm always seeking new challenges and opportunities to learn and grow. When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.
          </p>
        </div>
      </div>
    </section>
  );
}