'use client';

import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Weather-Application',
    description: 'A modern, responsive weather application built with React and TypeScript that provides real-time weather data using geolocation or city search. This project showcases clean architecture, modern React patterns, and a polished user experience.',
    tags: ['React', 'Node.js', 'Vite', 'Tailwind CSS'],
    image: '/assets/images/weather-app.jpg',
    github: 'https://github.com/Muhavii/Weather-Application',
    live: 'https://muhavi-weather-app.vercel.app/'
  },
  {
    title: 'Job Application Tracker',
    description: 'A job application tracker app built with React and TypeScript that allows users to track their job applications and manage their application process.',
    tags: ['React', 'Node.js', 'Vite', 'Firebase', 'Tailwind CSS'],
    image: '/assets/images/job-tracker.jpg',
    github: 'https://github.com/Muhavii/Job-Application-Tracker-App',
    live: 'https://jobtrackerapp-3f62c.web.app/'
  },
  {
    title: 'Django Blog Web Application',
    description: 'A Django blog web application built with Django and TypeScript that allows users to create and manage their blog posts.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Django Rest Framework', 'Tailwind CSS'],
    image: '/assets/images/django-blog.jpg',
    github: 'https://github.com/Muhavii/Django-Blog-Website',
    live: '#'
  },
  {
    title: 'Shooter Game',
    description: 'A shooter game built with React and TypeScript that allows users to play a game of shooting targets.',
    tags: ['HTML5 Canvas', 'JavaScript', 'CSS3', 'Tailwind CSS'],
    image: '/assets/images/shooter-game.jpg',
    github: 'https://github.com/Muhavii/Shooter-Game',
    live: 'https://muhavis-shooter-game.vercel.app/'
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="h-64 relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                    <Code className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-white/90 text-gray-900 rounded-full text-sm font-medium hover:bg-white transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}