'use client';

import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = projects.filter(
    project => filter === 'all' || project.category === filter
  );

  return (
    <div className="w-full">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our latest work and see how we're pushing the boundaries of web development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === category.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-100 dark:bg-gray-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl text-gray-300 dark:text-gray-600">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'ai', label: 'AI & ML' },
];

const projects = [
  {
    title: "E-commerce Platform",
    category: "web",
    description: "A modern e-commerce platform built with Next.js and Stripe integration.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
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
    title: "Task Management",
    category: "web",
    description: "A collaborative task management tool for remote teams.",
    technologies: ["Vue.js", "GraphQL", "MongoDB", "Express"],
  },
  {
    title: "Sentiment Analyzer",
    category: "ai",
    description: "Real-time sentiment analysis for social media feeds.",
    technologies: ["Python", "BERT", "FastAPI", "React"],
  },
  {
    title: "Food Delivery App",
    category: "mobile",
    description: "A food delivery application with real-time order tracking.",
    technologies: ["Flutter", "Firebase", "Google Maps", "Node.js"],
  },
]; 