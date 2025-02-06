'use client';

import { useState, useEffect } from 'react';
import '../animations.css';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const filteredProjects = projects.filter(
    project => filter === 'all' || project.category === filter
  );

  return (
    <div className={`w-full ${isLoading ? 'opacity-0' : 'animate-fade-in'}`}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 animate-slide-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Projects
          </h1>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Explore our latest work and see how we&apos;re pushing the boundaries of web development.
          </p>
        </div>

        {/* Filter Buttons - Scrollable on mobile */}
        <div className="overflow-x-auto no-scrollbar -mx-4 px-4 sm:px-0 mb-8 sm:mb-12 animate-slide-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-nowrap sm:flex-wrap sm:justify-center gap-3 min-w-max sm:min-w-0">
            {categories.map((category, index) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-4 py-3 sm:py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap text-base sm:text-sm ${
                  filter === category.value
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                } touch-manipulation`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                transition-all duration-300 ease-in-out transform hover:-translate-y-2 touch-manipulation animate-scale-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl sm:text-6xl text-white/80 transform group-hover:scale-110 transition-transform duration-300">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 whitespace-nowrap ml-2 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs sm:text-sm rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found for this category.
            </p>
          </div>
        )}
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