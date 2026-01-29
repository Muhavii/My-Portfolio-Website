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
    live: 'https://blogwithmuhavi.up.railway.app/'
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
    <section id="projects" className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="outlook-card outlook-focus p-8 md:p-12"
          initial={{ opacity: 0, y: 20, boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)" }}
          whileInView={{ opacity: 1, y: 0, boxShadow: "0 22px 55px rgba(10, 110, 209, 0.15)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full" />
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
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
                className="group relative outlook-ripple rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute right-4 top-4 z-10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <div className="outlook-peek rounded-2xl px-4 py-3 text-xs text-slate-700">
                    <p className="font-semibold text-slate-800">Quick Peek</p>
                    <p className="mt-1">Status: Live demo ready</p>
                    <p className="mt-1">Focus: UI polish + UX</p>
                  </div>
                </div>
                <div className="h-60 relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100">
                      <Code className="w-12 h-12 text-slate-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <motion.div 
                      className="space-x-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-white/90 text-slate-900 rounded-full text-sm font-medium hover:bg-white transition-colors"
                          aria-label="View on GitHub"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </motion.a>
                      )}
                      {project.live && project.live !== '#' && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                          aria-label="Live Demo"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}