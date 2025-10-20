'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mouse } from 'lucide-react';
import Link from 'next/link';

const CV_PATH = '/assets/Griffins Muteheri CV.pdf';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,transparent)]" />
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Hi, I'm Griffins Muteheri
          </span>
        </motion.h1>
        
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Full Stack Developer
        </motion.h2>
        
        <motion.p 
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build exceptional digital experiences with modern web technologies.
          Currently focused on creating beautiful, responsive, and user-friendly applications.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          
          <a
            href={CV_PATH}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <span>Download CV</span>
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-sm">Scroll to explore</span>
          <Mouse className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}