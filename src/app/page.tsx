'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

export default function Home() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (!targetId || targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: (targetElement as HTMLElement).offsetTop - 80, // Adjust for fixed header if you have one
              behavior: 'smooth' as ScrollBehavior
            });
          }
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Griffins Muteheri | Full Stack Developer</title>
        <meta name="description" content="Personal portfolio of Griffins Muteheri, a Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Griffins Muteheri. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
