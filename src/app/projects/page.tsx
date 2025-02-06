'use client';

import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = projects.filter(
    project => filter === 'all' || project.category === filter
  );

  return (
    <main className="p-4">
      <header className="header mb-6">
        <h1 className="text-xl font-semibold">Projects</h1>
      </header>

      {/* Filter Buttons */}
      <div className="mb-6 -mx-4 px-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm
                ${filter === category.value
                  ? 'bg-button text-button-text'
                  : 'bg-secondary-bg text-text'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <div key={project.title} className="card space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">{project.title}</h2>
              <span className="text-xs px-2 py-1 bg-secondary-bg rounded-lg">
                {project.category}
              </span>
            </div>
            <p className="text-text-secondary text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-secondary-bg rounded-lg text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <p className="text-center py-8 text-text-secondary">
            No projects found for this category.
          </p>
        )}
      </div>
    </main>
  );
}

const categories = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'ai', label: 'AI/ML' },
];

const projects = [
  {
    title: "E-commerce Platform",
    category: "web",
    description: "A modern e-commerce platform built with Next.js and Stripe integration.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
  },
  {
    title: "AI Image Generator",
    category: "ai",
    description: "An AI-powered image generation tool using state-of-the-art models.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
  },
  {
    title: "Fitness Tracker",
    category: "mobile",
    description: "A cross-platform mobile app for tracking workouts and nutrition.",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
  },
  {
    title: "E-commerce Platform",
    category: "web",
    description: "A modern e-commerce platform built with Next.js and Stripe integration.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
  },
  {
    title: "AI Image Generator",
    category: "ai",
    description: "An AI-powered image generation tool using state-of-the-art models.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
  },
  {
    title: "Fitness Tracker",
    category: "mobile",
    description: "A cross-platform mobile app for tracking workouts and nutrition.",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
  },
  {
    title: "E-commerce Platform",
    category: "web",
    description: "A modern e-commerce platform built with Next.js and Stripe integration.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
  },
  {
    title: "AI Image Generator",
    category: "ai",
    description: "An AI-powered image generation tool using state-of-the-art models.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
  },
  {
    title: "Fitness Tracker",
    category: "mobile",
    description: "A cross-platform mobile app for tracking workouts and nutrition.",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
  },
]; 